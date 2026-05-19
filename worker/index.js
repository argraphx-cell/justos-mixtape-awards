/**
 * The Justo's Mixtape Awards — Cloudflare Worker
 * API backend at https://justos-api.argraphx.workers.dev
 *
 * Environment variables (set in Cloudflare dashboard → Worker → Settings → Variables):
 *   ADMIN_SECRET   — shared secret; client sends as x-admin-password header
 *   ADMIN_PASSWORD — password checked by POST /api/admin/login
 *   RESEND_API_KEY — notifications via Resend (optional)
 *
 * To deploy: npm run deploy:worker
 */

const ALLOWED_ORIGINS = new Set([
  "https://justos-mixtape-awards.pages.dev",
]);

function getCorsHeaders(request) {
  const origin = request.headers.get("Origin") ?? "";
  const allowedOrigin = ALLOWED_ORIGINS.has(origin)
    ? origin
    : "https://justos-mixtape-awards.pages.dev";
  return {
    "Access-Control-Allow-Origin": allowedOrigin,
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, x-admin-password",
    "Access-Control-Allow-Credentials": "true",
    "Vary": "Origin",
  };
}

function corsResponse(body, request, init = {}) {
  const res = new Response(body, init);
  for (const [k, v] of Object.entries(getCorsHeaders(request))) {
    res.headers.set(k, v);
  }
  return res;
}

function json(data, request, status = 200) {
  return corsResponse(JSON.stringify(data), request, {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

function checkAdminAuth(request, env) {
  const secret = env.ADMIN_SECRET;
  if (!secret) return { ok: false, error: "ADMIN_SECRET not configured", status: 500 };
  const provided = request.headers.get("x-admin-password") ?? "";
  if (!provided || provided !== secret) return { ok: false, error: "Unauthorized", status: 401 };
  return { ok: true };
}

async function handleAdminLogin(request, env) {
  let body;
  try { body = await request.json(); }
  catch { return json({ error: "Invalid JSON body" }, request, 400); }

  const adminPassword = env.ADMIN_PASSWORD;
  if (!adminPassword) return json({ error: "ADMIN_PASSWORD not configured" }, request, 500);

  if (body.password && body.password === adminPassword) {
    return json({ ok: true }, request);
  }
  return json({ error: "Incorrect password" }, request, 401);
}

async function handleNotify(request, env) {
  let body;
  try { body = await request.json(); }
  catch { return json({ error: "Invalid JSON body" }, request, 400); }

  const phone = (body.phone ?? "").trim();
  if (!phone || (phone.match(/\d/g) ?? []).length < 10) {
    return json({ error: "Invalid phone number" }, request, 400);
  }

  if (env.NOTIFY_PHONES) {
    await env.NOTIFY_PHONES.put(phone, new Date().toISOString());
  }

  return json({ success: true }, request);
}

async function handleGetNotifyList(request, env) {
  const auth = checkAdminAuth(request, env);
  if (!auth.ok) return json({ error: auth.error }, request, auth.status);

  if (!env.NOTIFY_PHONES) return json({ data: [] }, request);

  const listed = await env.NOTIFY_PHONES.list();
  const entries = await Promise.all(
    listed.keys.map(async (key) => ({
      contact: key.name,
      timestamp: await env.NOTIFY_PHONES.get(key.name),
    }))
  );
  entries.sort((a, b) => (b.timestamp ?? "").localeCompare(a.timestamp ?? ""));
  return json({ data: entries }, request);
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const { pathname } = url;
    const method = request.method;

    if (method === "OPTIONS") {
      const origin = request.headers.get("Origin") ?? "";
      const allowedOrigin = ALLOWED_ORIGINS.has(origin)
        ? origin
        : "https://justos-mixtape-awards.pages.dev";
      return new Response(null, {
        status: 204,
        headers: {
          "Access-Control-Allow-Origin": allowedOrigin,
          "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type, x-admin-password",
          "Access-Control-Allow-Credentials": "true",
          "Access-Control-Max-Age": "0",
          "Cache-Control": "no-store",
          "Vary": "Origin",
        },
      });
    }

    // ─── Construction mode gate ───────────────────────────────────────────────
    if (env.SITE_MODE === "construction") {
      const STATIC_EXTS = /\.(js|css|png|gif|mp4|webp|ico|woff|woff2|jpg|jpeg|svg)$/i;
      const isRoot  = pathname === "/";
      const isAdmin = pathname.startsWith("/admin");
      const isApi   = pathname.startsWith("/api");
      const isAsset = STATIC_EXTS.test(pathname);

      if (!isRoot && !isAdmin && !isApi && !isAsset) {
        return Response.redirect(new URL("/", request.url).toString(), 302);
      }
    }

    if (pathname === "/api/admin/login" && method === "POST") return handleAdminLogin(request, env);
    if (pathname === "/api/notify"      && method === "POST") return handleNotify(request, env);
    if (pathname === "/api/admin/notify-list" && method === "GET") return handleGetNotifyList(request, env);

    return json({ error: `No route: ${method} ${pathname}` }, request, 404);
  },
};

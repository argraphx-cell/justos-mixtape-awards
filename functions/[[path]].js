const STATIC_EXTS = /\.(js|css|png|gif|mp4|webp|ico|woff|woff2|jpg|jpeg|svg)$/i;

export async function onRequest(context) {
  const { request, env, next } = context;

  if (env.SITE_MODE !== "construction") {
    return next();
  }

  const { pathname } = new URL(request.url);

  if (STATIC_EXTS.test(pathname)) {
    return next();
  }

  if (pathname.startsWith("/admin")) {
    return env.ASSETS.fetch(
      new Request(new URL("/index.html", request.url).toString(), { method: "GET" })
    );
  }

  if (pathname.startsWith("/api")) {
    return next();
  }

  if (pathname === "/") {
    return env.ASSETS.fetch(
      new Request(new URL("/construction.html", request.url).toString(), { method: "GET" })
    );
  }

  return Response.redirect(new URL("/", request.url).toString(), 302);
}

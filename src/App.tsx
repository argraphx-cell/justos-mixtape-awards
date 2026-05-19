import { Switch, Route } from "wouter";

function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] flex flex-col items-center justify-center text-center px-4">
      <h1 className="font-display text-[#e8611a] text-6xl md:text-8xl tracking-wider mb-4">
        THE JUSTO'S
      </h1>
      <h2 className="font-display text-white text-4xl md:text-6xl tracking-widest mb-8">
        MIXTAPE AWARDS
      </h2>
      <p className="font-mono text-sm text-neutral-500 tracking-widest uppercase">
        Coming Soon
      </p>
    </main>
  );
}

function NotFound() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
      <p className="font-mono text-[#e8611a] text-sm tracking-widest">404 — NOT FOUND</p>
    </main>
  );
}

export default function App() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

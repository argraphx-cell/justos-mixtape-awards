import { Switch, Route } from "wouter";
import Home from "./pages/Home";

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

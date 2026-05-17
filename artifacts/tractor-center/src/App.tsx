import { Switch, Route, Router as WouterRouter } from "wouter";
import HomePage from "@/pages/HomePage";

function Router() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      {/* Fallback route to render the landing page and avoid blank screens on subpaths (e.g. Vercel preview/health checks) */}
      <Route component={HomePage} />
    </Switch>
  );
}

function App() {
  return (
    <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
      <Router />
    </WouterRouter>
  );
}

export default App;

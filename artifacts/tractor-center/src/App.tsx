import { Switch, Route, Router as WouterRouter } from "wouter";
import HomePage from "@/pages/HomePage";

function Router() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
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

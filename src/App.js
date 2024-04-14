import { Switch, Route, Redirect } from "react-router-dom";
import Navbar from "./components/Navbar";
import Bags from "./components/Bags";
import Travel from "./components/Travel";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/bags" component={Bags} />
        <Route exact path="/travel" component={Travel} />
        <Redirect to="/bags" />
      </Switch>
    </>
  );
}

export default App;

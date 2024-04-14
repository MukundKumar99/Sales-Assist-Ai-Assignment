import { Switch, Route, Redirect } from "react-router-dom";
import Navbar from "./components/Navbar";
import Bags from "./components/Bags";
import Travel from "./components/Travel";
import Accessories from "./components/Accessories";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/bags" component={Bags} />
        <Route exact path="/travel" component={Travel} />
        <Route exact path="/accessories" component={Accessories} />
        <Redirect to="/bags" />
      </Switch>
    </>
  );
}

export default App;

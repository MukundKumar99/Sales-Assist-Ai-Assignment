import { Switch, Route, Redirect } from "react-router-dom";
import Navbar from "./components/Navbar";
import Bags from "./components/Bags";
import Travel from "./components/Travel";
import Accessories from "./components/Accessories";
import Gifting from "./components/Gifting";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/bags" component={Bags} />
        <Route exact path="/travel" component={Travel} />
        <Route exact path="/accessories" component={Accessories} />
        <Route exact path="/gifting" component={Gifting} />
        <Redirect to="/bags" />
      </Switch>
    </>
  );
}

export default App;

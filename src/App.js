import { Switch, Route, Redirect } from "react-router-dom";
import Navbar from "./components/Navbar";
import Bags from "./components/Bags";
import Travel from "./components/Travel";
import Accessories from "./components/Accessories";
import Gifting from "./components/Gifting";
import Jewellery from "./components/Jewellery";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/bags" component={Bags} />
        <Route exact path="/travel" component={Travel} />
        <Route exact path="/accessories" component={Accessories} />
        <Route exact path="/gifting" component={Gifting} />
        <Route exact path="/jewellery" component={Jewellery} />
        <Redirect to="/bags" />
      </Switch>
    </>
  );
}

export default App;

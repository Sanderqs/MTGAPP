import "./App.css";
import NavBar from "./component/NavBar";
import ManaCalculator from "./pages/ManaCalculator";
import LifeCounter from "./pages/LifeCounter";
import Rulings from "./pages/Rulings";
import Randomize from "./pages/Randomize";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/ManaCalculator" exact component={ManaCalculator} />
      </Switch>
      <Switch>
        <Route path="/LifeCounter" exact component={LifeCounter} />
      </Switch>
      <Switch>
        <Route path="/Rulings" exact component={Rulings} />
      </Switch>
      <Switch>
        <Route path="/Randomize" exact component={Randomize} />
      </Switch>
    </Router>
  );
}

export default App;

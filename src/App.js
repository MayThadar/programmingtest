import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Detail from "./pages/Detail";
import Home from "./pages/Home";
import Products from "./pages/Products"

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/:category/detail/:id">
            <Detail />
          </Route>
          <Route exact path="/:category">
            <Products />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

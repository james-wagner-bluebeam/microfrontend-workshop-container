import React, { Suspense } from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const Mfe01Page = React.lazy(() => import("mfe01/Page"));

const Home = () => <h2>Home Page</h2>

const App = () => {
  return (
    <div>
      <h1>Microfrontend Workshop</h1>
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/mfe01">Microfrontend 01</Link>
            </li>
          </ul>

          <hr />

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/mfe01">
              <Suspense fallback={"loading..."}>
                <Mfe01Page/>
              </Suspense>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  )
}

export default App;

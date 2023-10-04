import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const Home = () => <h2>Home Page</h2>
const About = () => <h2>About Page</h2>
const Dashboard = () => <h2>Dashboard Page</h2>

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
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>

          <hr />

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  )
}

export default App;

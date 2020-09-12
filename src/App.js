import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route
            path="/:id"
            exact
            render={(props) => <About match={props.match} isIndex={false} />}
          />
        </Switch>
      </div>
    </Router>
  );
}

const About = ({ match }) => {
  return <div>{JSON.stringify(match.params.id)}</div>;
};

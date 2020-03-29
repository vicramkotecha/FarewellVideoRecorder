import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const App = () => {
    return (
        <Router>
        <div>
            <nav>
            <ul>
                <li>
                <Link to="/">Home</Link>
                </li>
            </ul>
            </nav>

            {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
            <Switch>
            <Route path="/redirect_uri">
                <h2>Redirected</h2>
            </Route>
            <Route path="/">
                <h2>Home</h2>
            </Route>
            </Switch>
        </div>
        </Router>
        );
};

export default App;

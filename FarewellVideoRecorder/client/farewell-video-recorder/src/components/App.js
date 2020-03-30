import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Video from "./Video"
import VideoListContainer from "../containers/VideoListContainer";


const App = () => {
    

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
                </ul>
                </nav>
                <VideoListContainer />
                {/* A <Switch> looks through its children <Route>s and
                    renders the first one that matches the current URL. */}
                <Switch>
                <Route path="/about">
                    <h2>About</h2>
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

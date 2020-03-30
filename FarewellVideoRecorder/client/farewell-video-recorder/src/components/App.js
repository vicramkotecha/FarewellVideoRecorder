import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import VideoListContainer from "../containers/VideoListContainer";
import About from './About'
import NavBar from './NavBar'

const App = () => {
    return (
        <Router>
            <div>
                <NavBar />
                <Switch>
                  <Route path="/about">
                      <About />
                  </Route>
                  <Route path="/">
                      <VideoListContainer />
                  </Route>
                </Switch>
            </div>
        </Router>
    );
};

export default App;

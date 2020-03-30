import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Video from "./Video"
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

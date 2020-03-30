import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



const App = () => {
    const params = new URLSearchParams(window.location.href.split('#')[1]);
    const token = params.get('id_token');
    console.log( token );
    fetch('https://4c6cbdd1pc.execute-api.eu-west-2.amazonaws.com/v1/videos', {
        method: 'GET',
        headers: {
            Authorization: token
        }
    })
    .then((response) => response.json())
    //If response is in json then in success
    .then((responseJson) => {
        console.log(responseJson);
    })
    //If response is not in json then in error
    .catch((error) => {
        //Error 
        console.error(error);
    });

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

                {/* A <Switch> looks through its children <Route>s and
                    renders the first one that matches the current URL. */}
                <Switch>
                <Route path="/redirect_uri">
                    <h2>Redirected</h2>
                </Route>
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

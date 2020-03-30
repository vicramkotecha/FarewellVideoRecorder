import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import CameraPage from './src/pages/camera/CameraPage';
import Amplify from 'aws-amplify';
import awsConfig from './src/aws-exports';

Amplify.configure(awsConfig);

import { withAuthenticator } from 'aws-amplify-react-native';


class App extends React.Component {
    state = {
        token: null
    }
    componentDidMount() {
        Amplify.Auth.currentSession().then(data => {
            let newState = { token: data.getIdToken().jwtToken };
            console.log(newState);
            this.setState(newState);
        });
    }
    render() {
        return (
            <CameraPage token={this.state.token}/>
        );
    };
};

export default withAuthenticator(App);
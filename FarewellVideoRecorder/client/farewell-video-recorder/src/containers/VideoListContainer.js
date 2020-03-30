import React, { useState, PureComponent } from 'react';
import VideoList from '../components/VideoList';

class VideoListContainer extends PureComponent {
    state = {
        videos:[]
    };

    componentDidMount() {
        const params = new URLSearchParams(window.location.href.split('#')[1]);
        const token = params.get('id_token');
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
            this.setState({videos: responseJson['videos']});
        })
        .catch((error) => {
            console.error(error);
        });
    };

    render () {
        return (
            <VideoList videos={this.state.videos}/>
        );
    };

};

export default VideoListContainer;
import React, { useState, PureComponent } from 'react';
import VideoList from '../components/VideoList';
import { Container } from 'react-bootstrap';

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
            <>
                {!this.state.videos.length && 
                    <Container>
                        <h2>Welcome to Farewell Memories</h2>
                        <p>
                        An app where COVID-19 patients can leave a final farewell video message for their loved ones if they are unable to get in touch via other means.
                        </p>
                        <p>Please <a href="https://login.farewell-memories.org.uk/login?client_id=hfo0klbbuev4r6t1eqgrqnoj2&response_type=token&scope=openid&redirect_uri=https://www.farewell-memories.org.uk/">Login</a> to view video messages.</p>
                    </Container>
                }
                <VideoList videos={this.state.videos}/>
            </>
        );
    };

};

export default VideoListContainer;
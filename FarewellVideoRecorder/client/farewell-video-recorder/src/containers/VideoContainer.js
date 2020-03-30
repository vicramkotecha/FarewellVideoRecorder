import React, { PureComponent } from 'react';
import Video from '../components/Video';

class VideoContainer extends PureComponent {
    state = {
        videoList:[]
    };

    componentDidMount() {
        const params = new URLSearchParams(window.location.href.split('#')[1]);
        const token = params.get('id_token');
        console.log('test');
        fetch('https://4c6cbdd1pc.execute-api.eu-west-2.amazonaws.com/v1/videos/download?unique_key='+this.props.video, {
            method: 'GET',
            headers: {
                Authorization: token
            }
        })
        .then((response) => response.json())
        //If response is in json then in success
        .then((responseJson) => {
            console.log(responseJson);
            this.setState({ videoUrl: responseJson['video_url'] });
        })
        .catch((error) => {
            console.error(error);
        });
    };

    render () {
        return (
            <Video url={this.state.videoUrl} />
        );
    };

};

export default VideoContainer;
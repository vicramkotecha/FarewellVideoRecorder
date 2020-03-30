import React from 'react';
import '../index.css';
import { Container, Row, Col } from 'react-bootstrap';
import VideoContainer from '../containers/VideoContainer';

const VideoList = (props) => {
    let videos = props.videos.map(video => <Col><VideoContainer video={video} /></Col>);
    return <Container><Row>{videos}</Row></Container>;
};

export default VideoList;
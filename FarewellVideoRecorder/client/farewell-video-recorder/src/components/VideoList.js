import React from 'react';
import '../index.css';
import { Container, Row, Col } from 'react-bootstrap';
import VideoContainer from '../containers/VideoContainer';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    row: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    col: {
        float: 'left'
    }
});

const VideoList = (props) => {
    const classes = useStyles();
    return (
        <Container>
            <Row>
                {props.videos.map((video) => (
                        <Col className={classes.col}><VideoContainer video={video} /></Col>
                ))}
            </Row>
        </Container>
    );
};

export default VideoList;
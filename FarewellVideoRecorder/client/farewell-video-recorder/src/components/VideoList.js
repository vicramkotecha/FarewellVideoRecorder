import React from 'react';
import '../index.css';
import { Container, Row, Col } from 'react-bootstrap';
import VideoContainer from '../containers/VideoContainer';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    row: {
        display: 'flex',
        justifyContent: 'space-between'
    }
});

const VideoList = (props) => {
    const classes = useStyles();
    return (
        <Container>
            {new Array(props.videos.length).fill(0).map((_, i) => {
                if(i % 2 === 0) return (
                    <Row className={classes.row}>
                        <Col className={classes.col}><VideoContainer video={props.videos[i]} /></Col>
                        <Col className={classes.col}><VideoContainer video={props.videos[i+1]} /></Col>
                    </Row>
                )
                return;
            })}
        </Container>
    );
};

export default VideoList;
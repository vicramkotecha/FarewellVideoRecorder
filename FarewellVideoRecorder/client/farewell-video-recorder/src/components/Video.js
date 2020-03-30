import React from 'react';
import '../index.css';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        width: '100%',
        maxWidth: 340,
        margin: 'auto',
        marginBottom: 20,
    }
});

  
const Video = ({name = "Unknown", url, location = "Unknown", notes = "No notes."}) => {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardMedia title={name}><video src={url} controls width={340} height={640} /></CardMedia>
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    Name: {name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    Location: {location}
                </Typography>
                <Typography variant="h6" component="h5">
                    Notes
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                   {notes}
                </Typography>
            </CardContent>
        </Card>
    )
};

export default Video;
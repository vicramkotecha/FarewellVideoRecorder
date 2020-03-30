import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      marginBottom: 20
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    link: {
        color: 'white'
    }
  }));

export default () => {
    const classes = useStyles();

    return (
        <nav>
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        <Link to="/" className={classes.link}>FareWell Memories</Link>
                    </Typography>
                    <Button className={classes.menuButton} color="inherit">
                        <Link to="/about" className={classes.link}>About</Link>
                    </Button>
                    <Button className={classes.menuButton} color="inherit"><a href="https://login.farewell-memories.org.uk/login?client_id=hfo0klbbuev4r6t1eqgrqnoj2&response_type=token&scope=openid&redirect_uri=https://www.farewell-memories.org.uk/" className={classes.link}>Login</a></Button>
                    </Toolbar>
                </AppBar>        
            </div>        
        </nav>
    )
}
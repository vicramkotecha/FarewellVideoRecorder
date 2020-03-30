import React from "react";
import { Container } from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    p: {
      fontSize: 18
    }
});
export default () => {
  const classes = useStyles();
  return (
      <Container>
          <h2>About Farewell Memories</h2>
          <p className={classes.p}>
            Covid 19 has rapidly become a global pandemic. The unfortunate truth is that not everyone makes it out. This is a reality we have to face. This virus can target anyone, but our older population is at a much higher risk. The older population are characteristically less connected to their phone. And due to the nature of the disease this can leave them disconnected from their loved ones. 
          </p>
          <p className={classes.p}>
            My name is Vicram Kotecha and together with an amazing team of professionals we have developed Farewell Memories. An app that allows critically ill patients to record a final message to their loved ones, using the phone of a nurse, doctor, or fellow patient.  This can include their wishes and final “I love you’s”.  
          </p>
          <p className={classes.p}>
            The carer or patient can launch the app, press “record”, and then provide their name and the contact details of who they’d like to leave the message for.  They record their message and the app will securely upload the video to our server, where volunteers view the contact details and get it to the intended recipients.
          </p>
          <p className={classes.p}>
            Farewell Memories plays an important role in bringing peace of mind to the families who were struck by the disease. Nobody should be left alone in such a dire time.
          </p>
      </Container>
  )
}
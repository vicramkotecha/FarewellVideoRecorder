import React from 'react';
import '../index.css';

const Video = (props) => {
    /*
    <video src={props.url} 
            controls={true}
            height="640"
            width="340"
        />*/
    return (
        <div><video src={props.url} 
        controls={true}
        height="640"
        width="340"
    /></div>
    )
};

export default Video;
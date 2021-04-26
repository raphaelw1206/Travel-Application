import React from "react";
import welcomeVideo from './webPics/welcomeVideo.mp4';
import ReactPlayer from 'react-player';
import PropTypes from "prop-types";

function YoutubeEmbed() {
return (
    <div className="">
        <video className="react-player" autoPlay loop muted controls={true} currentTime={-100000} >
        <source src={welcomeVideo} type="video/mp4" />
              Your Browser does not support this video
            </video>
   
    </div>
) ;   
}




export default YoutubeEmbed;
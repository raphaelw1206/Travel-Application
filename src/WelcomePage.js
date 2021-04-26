import React from 'react';
import './WelcomePage.css';
import flightcitylogo from './components/webPics/flightcitylogo.png';
import FcTower3 from './components/webPics/FcTower3.png';
import valleylake5 from './components/webPics/valleylake5.png';
import welcomeVideo from './components/webPics/welcomeVideo.mp4';
import ReactPlayer from 'react-player'
import YoutubeEmbed from './components/YoutubeEmbed';
//import Iframe from 'react-iframe';
import SearchField from "react-search-field";
import ExploreIcon from "@material-ui/icons/Explore";



// function playVideo(url,onReady){
//     return(
//        if(OnReady == 'true'){
//            YoutubeEmbed()
//        }
       
//     ) 
// }
//   return <iframe url={welcomeVideo} frameborder="0" />;
// };

function WelcomePage() {
    return (
      <div className="container">
   
          <div className="page-header-logo">
        <img className='flight_city_logo' src={flightcitylogo} alt="" />
          </div>
          <div className="login-section">
          <h1>About Us </h1><h1>Deals</h1>
          </div>
          <div className="info-section">
          <h1>Travel</h1><h1>Login</h1>
          </div>
          <div className="search-form">
          <ExploreIcon style={{fontSize:50}}/>
          <input className='search-field' placeholder="Where's your next vacation?" Onchange='' />
          </div>
          
          <div className="page-body">
        {YoutubeEmbed()} 
          
          {/* // <div className="formlayout">
          // <form action="">
          //   <input className='input-form' type="text"/>
          
          // </form>
          // </div> */}
          </div>
          {/*<div className="login-area"></div>*/}
        </div>
    );
}

export default WelcomePage;

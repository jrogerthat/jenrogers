import React from "react";
import styled from 'styled-components';
import moving from '../../public/assets/images/climb-move.mov' // Tell webpack this JS file uses this image
//console.log(logo); // /logo.84287d09.png
// function Image() {
//   // Import result is the URL of your image
//   return <img src={image} alt="prof-pick" />;
// }
// export default Image;

const StyledVid = styled.video`
    width:360px;
    height:auto;
    margin-left: 20px;
    float:left;
    display:inline-block;
    margin-top:40px;
`;

const Moving = ()=>{
  //return <StyledVid onmouseover="this.play()" onmouseout="this.pause();this.currentTime=0;"><source src={moving} type="video/ogg"></source></StyledVid>
  return <StyledVid 
  onMouseOver={event => event.target.play()}
  className="video-container video-container-overlay" 
  autoPlay="true" loop="" muted="" data-reactid=".0.1.0.0">
  <source type="video/mp4" data-reactid=".0.1.0.0.0" src={moving}></source>
  </StyledVid>
}

export default Moving;
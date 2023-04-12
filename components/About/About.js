
import React from "react";
import styled from 'styled-components';
import colors from '../../colors.js';
import Image from '../Image/Image.js';
import Moving from "../Moving/Moving.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faTwitter, faStackOverflow } from "@fortawesome/free-brands-svg-icons";
import { faDesktop, faFilePdf, faPaperclip } from "@fortawesome/free-solid-svg-icons";

const StyledAbout = styled.div`

width: 95%;

background-image: radial-gradient(circle at 1px 1px, ${colors.charleston} 1px, transparent 0);
background-size: 40px 40px;

padding-right:10rem;
margin-right: 1rem;
margin-top: 8rem;
padding-left: 2rem;

a{
  text-decoration: none;
  color:black;
  font-weight:400;
  display:inline;
}

a:hover {
  background-color:${colors.yellow}
  
}

div.contact{
  display:inline;
  float:left;
  width:60rem;
  margin-bottom:50px;
}

div.contact a {
  width: 5rem;
  display:inline;
  font-family:'Roboto',sans-serif;
  font-weight:400;
  font-size:25px;
  margin: 0 20px;
}

h1 {
    margin-top:-.5rem;
    margin-bottom: -1.5rem;
    align-items: center;
    width: 100rem;
    font-size:6rem;
    font-family:'Roboto',sans-serif;
    color:${colors.gunmetal};
   
  }
  h2{
      margin-top: -2rem;
      font-size:2.5rem;
      font-family:'Roboto',sans-serif;
      font-weight:300;
      width: 20rem;
  }
  h3{
    font-family:'Roboto',sans-serif;
    font-weight:300;
    width: 55rem;
    font-size:25px;
}

  h5{
    margin-top:20px;
    font-family:'Roboto',sans-serif;
    font-weight:300;
    width: 55rem;
    font-size:20px;
  }
}
`;

const StyledSubDiv = styled.div`
  display: inline-block;
  float:left;
  width: 53rem;
  margin-left: 20px;
`;

const About = () => {
  return (
    <div className="About">
        <StyledAbout>
       
        {/* <Image></Image> */}
        <Moving/>
        <StyledSubDiv>
        <h1>Hi, I'm Jen.</h1>
          <h3>I am a postdoctoral researcher with the Visual Analytics Lab at Tufts and the Exploratory Science Center at Merck </h3>
            
            {/* <h3>the <a href="https://vdl.sci.utah.edu/" target="blank">Visualization Design Lab</a> at the University of Utah, where I work with 
          <a href="https://vdl.sci.utah.edu/team/lex/" target ="blank"> Alex Lex</a> and <a href="http://www.cs.utah.edu/~miriah/" target="blank">Miriah Meyer</a>.
            Most of my research involves building visualization tools for biologists. Recently, I've been interested in traceability of insights from design studies. </h3>
 */}

           <h3> When I am not glued to my computer, you will most likely find me in the mountains or testing out new cheese jokes.</h3>

           <div className="contact">
             <a href="mailto:jen@sci.utah.edu">jen (at) sci (dot) utah (dot) edu</a>
             <a href="../../public/assets/JR-CV-2021.pdf" target="blank">See CV</a>
             <a href="https://github.com/jrogerthat"><FontAwesomeIcon icon={faGithub} size="2x"/></a>
             <a href="https://twitter.com/SocknessRogers"><FontAwesomeIcon icon={faTwitter} size="2x"></FontAwesomeIcon></a>
             <a href="https://stackoverflow.com/users/4955343/sockness-rogers"><FontAwesomeIcon icon={faStackOverflow} size="2x"></FontAwesomeIcon></a>
            </div>
            <br/>
            <div>
            <h5>(What the last year of the Ph.D. feels like)</h5>
            </div>
        </StyledSubDiv>
        
        </StyledAbout>
        
    </div>
  );
};

export default About;
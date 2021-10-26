
import React from "react";
import styled from 'styled-components';
import colors from '../../colors.js';
import Image from '../Image/Image.js';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faTwitter, faStackOverflow } from "@fortawesome/free-brands-svg-icons";
import { faDesktop, faFilePdf, faPaperclip } from "@fortawesome/free-solid-svg-icons";

const StyledAbout = styled.div`



width: 95%;

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
    <section className="About">
        <StyledAbout>
       
        <Image></Image>
        <StyledSubDiv>
        <h1>Hi, I'm Jen.</h1>
          <h3>I am a 4th year PhD student with the <a href="https://vdl.sci.utah.edu/" target="blank">Visualization Design Lab</a> at the University of Utah, where I work with 
          <a href="https://vdl.sci.utah.edu/team/lex/" target ="blank"> Alex Lex</a> and <a href="http://www.cs.utah.edu/~miriah/" target="blank">Miriah Meyer</a>.
            Most of my research involves building visualization tools for biologists. Recently, I've been interested in traceability of insights from design studies. </h3>
           <h3> When I am not glued to my computer, you will most likely find me in the mountains or testing out new cheese jokes.</h3>

           <div class="contact">
             <a href="mailto:jen@sci.utah.edu">jen (at) sci (dot) utah (dot) edu</a>
             <a href="../../public/assets/JR-CV-2020.pdf" target="blank">See CV</a>
             <a href="https://github.com/jrogerthat"><FontAwesomeIcon icon={faGithub} size="2x"/></a>
             <a href="https://twitter.com/SocknessRogers"><FontAwesomeIcon icon={faTwitter} size="2x"></FontAwesomeIcon></a>
             <a href="https://twitter.com/SocknessRogers"><FontAwesomeIcon icon={faStackOverflow} size="2x"></FontAwesomeIcon></a>
            </div>
        </StyledSubDiv>
        
        </StyledAbout>
        
    </section>
  );
};

export default About;
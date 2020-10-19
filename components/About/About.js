
import React from "react";
import styled from 'styled-components';
import colors from '../../colors.js';

const StyledAbout = styled.div`

background-color: ${colors.businessgrey};

height: 4rem;

width: 95%;

padding-right:10rem;
margin-right: 1rem;
margin-top: 10rem;
padding-left: 2rem;

h1 {

    margin-top: -3rem;
    align-items: center;
    width: 100rem;
    font-size:6rem;
    font-family:'Roboto',sans-serif;
   
  }
  h2{
      margin-top: -2rem;
      font-size:2.5rem;
      font-family:'Roboto',sans-serif;
      font-weight:300;
      width: 55rem;
  }
  h3{
    margin-top: -2rem;
    font-family:'Roboto',sans-serif;
    font-weight:300;
    width: 55rem;
}
}
`;

const About = () => {
  return (
    <section className="About">
        <StyledAbout>
        <h1>Hi, I'm Jen. 
          </h1>
        <h3>I am a 4th year PhD student with the Visualization Design Lab at the University of Utah, where I work with Alex Lex and Miriah Meyer. 
          Most of my research involves building visualization tools for biologists. Recently, I've been interested in traceability of insights from design studies. When I am not glued to my computer, you will most likely find me in the mountains or testing out new cheese jokes.</h3>
        </StyledAbout>
    </section>
  );
};

export default About;
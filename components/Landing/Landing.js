import React from 'react';
import styled from 'styled-components';
import colors from '../../colors.js';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faTwitter, faStackOverflow } from "@fortawesome/free-brands-svg-icons";
import Moving from '../Moving/Moving.js';

const StyledWrap = styled.div`
background-color:${colors.backgroundOffWhite};
background-image: radial-gradient(circle at 1.5px 1.5px, ${colors.gray} 1px, transparent 0);
  background-size: 40px 40px;
  padding-left:20px;
`

const StyledLanding = styled.div`

  // background-color:${colors.backgroundOffWhite};

  padding-right:10rem;
  padding-left:20px;
  margin-right: 1rem;

  padding-left: 2rem;
  padding-top:10rem;

  display:flex;
  flex-direction:column;
  flex:1;
  
  color:${colors.charleston}

  // background-image: radial-gradient(circle at 1.5px 1.5px, ${colors.gray} 1px, transparent 0);
  // background-size: 40px 40px;

  a{
    color:${colors.charleston}
    text-decoration: none;
    font-weight:500;
  }
  a:hover{
    background-color:${colors.yellow}
  }

  h1 {
      margin-top: -2rem;
      margin-bottom:1.2rem;
      align-items: center;
      width: 100rem;
      font-size:6rem;
      font-family:'Roboto',sans-serif;
      color: ${colors.gunmetal};
    }
    span{
      color:${colors.charleston};
      background-color:${colors.yellow};
      padding-left:10px;
      padding-right:10px;
    }
    h2{
        margin-top: -.7rem;
        font-size:2.5rem;
        font-family:'Roboto',sans-serif;
        font-weight:300;
        width: 62rem;
    }
  }
`;

const texts = [
  'create',
  'sketch',
  'build',
  'code',
  'hack',
  'learn',
  'climb/ski'
];

const Landing = () => {

  return(
  <StyledWrap>
  <Moving />
  <StyledLanding>
      <h1>Hi, I'm Jen. </h1>
       {/* <h1>I like to <span> {textThatChanges}</span> things.</h1> */}
      <h2>Postdoctoral researcher with the <a href="https://valt.cs.tufts.edu/" target='blank'>Visual Analytics Lab</a>, Tufts and the <a href="https://www.merck.com/stories/why-were-expanding-and-investing-in-our-research-and-discovery-efforts/" target='blank'>Exploratory Science Center</a>, Merck</h2>
      <div className="contact" style={{display:'flex', width:600, flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
        <a 
        style={{fontWeight:400, fontFamily:'lato'}}
        href="mailto:jennifer.rogers@tufts.edu">jennifer (dot) rogers (at) tufts (dot) edu</a>
        <a 
        style={{fontWeight:400, fontFamily:'lato'}}
        href="../../public/assets/JR-CV-2023.pdf" target="blank">See CV</a>
        <a href="https://github.com/jrogerthat"><FontAwesomeIcon icon={faGithub} size="2x"/></a>
        <a href="https://twitter.com/SocknessRogers"><FontAwesomeIcon icon={faTwitter} size="2x"></FontAwesomeIcon></a>
        <a href="https://stackoverflow.com/users/4955343/sockness-rogers"><FontAwesomeIcon icon={faStackOverflow} size="2x"></FontAwesomeIcon></a>
      </div>
    </StyledLanding>
    </StyledWrap>
  )
}
  
  export default Landing;
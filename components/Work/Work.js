
import React from "react";
import styled from 'styled-components';
import colors from '../../colors.js';
import fontawesome from '../../fontawesome.js';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from './Image.js';
import trevoimage from '../../public/assets/images/trevo-landing.png';
import compimage from '../../public/assets/images/composer.png';
import trrraceimage from '../../public/assets/images/insights-landing.png';
import covaimage from '../../public/assets/images/cova-landing.png';
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faDesktop, faFilePdf, faPaperclip } from "@fortawesome/free-solid-svg-icons";

const StyledWork = styled.div`


width: 96%;

padding-right:10rem;
margin-right: 1rem;
margin-top: 10rem;
padding-left: 2rem;

a{
  text-decoration:none;
  font-weight:500;
  color: ${colors.gunmetal};
}
a:hover{
  background-color:${colors.yellow}
}

svg{
  margin:3px;
}

p{
  font-family:'Roboto',sans-serif;
  font-weight:300;
}

div{
  width:600px;
  height:300px;
  display:inline-block;
  float:left;

}

h1 {

    margin-top: -3rem;
    align-items: center;
    width: 100rem;
    font-size: 5rem;
    font-family:'Roboto',sans-serif;
    color: ${colors.gunmetal};
   
  }
  h2{
      margin-top: -2rem;
      font-size:2.5rem;
      font-family:'Roboto',sans-serif;
      font-weight:300;
      width: 55rem;
  }
  h3{
    display:block;
    font-weight:300;
  }
}
`;

const Work = () => {

  const Trevo = {
    image: trevoimage,
    title: "Trevo",
    link: "https://vdl.sci.utah.edu/Trevo/",
    text: `<p>In collaboration with <a href="https://www.uidaho.edu/sci/biology">Evolutionary Biologists at the University of Idaho</a> as part of the NSF Mutlinet Project. Visual tool to identify patterns of evolution in phylogenetic tree data.</p>`,
    github: 'https://github.com/visdesignlab/Trevo'
  };
  const Composer = {
    image: compimage,
    title: "Composer",
    link:"https://github.com/visdesignlab/Composer",
    text: `<p>In collaboration with the University of Utah <a href="https://medicine.utah.edu/orthopaedics/" target="blank">Orthopedic Center</a> and <href="https://medicine.utah.edu/population-health-sciences/" target="blank">Population Sciences</a>. Visual cohort analysis for patient outcomes.</p>`,
    github: 'https://github.com/visdesignlab/Composer'
  };
  const Trrrace = {
    image: trrraceimage,
    title: "tRRRace",
    link: "https://vdl.sci.utah.edu/trrrace/",
    text: `Implementing the tRRRace construct with an interactive visualization to trace insight emergent in design studies.`,
    github: 'https://github.com/visdesignlab/trrrace'
  };
  const Cova = {
    image: covaimage,
    title: "Cova",
    link: "https://animationlab.utah.edu/cova",
    text: `<p>In collaboration with <a href="https://animationlab.utah.edu/" target="blank">the Animation Lab</a>. We built a web-based, expert crowdsourcing tool to build a consensus model of the SARS-CoV2 Life Cycle.</p>`,
    github: 'https://github.com/visdesignlab/coronavirus-annotation-3'
  };

  return (
    <section className="Work">
        <StyledWork>
        <h1>What I've been working on...</h1>
        <div>
          <a href="https://animationlab.utah.edu/cova" target="blank"><Image work={Cova}/></a>
          <h3>{Cova.title}</h3>
          <p dangerouslySetInnerHTML={{__html:Cova.text}}></p>
          <a href={Cova.github}><FontAwesomeIcon icon={faGithub} size="2x"/></a>
          <a href={Cova.link} target = "blank"><FontAwesomeIcon icon={faDesktop} size="2x"/></a>
        </div>
        <div>
          <a href="https://vdl.sci.utah.edu/publications/2020_infovis_insights/" target="blank"><Image work={Trrrace}/></a>
          <h3>{Trrrace.title}</h3>
          <p>{Trrrace.text}</p>
          <a href={Trrrace.github}><FontAwesomeIcon icon={faGithub} size="2x"/></a>
          <a href={Trrrace.link} target = "blank"><FontAwesomeIcon icon={faDesktop} size="2x"/></a>
          <a href="https://vdl.sci.utah.edu/publications/2020_infovis_insights/" target="blank"><FontAwesomeIcon icon={faFilePdf} size="2x"/></a>
        </div>
        <div>
          <a href={Trevo.link} target="blank"><Image work={Trevo}/></a>
          <h3>{Trevo.title}</h3>
          <p dangerouslySetInnerHTML={{__html:Trevo.text}}></p>
          <a href={Trevo.github}><FontAwesomeIcon icon={faGithub} size="2x"/></a>
          <a href={Trevo.link} target = "blank"><FontAwesomeIcon icon={faDesktop} size="2x"/></a>
          <a href="https://vdl.sci.utah.edu/publications/2020_infovis_insights/" target="blank"><FontAwesomeIcon icon={faFilePdf} size="2x"/></a>
        </div>
        <div>
          <a href="https://vdl.sci.utah.edu/publications/2019_aci_composer/" target="blank"><Image work={Composer}/></a>
          <h3>{Composer.title}</h3>
          <p dangerouslySetInnerHTML={{__html:Composer.text}}></p>
          <a href={Composer.github}><FontAwesomeIcon icon={faGithub} size="2x"/></a>
          <a href="https://vdl.sci.utah.edu/publications/2019_aci_composer/" target="blank"><FontAwesomeIcon icon={faFilePdf} size="2x"/></a>
        </div>
        </StyledWork>
    </section>
  );
};

export default Work;
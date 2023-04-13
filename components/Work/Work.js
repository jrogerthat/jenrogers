import React from 'react';
import styled from 'styled-components';
import colors from '../../colors.js';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from './Image.js';
import trevoimage from '../../public/assets/images/trevo-landing.png';
import compimage from '../../public/assets/images/composer.png';
import trrraceimage from '../../public/assets/images/insights-landing.png';
import covaimage from '../../public/assets/images/cova-landing.png';



const StyledWrap = styled.div`
width:100%;
background-color:${colors.backgroundOffWhite};
background-image: radial-gradient(circle at 1.5px 1.5px, ${colors.gray} 1px, transparent 0);
  background-size: 40px 40px;

display:flex;
flex-direction:column;
margin-left: 20px;

h1{
    font-family: lato;
}

h3 {
    font-family:lato;
}

h4 {
    font-family: lato;
}

`

const workData = [
    {
        sectionTitle: "Traceability",
        data: [
            {
                image: covaimage,
                title: "Tracing and Visualizing Human-ML/AI Collaborative Processes through Artifacts of Data Work",
                link: "https://animationlab.utah.edu/cova",
                text: `<p>In collaboration with <a href="" target="blank">Tableau Research</a>. We built a web-based, expert crowdsourcing tool to build a consensus model of the SARS-CoV2 Life Cycle.</p>`,
                github: 'https://github.com/visdesignlab/coronavirus-annotation-3'
            },
            {
                image: trevoimage,
                title: "tRRRaceR",
                link: "https://vdl.sci.utah.edu/Trevo/",
                text: `<p>In collaboration with <a href="https://www.uidaho.edu/sci/biology">Evolutionary Biologists at the University of Idaho</a> as part of the NSF Mutlinet Project. Visual tool to identify patterns of evolution in phylogenetic tree data.</p>`,
                github: 'https://github.com/visdesignlab/Trevo'
            },
            {
                image: trrraceimage,
                title: "tRRRace",
                link: "https://vdl.sci.utah.edu/trrrace/",
                text: `Implementing the tRRRace construct with an interactive visualization to trace insight emergent in design studies.`,
                github: 'https://github.com/visdesignlab/trrrace'
              },

        ]

    },
    {
        sectionTitle: "Design Studies",
        data: [{
            image: trevoimage,
            title: "Trevo",
            link: "https://vdl.sci.utah.edu/Trevo/",
            text: `<p>In collaboration with <a href="https://www.uidaho.edu/sci/biology">Evolutionary Biologists at the University of Idaho</a> as part of the NSF Mutlinet Project. Visual tool to identify patterns of evolution in phylogenetic tree data.</p>`,
            github: 'https://github.com/visdesignlab/Trevo'
          },
          {
            image: covaimage,
            title: "Cova",
            link: "https://animationlab.utah.edu/cova",
            text: `<p>In collaboration with <a href="https://animationlab.utah.edu/" target="blank">the Animation Lab</a>. We built a web-based, expert crowdsourcing tool to build a consensus model of the SARS-CoV2 Life Cycle.</p>`,
            github: 'https://github.com/visdesignlab/coronavirus-annotation-3'
          },
          {
            image: compimage,
            title: "Composer",
            link:"https://github.com/visdesignlab/Composer",
            text: `<p>In collaboration with the University of Utah <a href="https://medicine.utah.edu/orthopaedics/" target="blank">Orthopedic Center</a> and <href="https://medicine.utah.edu/population-health-sciences/" target="blank">Population Sciences</a>. Visual cohort analysis for patient outcomes.</p>`,
            github: 'https://github.com/visdesignlab/Composer'
          }
        ]

    }
]

const Work = () => {

  return(
  <StyledWrap>
    <div>
        <h1>Projects</h1>
    </div>
    {
        workData.map((w, i) => (
            <div key={`proj-${i}`} >
                <h2>{w.sectionTitle}</h2>
                <div>
                    {w.data.map((m, j)=> (
                        <div>
                            <div><a href="" target="blank"><Image work={m.image}/></a></div>
                             <div>
                                <h3>{m.title}</h3>
                                <p dangerouslySetInnerHTML={{__html:m.text}}></p>
                             </div>
                            
                        </div>
                    ))}
                </div>
            </div>
        ))
    }

  
    </StyledWrap>
  )
}
  
  export default Work;
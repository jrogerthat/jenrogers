
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

height:50rem:

padding-right:10rem;
margin-right: 1rem;

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

const CV = styled.div`
width: 96%;

height:50rem:

padding-right:10rem;
margin-right: 1rem;
padding-top: 10rem;
padding-left: 2rem;

.cv-sub{
  width:50rem;
}

p{
  font-family:'Roboto',sans-serif;
  font-weight:300;
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
    
    font-size:2.5rem;
    font-family:'Roboto',sans-serif;
    font-weight:300;
    width: 55rem;
}
h3{
  display:block;
  font-weight:300;
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
          <CV>
          <h1>CV</h1>
          <div class="cv-sub">
            <h2>Education</h2>
            <div>
              <h3>(2017 - Current) <b>Ph.D. Human-Centered Computing</b>, Scientific Computing and Imaging Institute, University of Utah </h3>
            </div>
            <div class="cv-sub">
              <h3>(2015 - 2016) <b>MSc Medical Visualization and Human Anatomy</b>, Glasgow School of Art & University of Glasgow, With Distinction </h3>
            </div>
            <div class="cv-sub">
              <h3>(2010 - 2014) <b>BFA Graphic Design</b>, Montana State University, Highest Honors </h3>
            </div>
              {/* <li><b>Ph.D. Human-Centered Computing</b> (2017-current)
                
                </li>
                <li>
                <b>MSc Medical Visualization and Human Anatomy</b> (2015-2016)
                Glasgow School of Art & University of Glasgow, With Distinction
                </li>
                <li><b>BFA Graphic Design</b>  (2010-2014)
                Montana State University, Highest Honors</li>
              </ul></p> */}
          </div>
     
          <div>
          <h2>Projects</h2>
          <StyledWork>
          <div class="cv-sub">
          <a href="https://animationlab.utah.edu/cova" target="blank"><Image work={Cova}/></a>
          <h3>{Cova.title}</h3>
          <p dangerouslySetInnerHTML={{__html:Cova.text}}></p>
          <a href={Cova.github}><FontAwesomeIcon icon={faGithub} size="2x"/></a>
          <a href={Cova.link} target = "blank"><FontAwesomeIcon icon={faDesktop} size="2x"/></a>
          <p>Skills applied: requirements gathering, semi-structured interviews, mock-ups (Illustrator),
web development (JavaScript, D3.js, HTML5, CSS), Python for image data processing</p>
        </div>
        <div class="cv-sub">
          <a href="https://vdl.sci.utah.edu/publications/2020_infovis_insights/" target="blank"><Image work={Trrrace}/></a>
          <h3>{Trrrace.title}</h3>
          <p>{Trrrace.text}</p>
          <a href={Trrrace.github}><FontAwesomeIcon icon={faGithub} size="2x"/></a>
          <a href={Trrrace.link} target = "blank"><FontAwesomeIcon icon={faDesktop} size="2x"/></a>
          <a href="https://vdl.sci.utah.edu/publications/2020_infovis_insights/" target="blank"><FontAwesomeIcon icon={faFilePdf} size="2x"/></a>
          <p>Skills applied: Python (NLTK, Gensim, Flask), TypeScript, React, Electron</p>
        </div>
        <div class="cv-sub">
          <a href={Trevo.link} target="blank"><Image work={Trevo}/></a>
          <h3>{Trevo.title}</h3>
          <p dangerouslySetInnerHTML={{__html:Trevo.text}}></p>
          <a href={Trevo.github}><FontAwesomeIcon icon={faGithub} size="2x"/></a>
          <a href={Trevo.link} target = "blank"><FontAwesomeIcon icon={faDesktop} size="2x"/></a>
          <a href="https://vdl.sci.utah.edu/publications/2020_infovis_insights/" target="blank"><FontAwesomeIcon icon={faFilePdf} size="2x"/></a>
          <p>Skills applied: requirements gathering, semi-structured and contextual interviews,
mock-ups (Illustrator), web development (JavaScript, D3.js, HTML5, CSS), development
of interactive audit trail to trace back design study insights to underlying artifacts.</p>
        </div>
        <div class="cv-sub">
          <a href="https://vdl.sci.utah.edu/publications/2019_aci_composer/" target="blank"><Image work={Composer}/></a>
          <h3>{Composer.title}</h3>
          <p dangerouslySetInnerHTML={{__html:Composer.text}}></p>
          <a href={Composer.github}><FontAwesomeIcon icon={faGithub} size="2x"/></a>
          <a href="https://vdl.sci.utah.edu/publications/2019_aci_composer/" target="blank"><FontAwesomeIcon icon={faFilePdf} size="2x"/></a>
          <p>Skills applied: requirements gathering, semi-structured interviews, mock-ups (Illustrator),
web development (TypeScript, D3.js, HTML5, CSS), Python for data processing</p>
        </div>
        </StyledWork>
          <div>
            <h2>Selected Experience</h2>
            <div class="cv-sub"><h3>(2017 - Current) Research Assistant, SCI Institute, University of Utah</h3>
            <p>Research in web-based visual applications tailored for biological data at the
Scientific Computing and Imaging Institute.</p>
</div>

            <div class="cv-sub"><h3>(2021) Intern, Tableau Research</h3>
            <p>Worked on traceability for AutoML. Devoloped taxonomy to characterize artifacts
emergent from this process and prototype to visualize the attributes, dependencies,
and histories of these captured artifacts.</p>
            </div>
            <div class="cv-sub"><h3>(2020) Publicity and Local Chair BELIV Workshop, IEEE VIS 2020</h3>
            <p>Assist in the outreach and organization of BELIV workshop at VIS</p>
            </div>
            <div class="cv-sub"><h3>(2019) Visiting Researcher, Harmon Lab, University of Idaho</h3>
            <p>Worked closely with researchers in comparative evolutionary biology to design
and develop a tool for visual analysis of phylogenetic tree data.</p>
            </div>
            <div class="cv-sub"><h3>(2016) Lab at the Loft, Glasgow School of Art / Digital Health and Care Institute,</h3>
            <p>Experimental hack-a-thon style design workshop to generate ideas for future projects
that improve human interaction with assistive healthcare systems in the home.</p>
            </div>
          </div>

          <div>
            <h2>Teaching + Mentorship</h2>
            <div class="cv-sub"><h3>(2018, 2019) Teaching Mentor, University of Utah,</h3>
            <p>Visualization for Data Science (CS 6591). Organized and ran class labs. Designed and built
            visualization homework projects to teach Javascript and D3.</p>
            <div class="cv-sub"><h3>(2016-2017) Ambassador for Urban Uprising Foundation, Glasgow, UK</h3>
            <p>Mentor and coach for at risk youth from Ayrshire, UK to develop their foundational skills
            in climbing and progress toward their NIBAS certification. Organized and participated in
            sea-stack expedition in Northern Scotland to raise money and awareness for the charity.</p>
            </div>
            <div class="cv-sub"><p><b>* </b> When I am not coding, I am a climbing coach at the local climbing gym</p></div>
            </div>
          </div>
        </div>
        </CV>
        
    </section>
  );
};

export default Work;
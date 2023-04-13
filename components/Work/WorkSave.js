
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

padding-left: -1.5rem;

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
    font-size:1.9rem;
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
padding-bottom:100px

.cv-sub{
  width:50rem;
  padding-left: 2rem;
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
    margin-left:2rem;
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

  const AutoML = {
    image: covaimage,
    title: "Tracing and Visualizing Human-ML/AI Collaborative Processes through Artifacts of Data Work",
    link: "https://animationlab.utah.edu/cova",
    text: `<p>In collaboration with <a href="" target="blank">Tableau Research</a>. We built a web-based, expert crowdsourcing tool to build a consensus model of the SARS-CoV2 Life Cycle.</p>`,
    github: 'https://github.com/visdesignlab/coronavirus-annotation-3'
  };

  return (
    <section className="Work">
          <CV>
        
          <div>
            <h2>Education</h2>
            <div class="cv-sub">
              <h3>(2017 - 2022) Ph.D. Human-Centered Computing,</h3>
              <p> Scientific Computing and Imaging Institute, University of Utah</p>
            </div>
            <div class="cv-sub">
              <h3>(2015 - 2016) MSc Medical Visualization and Human Anatomy,</h3>
              <p>Glasgow School of Art & University of Glasgow, With Distinction </p>
            </div>
            <div class="cv-sub">
              <h3>(2010 - 2014) BFA Graphic Design,</h3>
              <p>Montana State University, Highest Honors</p>
            </div>
       
          </div>
     
          <div>
          <h2>Projects</h2>
          <StyledWork>
          <div class="cv-sub">
          <a href="" target="blank"><Image work={AutoML}/></a>
          <h3>{AutoML.title}  <a href={AutoML.github}><FontAwesomeIcon icon={faGithub} /></a>
          <a href={AutoML.link} target = "blank"><FontAwesomeIcon icon={faDesktop} /></a></h3>
          <p dangerouslySetInnerHTML={{__html:AutoML.text}}></p>
          {/* <a href={Cova.github}><FontAwesomeIcon icon={faGithub} size="2x"/></a>
          <a href={Cova.link} target = "blank"><FontAwesomeIcon icon={faDesktop} size="2x"/></a> */}
          <p>Skills applied: requirements gathering, semi-structured interviews, mock-ups (Illustrator),
web development (JavaScript, D3.js, HTML5, CSS), Python for image data processing</p>
        </div>
          <div class="cv-sub">
          <a href="https://animationlab.utah.edu/cova" target="blank"><Image work={Cova}/></a>
          <h3>{Cova.title}  <a href={Cova.github}><FontAwesomeIcon icon={faGithub} /></a>
          <a href={Cova.link} target = "blank"><FontAwesomeIcon icon={faDesktop} /></a></h3>
          <p dangerouslySetInnerHTML={{__html:Cova.text}}></p>
          {/* <a href={Cova.github}><FontAwesomeIcon icon={faGithub} size="2x"/></a>
          <a href={Cova.link} target = "blank"><FontAwesomeIcon icon={faDesktop} size="2x"/></a> */}
          <p>Skills applied: requirements gathering, semi-structured interviews, mock-ups (Illustrator),
web development (JavaScript, D3.js, HTML5, CSS), Python for image data processing</p>
        </div>
        <div class="cv-sub">
          <a href="https://vdl.sci.utah.edu/publications/2020_infovis_insights/" target="blank"><Image work={Trrrace}/></a>
          <h3>{Trrrace.title}<a href={Trrrace.github}><FontAwesomeIcon icon={faGithub} /></a>
          <a href={Trrrace.link} target = "blank"><FontAwesomeIcon icon={faDesktop} /></a>
          <a href="https://vdl.sci.utah.edu/publications/2020_infovis_insights/" target="blank"><FontAwesomeIcon icon={faFilePdf}/></a></h3>
          <p>{Trrrace.text}</p>
         
          <p>Skills applied: Python (NLTK, Gensim, Flask), TypeScript, React, Electron</p>
        </div>
        <div class="cv-sub">
          <a href={Trevo.link} target="blank"><Image work={Trevo}/></a>
          <h3>{Trevo.title} <a href={Trevo.github}><FontAwesomeIcon icon={faGithub} /></a>
          <a href={Trevo.link} target = "blank"><FontAwesomeIcon icon={faDesktop} /></a>
          <a href="https://vdl.sci.utah.edu/publications/2020_infovis_insights/" target="blank"><FontAwesomeIcon icon={faFilePdf}/></a></h3>
          <p dangerouslySetInnerHTML={{__html:Trevo.text}}></p>
       
          <p>Skills applied: requirements gathering, semi-structured and contextual interviews,
mock-ups (Illustrator), web development (JavaScript, D3.js, HTML5, CSS).</p>
        </div>
        <div class="cv-sub">
          <a href="https://vdl.sci.utah.edu/publications/2019_aci_composer/" target="blank"><Image work={Composer}/></a>
          <h3>{Composer.title} <a href={Composer.github}><FontAwesomeIcon icon={faGithub} /></a>
          <a href="https://vdl.sci.utah.edu/publications/2019_aci_composer/" target="blank"><FontAwesomeIcon icon={faFilePdf} /></a></h3>
          <p dangerouslySetInnerHTML={{__html:Composer.text}}></p>
         
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
            </div>
            <div class="cv-sub"><h3>(2016-2017) Ambassador for Urban Uprising Foundation, Glasgow, UK</h3>
            <p>Mentor and coach for at risk youth from Ayrshire, UK to develop their foundational skills
            in climbing and progress toward their NIBAS certification. Organized and participated in
            sea-stack expedition in Northern Scotland to raise money and awareness for the charity.</p>
            </div>
            <div class="cv-sub"><p><b>* </b> When I am not coding, I am a climbing coach at the local climbing gym</p></div>
          </div>

          <div>
            <h2>Peer-Reviewed Publications</h2>
            <div class="cv-sub">
              <p>Rogers, J., Patton, A. Harmon, L. Lex, A. Meyer, M
                  Insights From Experiments With Rigor in an EvoBio Design Study
                  IEEE Transactions on Visualization and Computer Graphics (InfoVis), 2020</p>
              </div>
            <div class="cv-sub">
            <p>Rogers, J., Spina, N., Neese, A., Hess, R., Brodke, D. and Lex, A., 2019.
Composer: Visual Cohort Analysis of Patient Outcomes.
Applied clinical informatics, 10(02), pp.278-285.</p>
            </div>
            <div class="cv-sub">
            <p>Rogers, J., Spina, N., Neese, A., Hess, R., Brodke, D. and Lex, A., 2018.
Composer: Visual Cohort Analysis of Patient Outcomes
Workshop on Visual Analytics in Healthcare at AMIA (VAHC 2018).</p>
            </div>

          </div>

          <div>
            <h2>Selected Talks + Presentations</h2>
            <div class="cv-sub"><h3>(2021) Speaker, Invited Highlight Talk BioVis@ISMB 2021</h3>
            <p>Presented work on tRRRace and traceabiility that came from work “Insights
and Experiments with Rigor in an EvoBio Design Study”.</p>
            </div>
            <div class="cv-sub"><h3>(2018) Presenter, Workshop for VAHC, San Francisco, CA, United States</h3>
            <p>Presented work on “Composer” interactive cohort analysis tool developed in
collaboration with the Orthopaedic Research Center, University of Utah</p>
            </div>
            <div class="cv-sub"><h3>(2018) Poster Presenter IEEE VIS, Berlin, Germany</h3>
            <p>Presented poster for interactive cohort analysis tool developed in collaboration with the
Orthopaedic Research Center, University of Utah</p>
            </div>
            <div class="cv-sub"><h3>(2017) Poster Presenter and Student Grant Recipient, IS&T</h3>
            <p>International Symposium on Electronic Imaging, Burlingame, California
Invited to present interactive poster and speak on project developing interactive application
to visualize research in motor imagery decoding.</p>
            </div>
            <div class="cv-sub"><h3>(2016) Invited Speaker Duke of Edinburgh Award Ceremony, Glasgow, UK</h3>
            <p>Invited to speak to the attending body of the Duke of Edinburgh award ceremony on our
climbing expedition to raise money and awareness for Urban Uprising Foundation.</p>
            </div>
          </div>

        </div>
        </CV>
        
    </section>
  );
};

export default Work;
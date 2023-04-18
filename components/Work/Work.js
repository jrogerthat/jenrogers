import React from 'react';
import styled from 'styled-components';
import colors from '../../colors.js';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from './Image.js';
import trevoimage from '../../public/assets/images/trevo-landing.png';
import compimage from '../../public/assets/images/composer.png';
import trrraceimage from '../../public/assets/images/insights-landing.png';
import covaimage from '../../public/assets/images/cova-landing.png';
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faDesktop, faFilePdf, faPaperclip } from "@fortawesome/free-solid-svg-icons";

const StyledIconDiv = styled.div`
    font-size:24px;
    display:inline;
    margin:2px;
`

const StyledWrap = styled.div`
width:100%;
background-color:${colors.backgroundOffWhite};
background-image: radial-gradient(circle at 1.5px 1.5px, ${colors.gray} 1px, transparent 0);
background-size: 40px 40px;

width:95%;
display:flex;
flex-direction:column;
padding-left: 55px;

h1{
    font-family: lato;
}

h3 {
    font-family:lato;
}

h4 {
    font-family: lato;
}

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

`

const workData = [
    {
        sectionTitle: "Traceability",
        data: [
            {
                image: '../../public/assets/images/trevo-pair.png',
                // 'public/assets/images/trevo-landing.png',//covaimage,
                title: "Tracing and Visualizing Human-ML/AI Collaborative Processes through Artifacts of Data Work",
                link: null,
                text: `<p>In collaboration with <a href="" target="blank">Tableau Research</a>. We developed a taxonomy for data work artifacts that captures AutoML and human processes as well as an interactive sketch to operationalize our taxonomy which we call AutoML trace.</p>`,
                github: null,
                citation: null,
                preprint: 'https://arxiv.org/abs/2304.02699'
            },
            {
                image: '../../public/assets/images/trrracer-hover.mov',
                title: "tRRRaceR",
                link: "https://vdl.sci.utah.edu/Trevo/",
                text: `<p>In collaboration with <a href="https://www.uidaho.edu/sci/biology">Evolutionary Biologists at the University of Idaho</a> as part of the NSF Mutlinet Project. Visual tool to identify patterns of evolution in phylogenetic tree data.</p>`,
                github: 'https://github.com/visdesignlab/Trevo',
                citation: null,
                preprint: null
            },
            {
                image: '../../public/assets/images/trrrace-hover.mov',
                title: "tRRRace",
                link: "https://vdl.sci.utah.edu/trrrace/",
                text: `Implementing the tRRRace construct with an interactive visualization to trace insight emergent in design studies.`,
                github: 'https://github.com/visdesignlab/trrrace',
                citation: `Insights from experiments with rigor in an evobio design study
                J Rogers, AH Patton, L Harmon, A Lex, M Meyer
                IEEE Transactions on Visualization and Computer Graphics 27 (2), 1106-1116`,
                preprint: 'https://par.nsf.gov/servlets/purl/10208637'
              },

        ]

    },
    {
        sectionTitle: "Design Studies",
        data: [{
            image: '../../public/assets/images/trevo-pair.mov',//trevoimage,
            title: "Trevo",
            link: "https://vdl.sci.utah.edu/Trevo/",
            text: `<p>In collaboration with <a href="https://www.uidaho.edu/sci/biology">Evolutionary Biologists at the University of Idaho</a> as part of the NSF Mutlinet Project. Visual tool to identify patterns of evolution in phylogenetic tree data.</p>`,
            github: 'https://github.com/visdesignlab/Trevo',
            citation: `Insights from experiments with rigor in an evobio design study
            J Rogers, AH Patton, L Harmon, A Lex, M Meyer
            IEEE Transactions on Visualization and Computer Graphics 27 (2), 1106-1116`,
            preprint: 'https://par.nsf.gov/servlets/purl/10208637'
          },
          {
            image: '../../public/assets/images/cova-hover.mov',
            title: "Cova",
            link: "https://animationlab.utah.edu/cova",
            text: `<p>In collaboration with <a href="https://animationlab.utah.edu/" target="blank">the Animation Lab</a>. We built a web-based, expert crowdsourcing tool to build a consensus model of the SARS-CoV2 Life Cycle.</p>`,
            github: 'https://github.com/visdesignlab/coronavirus-annotation-3',
            citation: `A new tool for annotating scientific animations and supporting scientific dialogue
            H Liu, M Riggi, J Rogers, M Meyer, JH Iwasa
            PLoS Biology 20 (8), e3001731`,
            preprint: 'https://journals.plos.org/plosbiology/article?id=10.1371/journal.pbio.3001731'
          },
          {
            image: compimage,
            title: "Composer",
            link:"https://github.com/visdesignlab/Composer",
            text: `<p>In collaboration with the University of Utah <a href="https://medicine.utah.edu/orthopaedics/" target="blank">Orthopedic Center</a> and <href="https://medicine.utah.edu/population-health-sciences/" target="blank">Population Sciences</a>. Visual cohort analysis for patient outcomes.</p>`,
            github: 'https://github.com/visdesignlab/Composer',
            citation: `Composer—visual cohort analysis of patient outcomes
            J Rogers, N Spina, A Neese, R Hess, D Brodke, A Lex
            Applied clinical informatics 10 (02), 278-285`,
            preprint: 'https://sci.utah.edu/~vdl/papers/2018_infovis_composer_abstract.pdf'
          }
        ]

    }
]

const StyledVid = styled.video`
    width:360px;
    height:auto;
    margin-left: 20px;
    float:left;
    display:inline-block;
    margin-top:40px;
`;

const Moving = (moving)=>{
  //return <StyledVid onmouseover="this.play()" onmouseout="this.pause();this.currentTime=0;"><source src={moving} type="video/ogg"></source></StyledVid>
  return <StyledVid 
  className="video-container video-container-overlay" 
  onMouseOver={event => event.target.play()}
  onMouseOut={event => event.target.pause()}
  autoPlay="true" loop="" muted="" 
  data-reactid=".0.1.0.0">
  <source type="video/mp4" 
  data-reactid=".0.1.0.0.0" src={moving}></source>
  </StyledVid>
//     onMouseOver={event => event.target.play()}
//   onMouseOut={event => event.target.pause()}
}

const Work = () => {

  return(
  <StyledWrap>
    <div>
        <h1>Projects</h1>
    </div>
    {
        workData.map((w, i) => (
            <div key={`proj-${i}`} style={{width:'90%'}} >
                <h2>{w.sectionTitle}</h2>
                <div style={{display:'flex', flexDirection:'column', width:'90%'}}>
                    {w.data.map((m, j)=> (
                        <div key={`data-${j}`}>
                            <div><a href="" target="blank">
                                {/* <Image work={m.image}/></a> */}
                                {/* <img src={'../../public/assets/images/trevo-landing.png'} /> */}
                                {Moving(m.image)}
                                </a>
                                </div>
                             <div>
                                <h3>{m.title}</h3>
                                <p dangerouslySetInnerHTML={{__html:m.text}}></p>
                                <div style={{display:'flex', flexDirection:'row', alignItems:'center'}}>
                                {
                                    m.preprint != null && (
                                       <StyledIconDiv><a href={m.preprint} target = "blank" style={{marginRight:10}}>
                                        <FontAwesomeIcon icon={faFilePdf} size="2x"/></a></StyledIconDiv> 
                                    )
                                }
                                {
                                    m.citation != null && (
                                        <p>{m.citation}</p>
                                    )
                                }
                                </div>
                                
                                {
                                    m.link != null && (
                                        <StyledIconDiv><a href={m.link} target = "blank">
                                            <FontAwesomeIcon icon={faDesktop} size="2x"/></a></StyledIconDiv>
                                    )
                                }
                                 {
                                    m.github != null && (
                                        <StyledIconDiv><a href={m.github} target = "blank">
                                            <FontAwesomeIcon icon={faGithub} size="2x"/></a></StyledIconDiv>
                                    )
                                }
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
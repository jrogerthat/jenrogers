import React from 'react';
import styled from 'styled-components';
import colors from '../../colors.js';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from './Image.js';
import trevoMov from '../../public/assets/images/trevo-pair.mov';

import compimage from '../../public/assets/images/composer.png';
import thesisImage from '../../public/assets/images/2023_thesis_rogers.png'

import trrraceMov from '../../public/assets/images/trrrace-hover.mov';
import trrracerMov from '../../public/assets/images/trrracer-hover.mov';
import autoimage from '../../public/assets/images/proto-demo-720.mov';
import covaMov from '../../public/assets/images/cova-hover.mov';
import cv from '../../public/assets/JRCV2023.pdf';
import thesis from '../../public/assets/2023_thesis_rogers.pdf';

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
height:3200px;

// color: ${colors.gray};

display:flex;
flex-direction:column;
padding-left: 55px;

h1{
    font-family: lato;
}

h2 {
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
    font-family: lato;
    font-weight:300;
  }

`

const workData = [
    {
        sectionTitle: "Traceability",
        sectDescription: "Work focused on traceability of designn-oriented, subjective, and human-centered processes.",
        data: [
            {   
                image: thesisImage,
                title: "Ph.D. Thesis: Traceability in Design-Oriented Visualization Research",
                link: 'https://vdl.sci.utah.edu/publications/2023_thesis_rogers/',
                text: `<p>Reproducibility and replicability are pillars of the scientific method used to build confidence in scientific findings. In the wake of a replication crisis, more attention has been brought to these pillars within computer science and, specifically, the subfield of visualization. However, visualization covers a spectrum of approaches, from quantitative approaches such as algorithms development and perception studies to design-oriented or qualitative work in which the subjective, situated nature of the work is not intended to be reproducible. An open question remains within the visualization community: how do we, as a research community, make nonreproducible work scrutinizable?</p>`,
                github: null,
                citation: null,
                preprint: thesis,
                hasVid: false,
            },
            {   
                image: autoimage,
                // image: '../../public/assets/images/proto-demo-720.mov',
                // 'public/assets/images/trevo-landing.png',//covaimage,
                title: "Tracing and Visualizing Human-ML/AI Collaborative Processes through Artifacts of Data Work",
                link: null,
                text: `<p>In collaboration with <a href="" target="blank">Tableau Research</a>. We developed a taxonomy for data work artifacts that captures AutoML and human processes as well as an interactive sketch to operationalize our taxonomy which we call AutoML trace.</p>`,
                github: null,
                citation: null,
                preprint: 'https://arxiv.org/abs/2304.02699',
                hasVid: true
            },
            {
                image: trrracerMov,//'../../public/assets/images/trrracer-hover.mov',
                title: "tRRRaceR",
                link: "https://vdl.sci.utah.edu/Trevo/",
                text: `<p>In collaboration with <a href="https://www.uidaho.edu/sci/biology">Evolutionary Biologists at the University of Idaho</a> as part of the NSF Mutlinet Project. Visual tool to identify patterns of evolution in phylogenetic tree data.</p>`,
                github: 'https://github.com/visdesignlab/Trevo',
                citation: null,
                preprint: null,
                hasVid: true
            },
            {
                image: trrraceMov,//'../../public/assets/images/trrrace-hover.mov',
                title: "tRRRace",
                link: "https://vdl.sci.utah.edu/trrrace/",
                text: `Implementing the tRRRace construct with an interactive visualization to trace insight emergent in design studies.`,
                github: 'https://github.com/visdesignlab/trrrace',
                citation: `Insights from experiments with rigor in an evobio design study
                J Rogers, AH Patton, L Harmon, A Lex, M Meyer
                IEEE Transactions on Visualization and Computer Graphics 27 (2), 1106-1116`,
                preprint: 'https://par.nsf.gov/servlets/purl/10208637',
                hasVid: true
              },

        ]

    },
    {
        sectionTitle: "Design Studies",
        sectDescription: "Applied visualization research.",
        data: [{
            image: trevoMov,//'../../public/assets/images/trevo-pair.mov',//trevoimage,
            title: "Trevo",
            link: "https://vdl.sci.utah.edu/Trevo/",
            text: `<p>In collaboration with <a href="https://www.uidaho.edu/sci/biology">Evolutionary Biologists at the University of Idaho</a> as part of the NSF Mutlinet Project. Visual tool to identify patterns of evolution in phylogenetic tree data.</p>`,
            github: 'https://github.com/visdesignlab/Trevo',
            citation: `Insights from experiments with rigor in an evobio design study
            J Rogers, AH Patton, L Harmon, A Lex, M Meyer
            IEEE Transactions on Visualization and Computer Graphics 27 (2), 1106-1116`,
            preprint: 'https://par.nsf.gov/servlets/purl/10208637',
            hasVid: true
          },
          {
            image: covaMov,
            title: "Cova",
            link: "https://animationlab.utah.edu/cova",
            text: `<p>In collaboration with <a href="https://animationlab.utah.edu/" target="blank">the Animation Lab</a>. We built a web-based, expert crowdsourcing tool to build a consensus model of the SARS-CoV2 Life Cycle.</p>`,
            github: 'https://github.com/visdesignlab/coronavirus-annotation-3',
            citation: `A new tool for annotating scientific animations and supporting scientific dialogue
            H Liu, M Riggi, J Rogers, M Meyer, JH Iwasa
            PLoS Biology 20 (8), e3001731`,
            preprint: 'https://journals.plos.org/plosbiology/article?id=10.1371/journal.pbio.3001731',
            hasVid: true
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
            preprint: 'https://sci.utah.edu/~vdl/papers/2018_infovis_composer_abstract.pdf',
            hasVid: false
          }
        ]

    }
]

const StyledImg = styled.img`
    width:560px;
    height:auto;
    float:left;
    display:inline-block;
    margin-top:40px;
    border-radius:20px;
    border: 1px solid gray;
    box-shadow: 0 19px 51px 0 rgba(0,0,0,0.16), 0 14px 19px 0 rgba(0,0,0,0.07);
`

const StyledVid = styled.video`
    width:560px;
    height:auto;
    float:left;
    display:inline-block;
    margin-top:40px;
    border-radius:20px;
    border: 1px solid gray;
    box-shadow: 0 19px 51px 0 rgba(0,0,0,0.16), 0 14px 19px 0 rgba(0,0,0,0.07);
`;

const notMoving = (src) => {
    return <StyledImg src={src} />
}

const Moving = (moving)=>{
  //return <StyledVid onmouseover="this.play()" onmouseout="this.pause();this.currentTime=0;"><source src={moving} type="video/ogg"></source></StyledVid>
  return <StyledVid 
  className="video-container video-container-overlay" 
  onMouseOver={event => event.target.play()}
  onMouseOut={event => event.target.pause()}
  autoPlay={false} 
  loop="" muted={true}
  data-reactid=".0.1.0.0">
  <source type="video/mp4" 
  data-reactid=".0.1.0.0.0" src={moving}></source>
  </StyledVid>
}

const Work = () => {

  return(
  <StyledWrap>
    <div style={{marginTop:50, marginBottom:50, fontFamily:'lato'}}>
        <h3>
        For a full picture, look at my <a href={`${cv}`} target="blank">CV</a>
        </h3>
    </div>
    <div>
        <h1>Projects</h1>
    </div>
    {
        workData.map((w, i) => (
            <div key={`proj-${i}`} style={{width:'90%', paddingBottom:50, borderTop: `1px solid ${colors.gray}`}} >
                <h2>{w.sectionTitle}</h2>
                <p style={{fontSize:18, fontFamily:'lato'}}>{w.sectDescription}</p>
                <div style={{display:'flex', flexDirection:'column', width:'90%'}}>
                    {w.data.map((m, j)=> (
                        <div key={`data-${j}`} style={{display:'flex', flexDirection:'row', alignItems:'center'}}>
                            <div style={{paddingRight:50}}>
                                <a href="" target="blank">

                                {m.hasVid === true ? Moving(m.image) : notMoving(m.image)}
                                </a>
                            </div>
                             <div>
                                <h2>{m.title}</h2>
                                <p dangerouslySetInnerHTML={{__html:m.text}}></p>
                                {
                                    (m.preprint !== null && m.citation !== null) ? <div style={{display:'flex', flexDirection:'row', alignItems:'center'}}>
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
                                    </div> :  <StyledIconDiv><a href={m.preprint} target = "blank" style={{marginRight:10}}><FontAwesomeIcon icon={faFilePdf} size="2x"/></a></StyledIconDiv> 
                                }
                                
                                
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
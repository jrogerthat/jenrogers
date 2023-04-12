import React from 'react';
import styled from 'styled-components';
import colors from '../../colors.js';


const StyledLanding = styled.div`

  
  background-color:${colors.backgroundOffWhite};

  padding-right:10rem;
  margin-right: 1rem;

  padding-left: 2rem;
  padding-top:10rem;

  display:flex;
  flex-direction:column;
  flex:1;
  

  color:${colors.charleston}

  background-image: radial-gradient(circle at 1.5px 1.5px, ${colors.charleston} 1px, transparent 0);
  background-size: 40px 40px;

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

class Landing extends React.Component {

  constructor() {
    super();
    this.state = { textIdx: 0 };
  }

  componentDidMount() {
    this.timeout = setInterval(() => {
      let currentIdx = this.state.textIdx;
      this.setState({ textIdx: currentIdx + 1 });
    }, 1500);
  }

  componentDidUnmount() {
    clearInterval(this.timeout);
  }


    render() {

      let textThatChanges = texts[this.state.textIdx % texts.length];

      return (
        // <>
        // <div className="Landing">
        <StyledLanding>
          <h1>
              Hi, I'm Jen. 
          </h1>
          <h1>I like to <span> {textThatChanges}</span> things.</h1>
          {/* <h2>postdoctoral reseracher with the <a href="https://vdl.sci.utah.edu/">Visualization Design Lab</a>, Scientific Computing and Imaging Institute, University of Utah</h2> */}
          <h2>Postdoctoral researcher with the <a href="https://valt.cs.tufts.edu/" target='blank'>Visual Analytics Lab</a>, Tufts and the <a href="https://www.merck.com/stories/why-were-expanding-and-investing-in-our-research-and-discovery-efforts/" target='blank'>Exploratory Science Center</a>, Merck</h2>
          </StyledLanding>
        // </div>
          
        // </>
      )
    }
  }
  
  export default Landing;
import React from 'react';
import styled from 'styled-components';
import colors from '../../colors.js';


const StyledLanding = styled.div`

  height: 4rem;

  width: 95%;

  padding-right:10rem;
  margin-right: 1rem;
  margin-top: 10rem;
  padding-left: 2rem;

  color:${colors.charleston}

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
        width: 55rem;
    }
  }
`;

const texts = [
  'create',
  'build',
  'learn'
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
        <section className="Landing">
        <StyledLanding>
          <h1>
              Hi, I'm Jen. 
          </h1>
      <h1>I like to <span> {textThatChanges}</span> things.</h1>
          <h2>PhD student with the <a href="https://vdl.sci.utah.edu/">Visualization Design Lab</a>, Scientific Computing and Imaging Institute, University of Utah</h2>
          </StyledLanding>
        </section>
          
        // </>
      )
    }
  }
  
  export default Landing;
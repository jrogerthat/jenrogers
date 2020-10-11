import React from 'react';
import styled from 'styled-components';
import colors from '../../colors.js';


const StyledLanding = styled.div`

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
  }
`;

class Landing extends React.Component {
    render() {
      return (
        // <>
        <section className="Landing">
        <StyledLanding>
          <h1>
              Hi, I'm Jen. 
          </h1>
          <h1>I like to build things.</h1>
          <h2>PhD student with the Visualization Design Lab, Scientific Computing and Imaging Institute, University of Utah</h2>
          </StyledLanding>
        </section>
          
        // </>
      )
    }
  }
  
  export default Landing;
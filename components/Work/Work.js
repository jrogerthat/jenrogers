
import React from "react";
import styled from 'styled-components';
import colors from '../../colors.js';

const StyledWork = styled.div`

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

const Work = () => {
  return (
    <section className="Work">
        <StyledWork>
        <h1>What I'm Working On</h1>
        </StyledWork>
    </section>
  );
};

export default Work;
import React from 'react';
import styled from 'styled-components';
import colors from '../../colors';


const StyledNav = styled.div`
  background-color:${colors.backgroundOffWhite};
  height:60px;
  display:flex;
  flex-direction:row;
  align-items:end;
  margin-top:10px
`;

const Navbar = ({setView}) => {
 
    return (
        <StyledNav>
            <div class="btn btn9" onClick={() => setView("landing")}>
            <h4>Home</h4>
            </div>
            <div class="btn btn9" onClick={() => setView("work")}>
            <h4>Work</h4>
            </div>
            <a a href="http://thechor.us/index.html#work" target='blank'><div class="btn btn9">
            <h4>Fun</h4>
            </div></a>
        </StyledNav>
    )
}

export default Navbar;
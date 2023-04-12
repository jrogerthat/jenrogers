import React from 'react';
import styled from 'styled-components';
import colors from '../../colors.js';
import Button from './Button.js';
import {Link, BrowserRouter, Route, Switch} from 'react-router-dom';
import About from '../About/About.js'
import Landing from '../Landing/Landing';
import Work from '../Work/Work.js';

const StyledNav = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${colors.backgroundOffWhite};
  width: 100%;
  height: 4rem;
  nav {
    display: flex;
    width: 95%;
    justify-content: flex-end;
    color: gray;
    padding-right:10rem;
    margin-right: 1rem;
    margin-top: -.5rem;
    h2 {
      display: flex;
      margin-left: 2rem;
      align-items: center;
      width: 50rem;
    }
    ul {
      display: flex;
      width: 100%;
      justify-content: flex-end;
      li {
        list-style-type: none;
        margin: 1rem;
        text-transform: uppercase;
        a {
          text-decoration: none;
          color: gray;
        }
        a:hover {
          text-decoration: underline;
        }
      }
    }
  }
`;

class Navbar extends React.Component {
  render() {
    return (
      <>
        <StyledNav>
          <nav>
          <Link className="nav-link" to='/'><Button>Home</Button></Link>
          <Link className="nav-link" to='/About'><Button>Who</Button></Link>
          <Link className="nav-link" to='/Work'><Button>What</Button></Link>
          </nav>
        </StyledNav>
        <div className='wrap' style={{display:'flex', flexDirection:'column', flex:1, height:'100%', backgroundColor: colors.backgroundOffWhite}}>
          <Switch>
            <Route exact path='/' component={Landing}/>
            <Route exact path='/About' component={About} />
            <Route exact path='/Work' component={Work} />
            <Route render={function () {
              return <p>Not found</p>
            }} />
          </Switch>
        </div>
      </>
    )
  }
}

export default Navbar;
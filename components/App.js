import React, { useState } from 'react';
import Navbar from './Navbar/Nav';
import colors from '../colors';
import styled from 'styled-components';
import Landing from './Landing/Landing';
import About from './About/About';
import Work from './Work/Work';

const StyledApp = styled.div`

  background-color:${colors.backgroundOffWhite};
  display: flex;
  flex-direction:column;
  height:100%;

`;


const App = () => {

  const [view, setView] = useState('landing');

  return (
    <StyledApp className="App">
      <Navbar setView={setView} />
      <Main view={view}/>
    </StyledApp>
  )
}

const Main = ({view}) => {
  if(view === 'work'){
    return(
      <div style={{display:'flex', flex:1, height:'100%'}}>
        <Work />
      </div>
    )
  }else if(view === 'fun'){
    return(
      <div style={{display:'flex', flex:1, height:'100%'}}>
        {'fun'}
      </div>
    )
  }
  return (
    <div style={{display:'flex', flex:1, height:'100%'}}>
    <Landing />
  </div>
  )
}

export default App;
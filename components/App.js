import React, { useState } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Navbar from './Navbar/Nav';


const App = () => {


  return (
    <div className="App">
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
    {/* <Main view={view} /> */}
    </div>
  )
}

// const Main = ({view}) => {
//   if(view === 'landing'){
//     return <Landing />
//   }
// }

export default App;
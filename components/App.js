import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Navbar from './Navbar/Nav';


const App = () => {
  return (
    <section className="App">
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
    </section>



  )
}

export default App;
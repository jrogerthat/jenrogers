import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Navbar from './Navbar/Nav';
import Landing from './Landing/Landing';
import About from './About.js'

const App = () => {
  return (
    <section className="App">
    <BrowserRouter>
      <Navbar />
      {/* <Switch>
        <Route exactly component={Landing} pattern="/" />
        <Route exactly component={About} pattern="/About"/>
      </Switch> */}
    </BrowserRouter>
    </section>



  )
}

export default App;
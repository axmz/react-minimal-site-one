import React, { useEffect, useState } from 'react';
import './App.css';
import { Switch, Route, useLocation } from 'react-router-dom'
import Home from './pages/home/index'
import About from './pages/about/index'
import Contacts from './pages/contacts/index'
import Credits from './pages/credits/index'
import Header from './components/header/header'
import Footer from './components/footer/footer'

function App() {
  const [hidden, setHidden] = useState(true)

  const handleKeyDown = (e) => {
    console.log(e)
    if (e.keyCode === 27) {
      console.log('esc')
      setHidden(true)
    }
    if (e.keyCode === 191) {
      console.log('/')
      setHidden(false)
    }
    if (e.keyCode === 13) {
      console.log('enter')
      // e.preventDefault()
    }
  }


  useEffect(() => {
    document.addEventListener('hover', handleKeyDown)
    return document.removeEventListener('hover', handleKeyDown)
  }, [handleKeyDown])

  return (
    <div className="App">
      <Header hidden={hidden} setHidden={setHidden} />
      <div className="container">
        <Switch >
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contacts">
            <Contacts />
          </Route>
          <Route path="/credits">
            <Credits />
          </Route>
          <Route>
            <Credits />
          </Route>
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;

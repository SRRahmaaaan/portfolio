import React from 'react'
import {Switch, Route} from "react-router-dom"
import "./App.scss"
import Navbar from './Components/Navbar'
import About from './Pages/About'
import Blogs from './Pages/Blogs'
import Contact from './Pages/Contact'
import HomePage from './Pages/HomePage'
import Projects from './Pages/Projects'

const App = () => {
  return (
    <main className="App">
      <div className="sidebar">
        <Navbar />
      </div>
      <div className="main-content">
        <div className="content">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/projects" component={Projects} />
            <Route path="/blogs" component={Blogs} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </div>
      </div>
    </main>
  );
}

export default App

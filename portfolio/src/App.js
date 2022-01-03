import Topbar from "./components/topbar/Topbar"
import Intro from "./components/intro/Intro"
import Portfolio from "./components/portfolio/Portfolio"
import Works from "./components/works/Works"
import AboutMe from "./components/AboutMe/AboutMe"
import Contact from "./components/contact/Contact"
import Menu from "./components/Menu/Menu"
import Skills from "./components/Skills/Skills"
import "./app.scss"
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'jquery/dist/jquery.slim.min.js'
import 'popper.js/dist/popper.min.js'

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lightOn, setLightOn] = useState(true);
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} lightOn={lightOn} setLightOn={setLightOn}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} lightOn={lightOn} setLightOn={setLightOn}/>
      <div className='section'>
        <Intro/>
        <AboutMe/>
        <Skills/>
        <Works/>
        <Portfolio/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;

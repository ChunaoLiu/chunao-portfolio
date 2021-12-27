import logo from './logo.svg';
import Topbar from "./components/topbar/Topbar"
import Intro from "./components/intro/Intro"
import Portfolio from "./components/portfolio/Portfolio"
import Works from "./components/works/Works"
import Testimonials from "./components/testimonals/Testimonials"
import Contact from "./components/contact/Contact"
import Menu from "./components/Menu/Menu"
import "./app.scss"
import { useState } from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lightOn, setLightOn] = useState(true);
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} lightOn={lightOn} setLightOn={setLightOn}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} lightOn={lightOn} setLightOn={setLightOn}/>
      <div className='section'>
        <Intro/>
        <Portfolio/>
        <Works/>
        <Testimonials/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;

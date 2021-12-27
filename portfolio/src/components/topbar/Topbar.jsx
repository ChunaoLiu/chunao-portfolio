import "./topbar.scss"
import {Person, Mail} from "@material-ui/icons"
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Topbar({ menuOpen, setMenuOpen, lightOn, setLightOn }) {
    return (
        <div className={"topbar " + (lightOn && "light") + " " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">intro</a>
                    <div className="itemContainer">
                        <Person className="icon"/>
                        <span>
                            +1 814 844 3309
                        </span>
                    </div>
                    <div className="itemContainer">
                        <Mail className="icon"/>
                        <span>
                            liu2849@purdue.edu
                        </span>
                    </div>
                    <div className="itemContainer">
                        <a className="no-href" href="https://github.com/aNewbieProgrammer">
                        <GitHubIcon className="icon"/>
                        <span>
                            github.com/aNewbieProgrammer
                        </span>
                        </a>
                    </div>
                    <div className="itemContainer">
                        <a className="no-href" href="https://www.linkedin.com/in/chunao-liu-1a7a31204/">
                        <LinkedInIcon className="icon"/>
                        <span>
                            linkedin.com/in/chunao-liu-1a7a31204/
                        </span>
                        </a>
                    </div>
                </div>
                <div className="right">
                    <div className="lightSwitch">
                        <LightbulbIcon className="lightBulb" onClick={()=>setLightOn(!lightOn)}/>
                    </div>
                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

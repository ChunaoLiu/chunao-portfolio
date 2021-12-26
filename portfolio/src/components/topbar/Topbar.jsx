import "./topbar.scss"
import {Person, Mail} from "@material-ui/icons"
import LightbulbIcon from '@mui/icons-material/Lightbulb';

export default function Topbar({ menuOpen, setMenuOpen }) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
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
                </div>
                <div className="right">
                    <div className="lightSwitch">
                        <LightbulbIcon className="lightBulb"/>
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

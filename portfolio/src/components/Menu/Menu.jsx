import "./menu.scss"

export default function Menu({ menuOpen, setMenuOpen, lightOn, setLightOn }) {

    let MenuRev = () => setMenuOpen(!menuOpen);

    return (
        <div className={"menu " + (lightOn && "light") + " " + (menuOpen && "active")}>
            <ul>
                <li>
                    <a href="#intro" onClick={MenuRev}>Home</a>
                </li>
                <li>
                    <a href="#AboutMe" onClick={MenuRev}>About Me</a>
                </li>
                <li>
                    <a href="#Skills" onClick={MenuRev}>My Skills</a>
                </li>
                <li>
                    <a href="#works" onClick={MenuRev}>Work & Education</a>
                </li>
                <li>
                    <a href="#portfolio" onClick={MenuRev}>Portfolio</a>
                </li>
                <li>
                    <a href="#contact" onClick={MenuRev}>Contact</a>
                </li>
            </ul>
        </div>
    )
}

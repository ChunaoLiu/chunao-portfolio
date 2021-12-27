import "./intro.scss"
import { init } from 'ityped'
import React, { useEffect, useRef } from "react"

export default function Intro() {
    
    const textRef = useRef();
    useEffect(()=>{
        init(textRef.current, {
            showCursor: true,
            strings: ["Fullstack Engineer", "Networking Engineer", "Software Engineer"],
            loop: false,
            backDelay: 1500,
            backSpeed: 60,
        });
    },[])

    return (
        <div className="intro" id="intro">
            <div className="upper">
                <div className="left">
                    <div className="imageContainer">
                        <img id="Myself" className="image" src="assets/Dude_W_BG_HD.png" alt="" onLoad={() => {document.getElementById("Myself").className += "loaded"}}/>
                    </div>
                </div>
                <div className="right">
                    <div className="wrapper">
                        <h1 className="h1">This is me, Chunao!</h1>
                        <h3 className="h3_not_last">Currently a Undergraduate CS student at</h3>
                        <h2 className="h2_not_last">Purdue University</h2>
                        <h3 className="h3_last">I am a <span ref={textRef}></span></h3>
                    </div>
                </div>
            </div>
            <div className="lower">
                <a href="#portfolio"><img id="down-arrow" className="image" src="assets/down_arrow_ccexpress.png" alt="" onLoad={DelayedShow()}/></a>
            </div>
        </div>
    )

    function DelayedShow() {
        setTimeout(() => {document.getElementById("down-arrow").className = "imageshow"}, 2000);
    }
}

import "./skills.scss"
import React from 'react'
import { useEffect, useState } from "react"
import VisibilitySensor from 'react-visibility-sensor';
import { ProgressBar } from 'react-bootstrap';

export default function Skills() { 

    const [visible, setVisible] = useState(false);

    function onChange (isVisible) {
        if (isVisible) {
            console.log("ProgressBar is now visible!");
            setVisible(visible);
            document.getElementById("C/C++").firstChild.style.width = '100%';
            document.getElementById("Javascript").firstChild.style.width = '70%';
            document.getElementById("Java").firstChild.style.width = '90%';
            document.getElementById("HTML/CSS").firstChild.style.width = '80%';
            document.getElementById("Python").firstChild.style.width = '90%';
            document.getElementById("Swift").firstChild.style.width = '60%';
            document.getElementById("C/C++").firstChild.style.width = '100%';
        }
    };

    return (
        <VisibilitySensor 
        onChange={onChange}
        partialVisibility={'bottom'}
        offset={{bottom:-600}}
        intervalCheck={true}>
        <div className="skills" id="Skills">
            <section className="site-section section-skills">
                <div className="container">
                    <div className="text-center">
                        <h3>My Skills</h3>
                        <img src="assets/lines.svg" className="img-lines" alt="lines"></img>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="skill">
                                <h4>C/C++</h4>
                                <ProgressBar id="C/C++" animated={true} now={0}/>
                            </div>
                            <div className="skill">
                                <h4>JavaScript</h4>
                                <ProgressBar id="Javascript" animated={true} now={0}/>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="skill">
                                <h4>Java</h4>
                                <ProgressBar id="Java" animated={true} now={0}/>
                            </div>
                            <div className="skill">
                                <h4>HTML/CSS</h4>
                                <ProgressBar id="HTML/CSS" animated={true} now={0}/>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="skill">
                                <h4>Python</h4>
                                <ProgressBar id="Python" animated={true} now={0}/>
                            </div>
                            <div className="skill">
                                <h4>Swift</h4>
                                <ProgressBar id="Swift" animated={true} now={0}/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="bottomcontainer">
                <div className="text-center">
                    <h3>I can help you with</h3>
                    <img src="assets/lines.svg" className="img-lines" alt="lines"></img>
                </div>
                <div className="moreskill">
                    <div className="gifcontainer-frontend">
                        <h3 className="words">Front-end design and implementation</h3>
                        <img className="gif" src="/assets/front-end.gif" alt=""/>
                    </div>
                    <div className="gifcontainer">
                    <h3 className="words">Back-end networking and Database design</h3>
                        <img className="gif" src="/assets/back-end.gif" alt=""/>
                    </div>
                    <div className="gifcontainer-backend">
                        <h3 className="words">DevOps CI/CD and Cloud Solution</h3>
                        <img className="gif" src="/assets/cloud.gif" alt=""/>
                    </div>
                </div>
            </div>
        </div>
        </VisibilitySensor>
    )
}

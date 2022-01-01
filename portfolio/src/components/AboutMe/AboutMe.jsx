import "./aboutMe.scss"
import Delayed from '../Tools/Delayed';
import { useState } from "react";
import VisibilitySensor from 'react-visibility-sensor';
import { SystemUpdateTwoTone } from "@material-ui/icons";

export default function AboutMe() {

    const [visible, setVisible] = useState(false);

    function onChange(isVisible) {
        if (isVisible) {
            setVisible(true);
            console.log("About me is now visible!");
        }
    }

    return (
        <VisibilitySensor 
        onChange={onChange}
        scrollCheck={true}
        partialVisibility={'bottom'}
        offset={{bottom:-200}}>
            <div className="AboutMe" id="AboutMe">
                <div className={visible ? "doublePhoto" : "doublePhoto-hide"}>
                    <div className="BGPhoto"></div>
                    <div className="ActualPhoto">
                        <img className="image" src="/assets/A Squared Dude.jpg" alt=""/>
                    </div>
                </div>
                <div className={visible ? "MeDoc" : "MeDoc-hide"}>
                    <h1 className="h1-title">About Me</h1>
                    <q className="q-MotivationWords"> A man's greatest bless is to have the resources to chase his dream </q>
                    <p className="p-para1"> I am an enthusiastic developer in multiple domains. I have experience in cross-domain
                    mobile-app and web-app development, as well as both Sequel and Non-sequel database management. 
                    I am also experienced in DevOps CI/CD by combining Git, Jenkins or GitLab and Apache HTTP server. </p>
                    <p className="p-para1"> Currently, I am very interested in backend technologies, especially in 
                    networking and distributed system. I am planning to implement my first distributed system using SeaweedFS for
                    various features such as failsave, daily functionality check and more, but one day, I want to write my own 
                    distributed system!</p>
                    <p className="p-para2"> I am also planning to pursue a master's degree in Computer Science and my dream future 
                    occupation is to work on distributed cloud services.</p>
                </div>
            </div>
        </VisibilitySensor>
    )
}

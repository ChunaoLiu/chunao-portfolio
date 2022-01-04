import "./contact.scss"
import VisibilitySensor from 'react-visibility-sensor';
import { useEffect, useState } from "react"
import emailjs from 'emailjs-com'

export default function Contact() {

    const [visible, setVisible] = useState(false);
    const [message, setMessage] = useState(false);
    const [seconds, setSeconds] = useState(0);  
    
    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(seconds => seconds + 1);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    function onChange (isVisible) {
        if (isVisible) {
            console.log('final page is now visible!');
            setVisible(isVisible);
        }
    };

    const SendSubmit = (e) => {
        e.preventDefault();
        setMessage(true);
        var sender = document.getElementById("sender").value;
        var msg = document.getElementById("message").value;
        var template_params = {
            'sender': sender,
            'message': msg,
        }
        
        // I'll setup the the server part later, so please don't be a jerk and abusively use these sensitive data
        emailjs.send('service_fup64h4', 'template_omhx73l', template_params, 'user_R4ikNOJViJSs9RgDoPL8u')
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                }, function(error) {
                console.log('FAILED...', error);
            });
    }

    useEffect(()=>{
        if (visible) {
            setTimeout(() => {document.getElementById("sug").className = "suggesstions";document.getElementById("right").className = "rightcontainer"}, 2000);
        }
    }, [visible])

    return (
        <VisibilitySensor 
        onChange={onChange}
        scrollCheck={true}
        partialVisibility={'bottom'}
        offset={{bottom:-200}}>
        <div className='contact' id="contact">
            <div className={visible ? "leftcontainer" : "leftcontainer-hidden"}>
                <div className="timer">
                    <div className="left">
                        <h1 className="words">Thank you for your precious</h1>
                        <h1 className="bigTimer">{seconds}</h1>
                        <h1 className="words">Seconds on this site!</h1>
                    </div>
                    <div className="right">
                        <div className="gifcontainer">
                            <img className="gif" src="/assets/devops-dudes.gif" alt=""/>
                        </div>
                    </div>
                </div>
                <div id="sug" className="suggesstions-hidden">
                    <h1 className="SugWords">What do you think of this site?</h1>
                    <h1 className="words">Leave a comment if you like it or how can I improve it!</h1>
                </div>
            </div>
            <div id="right" className="rightcontainer-hidden">
                <form onSubmit={SendSubmit}>
                    <h2>Contact.</h2>
                    <input id="sender" type="text" placeholder="Your Name or Email" defaultValue={"Anonymous"}/>
                    <textarea id="message" placeholder="Message"></textarea>
                    <button type="submit">Send</button>
                    {message && <span>Thank you for your reply! <br/>Hope you enjoy my content ;)</span>}
                </form>
            </div>
        </div>
        </VisibilitySensor>
    )
}

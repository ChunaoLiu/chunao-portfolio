import "./contact.scss"
import { useEffect, useState } from "react"
import emailjs from 'emailjs-com'

export default function Contact() {

    const [message, setMessage] = useState(false);
    const [seconds, setSeconds] = useState(0);  
    
    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(seconds => seconds + 1);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const SendSubmit = (e) => {
        e.preventDefault();
        setMessage(true);
        var sender = document.getElementById("sender").value;
        var msg = document.getElementById("message").value;
        var template_params = {
            'sender': sender,
            'message': msg,
        }

        emailjs.send('service_fup64h4', 'template_omhx73l', template_params, 'user_R4ikNOJViJSs9RgDoPL8u')
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                }, function(error) {
                console.log('FAILED...', error);
            });
    }

    return (
        <div className='contact' id="contact">
            <div className="leftcontainer">
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
                <div className="suggesstions">
                    <h1 className="SugWords">What do you think of this site?</h1>
                    <h1 className="words">Leave a comment if you like it or how can I improve it!</h1>
                </div>
            </div>
            <div className="rightcontainer">
                <form onSubmit={SendSubmit}>
                    <h2>Contact.</h2>
                    <input id="sender" type="text" placeholder="Your Name or Email" defaultValue={"Anonymous"}/>
                    <textarea id="message" placeholder="Message"></textarea>
                    <button type="submit">Send</button>
                    {message && <span>Thank you for your reply! <br/>Hope you enjoy my content ;)</span>}
                </form>
            </div>
        </div>
    )
}

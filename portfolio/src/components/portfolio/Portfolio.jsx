import "./portfolio.scss"
import PortfolioList from "../portfolioList/PortfolioList";
import { useState, useEffect, useRef } from "react";
import {
    webappPortfolio,
    mobilePortfolio,
    featuredPortfolio,
} from "../../data";
import VisibilitySensor from 'react-visibility-sensor';
import { init } from 'ityped'

export default function Portfolio() {
    const [selected, setSelected] = useState("featured");
    const [data, setData] = useState([]);
    const [visible, setVisible] = useState(false);
    const textRef1 = useRef();
    const textRef2 = useRef();
    useEffect(()=>{
        if (visible) {
            init(textRef1.current, {
                showCursor: false,
                strings: ["While hasCoffee is True:"],
                loop: false,
                disableBackTyping: true,
                startDelay: 2000,
                onFinished: function() {
                    init(textRef2.current, {
                        showCursor: true,
                        strings: ["    Code on()"],
                        loop: false,
                    });
                }
            });
        }
    },[visible])
    const list = [
        {
            id: "featured",
            title: "Featured",
        },
        {
            id: "webapp",
            title: "Web App",
        },
        {
            id: "mobileapp",
            title: "Mobile App",
        },
    ];

    function onChange (isVisible) {
        console.log('Element is now %s', isVisible ? 'visible' : 'hidden');
        if (isVisible) {
            setVisible(isVisible);
        }
    };

    useEffect(()=>{
        switch(selected) {
            case "featured":
                setData(featuredPortfolio);
                break;
            case "webapp":
                setData(webappPortfolio);
                break;
            case "mobileapp":
                setData(mobilePortfolio);
                break;
            default:
                setData(featuredPortfolio);
        }
    }, [selected]);

    useEffect(()=>{
        if (visible) {
            setTimeout(() => {document.getElementById("bottom_block").className = "block_bottom"}, 2000);
        }
    }, [visible])

    return (
        <VisibilitySensor 
        onChange={onChange}
        scrollCheck={true}
        partialVisibility={'bottom'}
        offset={{bottom:-200}}>
            <div className="portfolio" id="portfolio">
                <div className={visible ? "blocks" : "blocks_hidden"}>
                    <h1>Portfolio</h1>
                    <ul>
                        {list.map((item) => (
                            <PortfolioList title={item.title} 
                            active={selected === item.id} 
                            setSelected={setSelected}
                            id={item.id}/>
                        ))}
                    </ul>
                    <div className="container">
                        {data.map((d) => (
                            <a href={d.webpage} className="item">
                                <img
                                    src={d.img}
                                    alt=""
                                />
                                <h3>{d.title}</h3>
                            </a>
                        ))}
                    </div>
                </div>
                <div className="block_bottom_hidden" id="bottom_block">
                    <div className="imagewrapper">
                        <img src="/assets/coffee_man_w_bg.png" className="img"/>
                    </div>
                    <div className="wrapper">
                        <h2 className="h2-text"><span ref={textRef1}></span></h2>
                        <br></br>
                        <h2 className="h2-text-last"><span ref={textRef2}></span></h2>
                    </div>
                </div>
            </div>
        </VisibilitySensor>
    )
}



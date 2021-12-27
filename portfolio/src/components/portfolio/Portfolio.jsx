import "./portfolio.scss"
import PortfolioList from "../portfolioList/PortfolioList";
import { useState, useEffect} from "react";
import {
    webappPortfolio,
    mobilePortfolio,
    featuredPortfolio,
} from "../../data";
import VisibilitySensor from 'react-visibility-sensor';

export default function Portfolio() {
    const [selected, setSelected] = useState("featured");
    const [data, setData] = useState([]);
    const [visible, setVisible] = useState(false);
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

    var isRendered = false;

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

    return (
        <VisibilitySensor 
        onChange={onChange}>
            <div className={visible ? "portfolio" : "portfolio-hidden"} id="portfolio">
                <div className="blocks">
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
            </div>
        </VisibilitySensor>
        
    )
}



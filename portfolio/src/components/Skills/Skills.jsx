import "./skills.scss"
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { LanguageSkillData, FrameworkAndTools, Cloud, options_Cloud, options_Framework, options_Language } from "../../data";
import React from 'react'

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const options_bar = {
    maintainAspectRatio: false,
    responsive: true,
    dynamicDisplay : true,
    scales: {
        y: {
            min: 0,
            max: 10,
            ticks: {
                stepSize: 2
            }
        }
    },
    animation: {
        duration: 3000,
        easing: "easeInBounce",
      },
    plugins: {
        legend: {
        position: 'top',
        },
        title: {
        display: true,
        text: 'Chart.js Bar Chart',
        },
        deferred: {
            xOffset: 150,
            yOffset: '50%',
            delay: 500
        }
    },
};

export default function Skills() {

    return (
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
                            <h4>Html/css</h4>
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" data-transitiongoal="100"></div>
                            </div>
                        </div>
                        <div className="skill">
                            <h4>Python</h4>
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" data-transitiongoal="75"></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="skill">
                            <h4>Javascript</h4>
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" data-transitiongoal="82"></div>
                            </div>
                        </div>
                        <div className="skill">
                            <h4>Ruby</h4>
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" data-transitiongoal="66"></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="skill">
                            <h4>Php</h4>
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" data-transitiongoal="97"></div>
                            </div>
                        </div>
                        <div className="skill">
                            <h4>Java</h4>
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" data-transitiongoal="45"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </div>
    )
}

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
            <head>
                <script src="cdn.jsdelivr.net/npm/chartjs-plugin-deferred@1"/>
            </head>
            <div className="title-block">
                <h1 className="chart-title">My skill chart</h1>
            </div>
            <div className="charts">
                <div className="chart1">
                    <div className="chartCanvas">
                        <Bar options={options_Language} data={LanguageSkillData}/>
                    </div>
                    <div className="chartCanvas">
                        <Bar options={options_Framework} data={FrameworkAndTools}/>
                    </div>
                    <div className="chartCanvas-cloud">
                        <Bar options={options_Cloud} data={Cloud}/>
                     </div>
                </div>
                <div className="chart2">
                    
                </div>
            </div>
        </div>
    )
}

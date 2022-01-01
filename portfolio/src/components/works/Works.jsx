import "./works.scss"
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export default function works() {
    return (
        <div className="works" id="works">
            <div className="uppertitle">
                <h2 className="h2-title">My work / education history</h2>
                <h2 className="h2-subtitle">The learning never ends</h2>
            </div>
            <VerticalTimeline lineColor={'grey'}>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    contentStyle={{ background: '#e91e63', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  #e91e63' }}
                    date={"2019 - present"}
                    iconStyle={{ background: 'black', color: '#fff' }}
                    icon={<img src="/assets/purdue_icon.png" alt="" style={{ width: "60px", height: "60px", objectFit:'contain', display: 'flex', alignItems: 'center', justifyContent: 'center'}}/>}
                >
                    <h3 className="vertical-timeline-element-title">Undergraduate student</h3>
                    <h4 className="vertical-timeline-element-subtitle">Purdue-West Lafayette, IN</h4>
                    <p>
                    Undergraduate student at Purdue University, majoring Computer Science with Software Engineering track
                    </p>
                    <p>
                        GPA: 3.83
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2018 - 2019"
                    contentArrowStyle={{ borderRight: '7px solid  #e91e63' }}
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<img src="/assets/psu_icon.png" alt="" style={{ width: "60px", height: "60px", objectFit:'contain', display: 'flex', alignItems: 'center', justifyContent: 'center'}}/>}
                >
                    <h3 className="vertical-timeline-element-title">Undergraduate student</h3>
                    <h4 className="vertical-timeline-element-subtitle">Penn State University- PA</h4>
                    <p>
                    Undergraduate student at Pennsylvania state university, transferred to Purdue in 2019
                    </p>
                </VerticalTimelineElement>
                </VerticalTimeline>
        </div>
    )
}

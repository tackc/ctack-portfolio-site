import React, {Component} from 'react';
import './Project.css'

class Project extends Component {

    render() {
        return (
            <div className="ProjectPane flex-container">
                <div className="ProjectScreenshot flex-item"></div>
                <h3 className="ProjectTitle flex-item">Project Title</h3>
                <p className="ProjectDescription flex-item">Project description goes here...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent finibus cursus nisi, et facilisis felis consectetur in. Ut auctor dapibus ligula, vitae semper lacus gravida ac. Vestibulum finibus sed leo id sodales. Sed vel mauris at ligula molestie mollis. Nulla ac scelerisque lorem. Phasellus laoreet, risus vitae sollicitudin rhoncus, diam augue egestas nisi, quis dignissim sapien ligula a lacus. Fusce eget erat commodo, egestas tortor eu, suscipit sapien. Cras id nunc sit amet sem vehicula tempor eget sed nulla. Phasellus congue sed lectus at tincidunt. Aliquam vitae quam nisl. Praesent eu tortor malesuada, pretium metus eu, finibus turpis. Vestibulum placerat velit vitae lorem aliquet, in efficitur ex sollicitudin.</p>
                <ul className="ProjectTechnologiesUsed flex-item">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Javascript</li>
                    <li>ReactJS</li>
                </ul>
            </div>
        )
    }
}

export default Project;
import React, { FC } from "react";
import IProject from "../../../interface/IProject";
import './index.css';

const Project: FC<IProject> = (props) => {
    
    return(
        props.id === 0 ? 
        <div className="project-card-container-hidden">Hello</div>
        :
        <div className="project-card-container">
            <div className="project-card-image"><img className="project-image" src={props.image} alt="Bad image request" /></div>
            <div className="project-card-content">
                <div className="project-title">{props.title}</div>
                <div className="project-links">
                    <div className="project-link github-icon">
                        <a href={props.github} target="_blank">
                            <i className="fa fa-solid fa-github"></i>
                        </a>
                    </div>
                    <div className="project-link">
                        <a href={props.live} target="_blank">
                            <i className="fa fa-solid fa-laptop"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project
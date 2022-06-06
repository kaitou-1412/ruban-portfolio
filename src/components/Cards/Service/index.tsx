import React, { FC } from "react";
import IService from "../../../interface/IService";
import './index.css';

const Service: FC<IService> = (props) => {
    return(
        <div className="service-card-container">
            <div className="service-card-logo"><i className={"fa fa-solid fa-"+props.logo}></i></div>
            <div className="service-card-title">{props.title}</div>
            <div className="service-card-description">{props.description}</div>
        </div>
    )
}

export default Service
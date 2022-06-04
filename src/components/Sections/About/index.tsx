import React, {useState, useEffect} from "react";
import './index.css';

import funPic from '../../../media/fun-ruban.jpg';

const About = () => {

    const [isSkillsSelected, setIsSkillsSelected] = useState<boolean>(true);
    const clickSkills = () => setIsSkillsSelected(true);
    const clickEducation = () => setIsSkillsSelected(false);

    return(
        <div className="about-main-container">
            <div className="fun-picture-container">
                <img className="fun-picture" src={String(funPic)} alt="Bad Image Request" />
            </div>
            <div className="about-container">
                <div className="about-title">About Me</div>
                <div className="about-content">
                    I am currently interning at HashedIn By Deloitte. 
                    I like to explore various technologies and build 
                    innovative products that provides value to people.
                </div>
                <div className="about-tabs">
                    <div className={"about-tab " + (isSkillsSelected ? "color-tab" : "")} onClick={clickSkills}>
                        Skills
                    </div>
                    <div className={"about-tab about-tab-2 " + (isSkillsSelected ? "" : "color-tab")} onClick={clickEducation}>
                        Education
                    </div>
                </div>
                {
                    isSkillsSelected ? 
                    <div className="about-content">
                        <div className="about-content-title">Front-end related</div>
                        <div className="about-content-desc">HTML | CSS | Javascript | Typescript | React | Angular | Bootstrap | Material UI</div>
                        <div className="about-content-title">Back-end related</div>
                        <div className="about-content-desc">Spring Boot | Django | Node | Express | SQL | PostgreSQL | MongoDB</div>
                        <div className="about-content-title">General</div>
                        <div className="about-content-desc">C | C++ | Java | Python</div>
                        <div className="about-content-title">Some Experience with</div>
                        <div className="about-content-desc">GraphQL | AWS | GCP</div>
                    </div> : 
                    <div className="about-content">
                        <div className="about-content-title">Web Development - various</div>
                        <div className="about-content-desc">MOOCS | Documentations | Blogs | Youtube videos</div>
                        <div className="about-content-title">Data Science - various</div>
                        <div className="about-content-desc">MOOCS | Documentations | Blogs | Youtube videos</div>
                        <div className="about-content-title">Computer Science & Engineering - Bachelor (B.Tech)</div>
                        <div className="about-content-desc about-content-desc-line-break">
                            Manipal University, Jaipur, Rajasthan: 2018-22
                        </div>
                        <div className="about-content-desc about-content-desc-line-break">Relevant Coursework:</div>
                        <div className="about-content-desc about-content-desc-line-break">
                            Data Structures | Algorithms | Object Oriented Programming
                             | Operating Systems | Database Management Systems | Engineering Mathematics
                        </div>
                    </div>
                }
                
            </div>
        </div>
    )
}

export default About
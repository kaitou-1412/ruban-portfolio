import React, {useState, useEffect} from "react";
import TextTransition, { presets } from "react-text-transition";
import './index.css';

import profilePic from '../../../media/shadow-ruban.jpg';

const TEXTS = [
    "Software Engineer",
    "Full Stack Developer",
    "Eager to Learn",
];
  

const Home = () => {
    const [messageId, setMessageId] = useState<number>(0)

    useEffect(() => {
        const intervalId = setInterval(() =>
            setMessageId(messageId => messageId + 1),
            3000
        );
        return () => clearTimeout(intervalId);
    }, []);

    return(
        <div className="home-container">
            <div className="introduction-container">
                <div className="greeting">Welcome to my world</div>
                <div className="my-name">Hi, I'm Ruban</div>
                <div className="my-message">
                    <TextTransition
                        text={ TEXTS[messageId % TEXTS.length] }
                        springConfig={ presets.wobbly }
                    />
                </div>
                <div className="location">based in India.</div>
            </div>
            <div className="profile-picture-container">
                <img className="profile-picture pic-shadow-dreamy" src={String(profilePic)} alt="Bad Image Request" />
            </div>
        </div>
    )
}

export default Home
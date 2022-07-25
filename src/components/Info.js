import React from 'react';
import gitLogo from '../img/git_1.png';
import linkedLogo from '../img/linkedin_1.png';
import avatar from '../img/avatar_1.jpg';
import CV from '../fls/web_dev_cv.pdf';

function Info() {

    return (
        <>
        <div className="infoDiv">
        <h1 id="contact">Contact</h1>
        <div className="cards">
            <div className="card">
            <a href="https://github.com/DanOlmedo" >
            <img className="cardImg" src={gitLogo} alt="GitHub logo"></img>
                <div className="card-body">
                    <p className="card-text">GitHub: DanOlmedo</p>
                </div>
                </a>
            </div>
            <div className="card">
            <a href="https://www.linkedin.com/in/daniel-olmedo-91b26a153/" >
            <img className="cardImg" src={linkedLogo} alt="LinkedIn logo"></img>
                <div className="card-body">
                    <p className="card-text">LinkedIn</p>
                </div>
                </a>
            </div>
            <div className="card">
            <a href={CV} >
            <img className="cardImg" src={avatar} alt="Avatar"></img>
                <div className="card-body">
                    <p className="card-text">CV</p>
                </div>
                </a>
            </div>
            </div>
            </div>
        </>
    )
};

export default Info;
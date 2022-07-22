import React from 'react';
import gitLogo from '../img/git_1.png';
import linkedLogo from '../img/linkedin_1.png';
import avatar from '../img/avatar_1.jpg';
import CV from '../fls/web_dev_cv.pdf';

function Info() {

    return (
        <>
        <div class="infoDiv">
        <h1 id="contact">Contact</h1>
        <div class="cards">
            <div class="card">
            <a href="https://github.com/DanOlmedo" >
            <img class="cardImg" src={gitLogo} alt="GitHub logo"></img>
                <div class="card-body">
                    <p class="card-text">GitHub: DanOlmedo</p>
                </div>
                </a>
            </div>
            <div class="card">
            <a href="https://www.linkedin.com/in/daniel-olmedo-91b26a153/" >
            <img class="cardImg" src={linkedLogo} alt="LinkedIn logo"></img>
                <div class="card-body">
                    <p class="card-text">LinkedIn</p>
                </div>
                </a>
            </div>
            <div class="card">
            <a href={CV} >
            <img class="cardImg" src={avatar} alt="Avatar"></img>
                <div class="card-body">
                    <p class="card-text">CV</p>
                </div>
                </a>
            </div>
            </div>
            </div>
        </>
    )
};

export default Info;
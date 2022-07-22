import React from 'react';
import gitLogo from '../img/git_1.png';
import linkedLogo from '../img/linkedin_1.png';
import avatar from '../img/avatar_1.jpg';

function Info() {

    return (
        <>
        <div class="infoDiv">
        <h1>Contact</h1>
        <div class="cards">
            <div class="card">
            <img class="cardImg" src={gitLogo} alt="GitHub logo"></img>
                <div class="card-body">
                    <p class="card-text">GitHub: DanOlmedo</p>
                </div>
            </div>
            <div class="card">
            <img class="cardImg" src={linkedLogo} alt="LinkedIn logo"></img>
                <div class="card-body">
                    <p class="card-text">LinkedIn</p>
                </div>
            </div>
            <div class="card">
            <img class="cardImg" src={avatar} alt="Avatar"></img>
                <div class="card-body">
                    <p class="card-text">CV</p>
                </div>
            </div>
            </div>
            </div>
        </>
    )
};

export default Info;
import React from 'react';
import Cash from '../img/Cash_boomerang.PNG';
import Nifty from '../img/Nifty_1.PNG';
import Scheduler from '../img/day_scheduler_1.PNG';
import Gallery from '../img/Gallery.PNG';
import Generator from '../img/Generator.PNG';
import Keeper from '../img/Keeper.PNG';

function Projects () {
    return (
        <>
        <div className="carouselDiv">
        <div className="car" id="car">
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
  <div className="carInner">
    <div className="carousel-item active">
    <a href="https://github.com/KuiiMaldonado/BCash"> <img className="carImage" src={Cash} alt="Cash boomerang app" /></a> 
    <a className="repoLink" href="https://github.com/KuiiMaldonado/BCash">Repository</a>
    </div>
    <div className="carousel-item">
     <a href="https://danolmedo.github.io/Nifty-weather-responsive-outfit-generator-/"> <img className="carImage" src={Nifty} alt="Nifty outfit creator app" /> </a>
     <a className="repoLink" href="https://github.com/aeklf/BootcampProject01">Repository</a>
    </div>
    <div className="carousel-item">
     <a href="https://danolmedo.github.io/day_planner_homework/"> <img className="carImage" src={Scheduler} alt="Day scheduler app" /></a>
     <a className="repoLink" href="https://github.com/DanOlmedo/day_planner_homework">Repository</a>
    </div>
    <div className="carousel-item">
     <a href="https://danolmedo.github.io/Personal_Portfolio/"> <img className="carImage" src={Gallery} alt="Personal portfolio" /></a>
     <a className="repoLink" href="https://github.com/DanOlmedo/Personal_Portfolio">Repository</a>
    </div>
    <div className="carousel-item">
     <a href="https://github.com/DanOlmedo/README_generator"> <img className="carImage" src={Generator} alt="Readme generator" /></a>
    <a className="repoLink" href="https://github.com/DanOlmedo/README_generator">Repository</a>
    </div>
    <div className="carousel-item">
     <a href="https://danolmedo.github.io/Score_keeeper/"> <img className="carImage" src={Keeper} alt="Score keeper" /></a>
     <a className="repoLink" href="https://github.com/DanOlmedo/Score_keeeper">Repository</a>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
</div>
</div>
        </>
    )
};

export default Projects;
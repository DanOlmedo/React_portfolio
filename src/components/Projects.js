import React from 'react';
import Cash from '../img/Cash_boomerang.PNG';
import Nifty from '../img/Nifty_1.PNG';
import Scheduler from '../img/day_scheduler_1.PNG';

function Projects () {
    return (
        <>
        <div class="carouselDiv">
        <div class="car" id="car">
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carInner">
    <div class="carousel-item active">
    <a href="https://github.com/KuiiMaldonado/BCash"> <img class="carImage" src={Cash} alt="Cash boomerang app" /></a> 
    </div>
    <div class="carousel-item">
     <a href="https://danolmedo.github.io/Nifty-weather-responsive-outfit-generator-/"> <img class="carImage" src={Nifty} alt="Nifty outfit creator app" /> </a>
    </div>
    <div class="carousel-item">
     <a href="https://danolmedo.github.io/day_planner_homework/"> <img class="carImage" src={Scheduler} alt="Day scheduler app" /></a>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
</div>
</div>
        </>
    )
};

export default Projects;
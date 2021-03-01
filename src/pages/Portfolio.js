import React from 'react';

function Portfolio(){
    return  (
        <>
        <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <h2>My Portfolio</h2>
            <p className="paddingBottom45">Here you can find projects I've done by myself and with others. Using programming lanugages like MYSQL, JS, CSS NODE, SEQEULIZE, EXPRESS. Feel free to browse around.</p>
          </div>
        </div>
        <ul className="row">
          <li className="col-xs-6 col-md-3 project-tiles-items">
            <div className="portfolioInner">
              <a href="https://git.heroku.com/pantry-group5.git"><img alt="Image Alt 1" className="img-responsive img-fluid " src="assets/pantry2.png" data-echo="assets/pantry2.png"/></a>
              <div className="textOverlay">
                <span>the Pantry</span>
              </div>
            </div>
          </li>
          <li className="col-xs-6 col-md-3 project-tiles-items">
            <div className="portfolioInner">
              <a href="https://group-6-project-1.github.io/Dinner-and-a-show/"><img alt="project 1" className="img-responsive img-fluid" src="assets/foodproj.jpg" data-echo="assets/foodproj.jpg"/></a>
              <div className="textOverlay">
                <span>Dinner & a Show</span>
              </div>
            </div>
            </li>
    
          <li className="col-xs-6 col-md-3 project-tiles-items">
            <div className="portfolioInner">
              <a href="https://timih124.github.io/coding-quiz/"><img alt="Quiz Project" className="img-responsive img-fluid" src="assets/quiz.jpg" data-echo="assets/quiz.jpg"/></a>
              <div className="textOverlay">
                <span>Quiz Project</span>
              </div>
            </div>
            </li>  
        </ul>
        </div>
          </>
    )
};

export default Portfolio
// import React, { Component } from 'react';
import "./HomeComponent.css";

import React from "react";

export const QuizComponent = (props) => {
  return (
    <div>
      <div className="container">
        <div className="quiz-content">
          <h1 className="texts"> Question </h1>
          <p className="texts">Which is the only mammal that can't jump ?</p>
          <div className="options">
            <button className="btncls">Dog</button>
            <button className="btncls">Goat</button>
            <button className="btncls">Elephant</button>
            <button className="btncls">Lion</button>
          </div>
          <div className="button-items">
            <button id="prev">Previous</button>
            <button
              id="next"
              onClick={() => {
                props.showResult(true);
                props.showQuiz(false);
              }}
            >
              Next
            </button>
            <button id="quit">Quit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

// class QuizComponent extends Component {
//     render() {
//         return (
//             <React.Fragment>
//             <div className='container'>
//                 <div className='quiz-content'>
//                     <h1 className='texts'> Question </h1>
//                     <p className='texts'>Which is the only mammal that can't jump ?</p>
//                     <div className='options'>
//                     <button className='btncls'>Dog</button>
//                     <button className='btncls'>Goat</button>
//                     <button className='btncls'>Elephant</button>
//                     <button className='btncls'>Lion</button>
//                     </div>
//                     <div className='button-items'>
//                         <button id='prev'>Previous</button>
//                         <button id='next'>Next</button>
//                         <button id='quit'>Quit</button>
//                     </div>

//                 </div>

//             </div>
//             </React.Fragment>
//         );
//     }
// }

export default QuizComponent;

// import React, { Component } from 'react';
// import './HomeComponent.css'
// import QuizComponent from './QuizComponent';

// class HomeComponent extends Component {
//     constructor(props){
//         super(props);
//         this.showQuiz
//     }
//     render() {
//         return (
//             <>
//             <div id='quiz-main'>
//                 <h1>Quiz App</h1>
//                 <button id='play-button' onClick={}>Play</button>

//             </div>
//             </>
//         );
//     }
// }

// export default HomeComponent;

import React from "react";

const HomeComponent = (props) => {
  return (
    <div>
      <div id="quiz-main">
        <h1>Quiz App</h1>
        <button id="play-button" onClick={() => props.showQuiz(true)}>
          Play
        </button>
      </div>
    </div>
  );
};

export default HomeComponent;

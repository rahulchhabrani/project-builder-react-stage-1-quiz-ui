import { useState } from "react";
import "./App.css";
import HomeComponent from "./component/HomeComponent";
import QuizComponent from "./component/QuizComponent";
import ResultComponent from "./component/ResultComponent";

function App() {
  const [showQuiz, setshowQuiz] = useState(false);
  const [showResult, setshowResult] = useState(false);
  return (
    <div className="App">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      {!showQuiz && <HomeComponent showQuiz={setshowQuiz} />}
      {showQuiz && (
        <QuizComponent showResult={setshowResult} showQuiz={setshowQuiz} />
      )}
      {showResult && <ResultComponent />}
    </div>
  );
}

export default App;

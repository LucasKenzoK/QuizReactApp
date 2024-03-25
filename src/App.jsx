import "./App.css";
import Question from "./components/Question";
import Welcome from "./components/Welcome";

import { useContext, useEffect } from "react";
import GameOver from "./components/GameOver";
import PickCategory from "./components/PickCategory";
import { QuizContext } from "./context/quiz";

function App() {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div className="App">
      <h1>Quiz de Programação</h1>
      {quizState.gameStage === "Start" && <Welcome />}
      {quizState.gameStage === "Category" && <PickCategory />}
      {quizState.gameStage === "Playing" && <Question />}
      {quizState.gameStage === "End" && <GameOver />}
    </div>
  );
}

export default App;

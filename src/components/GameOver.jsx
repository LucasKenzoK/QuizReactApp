import React from "react";
import WellDone from "../img/welldone.svg";
import "./GameOver.css";

import { useContext } from "react";
import { QuizContext } from "../context/quiz";

const GameOver = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div id="gameover">
      <h2>Fim de Jogo</h2>
      <p>Pontuação: {quizState.score}</p>
      <p>
        Você acertou {quizState.score} de {quizState.questions.length} perguntos
      </p>
      <img src={WellDone} alt="fim do quiz" />
      <button onClick={() => dispatch({type: "NEW_GAME"})}>Reiniciar</button>
    </div>
  );
};

export default GameOver;

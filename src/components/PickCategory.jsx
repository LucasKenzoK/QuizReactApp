import { useContext } from "react";
import { QuizContext } from "../context/quiz";

import Category from "../img/category.svg";

import "./PickCategory.css";

const PickCategory = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  const choseCategoryAndReorderQuestions = (category) => {
    dispatch({ type: "START_GAME", payload: category });
    dispatch({ type: "REORDER_QUESTIONS" });
  };

  return (
    <div id="category">
      <h2>Escolha uma Categoria</h2>
      <p>As escolhas serão referentes a uma das linguagens abaixo: </p>
      <div>
        {quizState.questions.map((question) => (
          <button
            onClick={() => choseCategoryAndReorderQuestions(question.category)}
            key={question.category}
          >
            {question.category}
          </button>
        ))}
      </div>
      <img src={Category} alt="categorias" />
    </div>
  );
};

export default PickCategory;

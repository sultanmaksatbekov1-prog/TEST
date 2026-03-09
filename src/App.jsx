import React from "react";
import Quiz from "./components/Quiz";

function App() {
  const questionData = {
    question: "Столица Кыргызстана?",
    answers: ["Ош", "Бишкек", "Нарын", "Талас"],
    correctAnswer: "Бишкек",
  };

  return (
    <div>
      <h1>Викторина</h1>

      <Quiz
        question={questionData.question}
        answers={questionData.answers}
        correctAnswer={questionData.correctAnswer}
      />
    </div>
  );
}

export default App;

import React, { useState } from "react";
import styles from "./Quiz.module.css";

function Quiz({ question, answers, correctAnswer }) {
  const [result, setResult] = useState("");

  const checkAnswer = (answer) => {
    if (answer === correctAnswer) {
      setResult("ПРАВИЛЬНО!");
    } else {
      setResult("Неправильно");
    }
  };

  return (
    <div>
      <h2>{question}</h2>

      {answers.map((answer, index) => (
        <button key={index} onClick={() => checkAnswer(answer)}>
          {answer}
        </button>
      ))}

      <p>{result}</p>
    </div>
  );
}

export default Quiz;

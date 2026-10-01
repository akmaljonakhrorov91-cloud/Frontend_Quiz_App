import { useState } from "react";
// components
import Result from "./Result";

function Test({ questions: { title, color, icon, questions } }) {
  console.log(questions);
  const [answeredQuestions, setAnsweredQuestions] = useState(1);
  const [correctAnswerCount, setCorrectAnswerCount] = useState(0);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [answerStatus, setAnswerStatus] = useState(null);
  const [statusDisabled, setStatusDisabled] = useState(false);
  const [showNextButton, setShowNextButton] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    const correctAnswer = questions[questionIndex].answer;
    if (selectedAnswer == null) {
      alert("Please, select an answer");
    } else {
      if (selectedAnswer == correctAnswer) {
        setAnswerStatus("correct");
        setCorrectAnswerCount(correctAnswerCount + 1);
      } else {
        setAnswerStatus("incorrect");
      }
    }
    setStatusDisabled(true);
    setShowNextButton(true);
  };
  const nextQuestion = () => {
    setQuestionIndex(questionIndex + 1);
    setAnsweredQuestions(answeredQuestions + 1);
    setSelectedAnswer(null);
    setShowNextButton(false);
    setAnswerStatus(null);
    setStatusDisabled(false);
  };
  // result
  if (questionIndex === questions.length) {
    return (
      <Result
        title={title}
        color={color}
        icon={icon}
        correctAnswerCount={correctAnswerCount}
        questions={questions}
      />
    );
  }
  return (
    <div>
      <div className="test-container">
        <div className="test-content">
          <p className="test-description">
            {answeredQuestions} out of {questions.length} questions
          </p>
          <h2 className="test-title">{questions[questionIndex].question}</h2>
          <div className="test-proccess-container">
            <div
              className="test-proccess"
              style={{
                width: (answeredQuestions / questions.length) * 100 + "%",
              }}
            ></div>
          </div>
        </div>
        <div className="test-question">
          <form onSubmit={handleSubmit}>
            <ul className="test-list">
              {questions[questionIndex].options.map((option, index) => {
                const alphabet = String.fromCharCode(65 + index);
                let className = "";

                if (answerStatus == "correct" && option == selectedAnswer) {
                  className = "correct";
                } else if (answerStatus == "incorrect") {
                  if (option == selectedAnswer) {
                    className = "incorrect";
                  }
                  if (option == questions[questionIndex].answer) {
                    className = "correct";
                  }
                }
                return (
                  <li key={option}>
                    <label className={`test-label ${className}`}>
                      <span className="test-letter">{alphabet}</span>
                      <input
                        type="radio"
                        name="option"
                        onChange={() => setSelectedAnswer(option)}
                        disabled={statusDisabled}
                      />
                      <span className="test-text">{option}</span>
                      {/* icons */}
                      <img
                        className="test-icon-correct"
                        src="../assets/icon-correct.svg"
                        alt="icon"
                        width={40}
                        height={40}
                      />
                      <img
                        className="test-icon-incorrect"
                        src="../assets/icon-incorrect.svg"
                        alt="icon"
                        width={40}
                        height={40}
                      />
                    </label>
                  </li>
                );
              })}
            </ul>
            {!showNextButton && (
              <button className="btn test-btn">submit answer</button>
            )}
            {showNextButton && (
              <button
                type="button"
                className="btn test-btn"
                onClick={() => nextQuestion()}
              >
                {questions.length == answeredQuestions
                  ? "Finish"
                  : "next question"}
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Test;

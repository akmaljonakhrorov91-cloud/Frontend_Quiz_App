import { useState } from "react";

function Test({ questions: { title, color, icon, questions } }) {
  const [answeredQuestions, setAnsweredQuestions] = useState(1);
  const [correctAnswerCount, setCorrectAnswerCount] = useState(0);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [answerStatus, setAnswerStatus] = useState(null);
  const [statusDisabled, setStatusDisabled] = useState(false);
  const [showNextButton, setShowNextButton] = useState(false);
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
        <div className="test-question">2</div>
      </div>
    </div>
  );
}

export default Test;

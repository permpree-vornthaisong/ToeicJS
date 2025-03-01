// src/components/ChoiceComponent.jsx
import React, { useState } from "react";
import "../styles/ChoiceComponent.css"; // Ensure you have the corresponding CSS file

const quiz = {
  user: "Dave",
  questions: [
    {
      text: "Texts that are enclosed on a <title> tag are all displayed in which part of the browser?",
      responses: [
        { text: "Tab" },
        { text: "Title Bar", correct: true },
        { text: "Menu Bar" },
        { text: "Tool Bar" },
      ],
    },
    {
      text: "Tags that can stand alone are called…",
      responses: [
        { text: "Empty Tag", correct: true },
        { text: "Markup Tag" },
        { text: "Container Tag" },
        { text: "Standalone Tag" },
      ],
    },
    {
      text: "Which tag is used to create body text in HTML?",
      responses: [
        { text: "HEAD" },
        { text: "BODY", correct: true },
        { text: "TITLE" },
        { text: "TEXT" },
      ],
    },
    {
      text: "Outlook Express is _________",
      responses: [
        { text: "E-Mail Client", correct: true },
        { text: "Browser" },
        { text: "Search Engine" },
        { text: "None of the above" },
      ],
    },
  ],
};

const ChoiceComponent = () => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [userResponses, setUserResponses] = useState(
    new Array(quiz.questions.length).fill(null)
  );

  const handleSelectOption = (index) => {
    const updatedResponses = [...userResponses];
    updatedResponses[questionIndex] = index;
    setUserResponses(updatedResponses);
  };

  const handleNext = () => {
    if (questionIndex < quiz.questions.length - 1) {
      setQuestionIndex(questionIndex + 1);
    }
  };

  const handlePrev = () => {
    if (questionIndex > 0) {
      setQuestionIndex(questionIndex - 1);
    }
  };

  const restartQuiz = () => {
    setQuestionIndex(0);
    setUserResponses(new Array(quiz.questions.length).fill(null));
  };

  const calculateScore = () => {
    return userResponses.reduce((score, response, index) => {
      if (
        response !== null &&
        quiz.questions[index].responses[response].correct
      ) {
        return score + 1;
      }
      return score;
    }, 0);
  };

  return (
    <section className="container">
      <div className="questionBox">
        {questionIndex < quiz.questions.length ? (
          <div className="questionContainer">
            <header>
              <h1 className="title is-6">React Quiz</h1>
              <div className="progressContainer">
                <progress
                  className="progress is-info is-small"
                  value={(questionIndex / quiz.questions.length) * 100}
                  max="100"
                ></progress>
                <p>{((questionIndex / quiz.questions.length) * 100).toFixed(0)}% complete</p>
              </div>
            </header>

            <h2 className="titleContainer title">
              Q. {quiz.questions[questionIndex].text}
            </h2>

            <div className="optionContainer">
              {quiz.questions[questionIndex].responses.map((response, index) => (
                <div
                  key={index}
                  className={`option ${
                    userResponses[questionIndex] === index ? "is-selected" : ""
                  }`}
                  onClick={() => handleSelectOption(index)}
                >
                  {String.fromCharCode(97 + index)}. {response.text}
                </div>
              ))}
            </div>

            <footer className="questionFooter">
              <nav className="pagination">
                <button
                  className="button"
                  onClick={handlePrev}
                  disabled={questionIndex === 0}
                >
                  Back
                </button>
                <button
                  className={`button ${
                    userResponses[questionIndex] !== null ? "is-active" : ""
                  }`}
                  onClick={handleNext}
                  disabled={questionIndex >= quiz.questions.length}
                >
                  {userResponses[questionIndex] !== null ? "Next" : "Skip"}
                </button>
              </nav>
            </footer>
          </div>
        ) : (
          <div className="quizCompleted has-text-centered">
            <span className="icon">
              <i
                className={`fa ${
                  calculateScore() > 3 ? "fa-check-circle-o is-active" : "fa-times-circle"
                }`}
              ></i>
            </span>
            <h2 className="title">
              You did{" "}
              {calculateScore() > 7
                ? "an amazing"
                : calculateScore() < 4
                ? "a poor"
                : "a good"}{" "}
              job!
            </h2>
            <p className="subtitle">
              Total score: {calculateScore()} / {quiz.questions.length}
            </p>
            <br />
            <button className="button" onClick={restartQuiz}>
              Restart <i className="fa fa-refresh"></i>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ChoiceComponent;

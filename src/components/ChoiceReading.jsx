import React, { useState, useEffect } from "react";
import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL1;

const ChoiceReading = () => {
  const [questions, setQuestions] = useState([]);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [score, setScore] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get(`${apiUrl}/getAllReading`); // แก้ตรงนี้
        if (response.data.length > 0) {
          setQuestions(response.data);
        }
      } catch (error) {
        console.error("Error fetching questions:", error);
      }
    };

    fetchQuestions();
  }, []);

  const handleAnswerChange = (questionId, value) => {
    setSelectedAnswers((prev) => ({ ...prev, [questionId]: value }));
  };

  const handleSubmit = () => {
    let correctCount = 0;
    questions.forEach((question) => {
      if (selectedAnswers[question.id] === question.Ans) {
        correctCount++;
      }
    });

    setScore(correctCount);
    setIsSubmitted(true);
  };

  if (questions.length === 0) return <p>Loading...</p>;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold text-white mb-4">แบบทดสอบ</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {questions.map((question, index) => (
          <div
            key={question.id}
            className="p-4 bg-white shadow-md rounded-lg flex flex-col"
          >
            <p className="text-lg font-semibold">
              {index + 1}. {question.Question1}
            </p>

            {["choice1", "choice2", "choice3", "choice4"].map((key) => (
              <label
                key={key}
                className="flex items-center px-4 py-2 rounded-lg bg-green-300 my-1"
              >
                <input
                  type="radio"
                  name={question.id}
                  value={question[key]}
                  checked={selectedAnswers[question.id] === question[key]}
                  onChange={(e) =>
                    handleAnswerChange(question.id, e.target.value)
                  }
                  className="w-5 h-5 text-blue-600 bg-gray-100 border-black-300"
                  disabled={isSubmitted}
                />
                <span className="ml-2 text-lg font-medium text-gray-900">
                  {question[key]}
                </span>
              </label>
            ))}
          </div>
        ))}
      </div>

      {!isSubmitted && (
        <button
          onClick={handleSubmit}
          className="px-6 py-2 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-lg transition duration-300 mt-5"
          disabled={Object.keys(selectedAnswers).length !== questions.length}
        >
          Submit
        </button>
      )}

      {isSubmitted && (
        <p className="text-xl font-bold mt-3 text-white">
          คะแนนของคุณ: {score} / {questions.length}
        </p>
      )}
    </div>
  );
};

export default ChoiceReading;

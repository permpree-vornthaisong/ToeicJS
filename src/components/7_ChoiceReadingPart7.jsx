// src/components/ChoiceReadingPart6.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL1;

const ChoiceReadingPart7 = () => {
  const [questionGroups, setQuestionGroups] = useState([]);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(null);
  const [correctCount, setCorrectCount] = useState(0);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get(`${apiUrl}/getAllReadingPart7`);
        if (response.data.length > 0) {
          console.log("📥 ข้อมูลจาก API:", response.data);
          setQuestionGroups(response.data);
        }
      } catch (error) {
        console.error("❌ Error fetching questions:", error);
      }
    };

    fetchQuestions();
  }, []);

  const handleAnswerChange = (questionId, value) => {
    setSelectedAnswers((prev) => ({ ...prev, [questionId]: value }));
  };

  const handleSubmit = () => {
    let count = 0;
    let totalQuestions = 0;

    questionGroups.forEach((group) => {
      group.questions.forEach((question) => {
        totalQuestions++;
        const questionId = question.QuestionNumber;
        const selectedAnswer = selectedAnswers[questionId];
        const correctAnswer = question.Answer;

        if (selectedAnswer === correctAnswer) {
          count++;
        }
      });
    });

    if (!isAllAnswered(totalQuestions)) {
      alert("⚠️ กรุณาตอบทุกคำถามก่อนส่งแบบทดสอบ!");
      return;
    }

    const calculatedScore = Math.round((count / totalQuestions) * 100);
    setScore(calculatedScore);
    setCorrectCount(count);
    setIsSubmitted(true);
  };

  const isAllAnswered = (totalQuestions) => {
    return Object.keys(selectedAnswers).length === totalQuestions;
  };

  if (questionGroups.length === 0)
    return <p className="text-white">Loading...</p>;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold text-black mb-4">
        แบบทดสอบ (Reading Part 7)
      </h2>

      {questionGroups.map((group) => (
        <div key={group.id} className="mb-8">
          <h3 className="text-xl font-semibold text-gray-800">
            คำถามช่วง {group.question_range}
          </h3>

          {/* แสดงรูปภาพที่เกี่ยวข้อง */}
          <div className="flex flex-wrap gap-2 my-2">
            {group.UrlImageWaitFromBackEnd.map((imageUrl, index) => (
              <img
                key={index}
                src={imageUrl}
                alt={`Question Image ${index + 1}`}
                className="w-full md:w-1/3 lg:w-1/4 rounded shadow-md"
              />
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {group.questions.map((question) => {
              const questionId = question.QuestionNumber;
              const correctAnswer = question.Answer;
              const userAnswer = selectedAnswers[questionId];
              const isCorrect = isSubmitted && userAnswer === correctAnswer;

              return (
                <div
                  key={questionId}
                  className="p-4 bg-white shadow-md rounded-lg flex flex-col"
                >
                  {/* 🔥 แสดงหมายเลขและข้อความคำถาม */}
                  <p className="pb-3 text-lg font-semibold text-black">
                    {questionId}. {question.QuestionText}
                  </p>

                  {["A", "B", "C", "D"].map((letter) => {
                    const choiceKey = `choice${letter}`;
                    const choiceText = question[choiceKey] || "❌ ไม่มีข้อมูล";

                    const isUserSelected = userAnswer === letter;
                    const isAnswerCorrect = letter === correctAnswer;

                    return (
                      <label
                        key={letter}
                        className={`flex items-center px-4 py-2 rounded-lg my-1 cursor-pointer ${
                          isSubmitted
                            ? isAnswerCorrect
                              ? "bg-green-300"
                              : isUserSelected
                              ? "bg-red-300"
                              : "bg-gray-200"
                            : "bg-gray-200"
                        }`}
                      >
                        <input
                          type="radio"
                          name={questionId}
                          value={letter}
                          checked={isUserSelected}
                          onChange={(e) =>
                            handleAnswerChange(questionId, e.target.value)
                          }
                          className="w-5 h-5 text-blue-600 bg-gray-100 border-black-300"
                          disabled={isSubmitted}
                          required
                        />
                        <span className="ml-2 text-lg font-medium text-gray-900">
                          {choiceText}
                        </span>
                      </label>
                    );
                  })}

                  {isSubmitted && (
                    <p className="mt-2 text-lg font-bold text-gray-900">
                      ✅ คำตอบที่ถูกต้องคือ{" "}
                      <strong className="text-green-600">
                        {correctAnswer}
                      </strong>
                      {userAnswer && userAnswer !== correctAnswer && (
                        <>
                          {" "}
                          (คุณเลือก{" "}
                          <strong className="text-red-600">{userAnswer}</strong>
                          )
                        </>
                      )}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      ))}

      {!isSubmitted && (
        <button
          onClick={handleSubmit}
          className="px-6 py-2 bg-blue-500 hover:bg-blue-700 text-black font-bold rounded-lg transition duration-300 mt-5"
        >
          Submit
        </button>
      )}

      {isSubmitted && (
        <p className="text-xl font-bold mt-6 text-black">
          คะแนนของคุณ: {score}% ({correctCount}/
          {questionGroups.reduce(
            (sum, group) => sum + group.questions.length,
            0
          )}
          )
          {score >= 80 ? (
            <span className="text-green-600"> 👍 ยอดเยี่ยม!</span>
          ) : score >= 60 ? (
            <span className="text-blue-600"> 😊 ดีมาก!</span>
          ) : (
            <span className="text-red-600"> 😟 ลองใหม่อีกครั้ง!</span>
          )}
        </p>
      )}
    </div>
  );
};

export default ChoiceReadingPart7;

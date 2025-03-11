// src/components/ChoiceReadingPart5.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL1;

const ChoiceReadingPart5 = () => {
  const [questions, setQuestions] = useState([]);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(null);
  const [correctCount, setCorrectCount] = useState(0); // เพิ่ม state สำหรับ correctCount

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get(`${apiUrl}/getAllReadingPart5`);
        if (response.data.length > 0) {
          console.log("📥 ข้อมูลจาก API:", response.data);
          setQuestions(response.data);
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

    questions.forEach((question) => {
      const questionId = question.id;
      const selectedAnswer = selectedAnswers[questionId];
      const correctAnswer = question.Ans.replace(/\(|\)/g, "");

      if (selectedAnswer === correctAnswer) {
        count++;
      }
    });

    if (!isAllAnswered()) {
      alert("⚠️ กรุณาตอบทุกคำถามก่อนส่งแบบทดสอบ!");
      return;
    }

    const calculatedScore = Math.round((count / questions.length) * 100);
    setScore(calculatedScore);
    setCorrectCount(count); // อัปเดต state ของ correctCount
    setIsSubmitted(true);
  };

  const isAllAnswered = () => {
    return Object.keys(selectedAnswers).length === questions.length;
  };

  if (questions.length === 0) return <p className="text-white">Loading...</p>;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold text-black mb-4">
        แบบทดสอบ (Reading Part 5)
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {questions.map((question) => {
          const questionId = question.id;
          const correctAnswer = question.Ans.replace(/\(|\)/g, "");
          const userAnswer = selectedAnswers[questionId];
          const isCorrect = isSubmitted && userAnswer === correctAnswer;

          return (
            <div
              key={questionId}
              className="p-4 bg-white shadow-md rounded-lg flex flex-col"
            >
              <p className="pb-3 text-lg font-semibold">{question.Question1}</p>

              {["1", "2", "3", "4"].map((num, index) => {
                const choiceKey = `choice${num}`;
                const choiceText = question[choiceKey] || "❌ ไม่มีข้อมูล";

                const isUserSelected =
                  userAnswer === String.fromCharCode(65 + index);
                const isAnswerCorrect =
                  String.fromCharCode(65 + index) === correctAnswer;

                return (
                  <label
                    key={num}
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
                      value={String.fromCharCode(65 + index)}
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
                  <strong className="text-green-600">{correctAnswer}</strong>
                  {userAnswer && userAnswer !== correctAnswer && (
                    <>
                      {" "}
                      (คุณเลือก{" "}
                      <strong className="text-red-600">{userAnswer}</strong>)
                    </>
                  )}
                </p>
              )}
            </div>
          );
        })}
      </div>

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
          คะแนนของคุณ: {score}% ({correctCount}/{questions.length})
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

export default ChoiceReadingPart5;
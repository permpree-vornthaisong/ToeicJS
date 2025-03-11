import React, { useState, useEffect } from "react";
import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL1;

const ChoiceConver = () => {
  const [groups, setGroups] = useState([]);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [score, setScore] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchQuestions = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${apiUrl}/getAllListeningConvers`);
        if (response.data && response.data.length > 0) {
          setGroups(response.data);
        }
      } catch (error) {
        console.error("Error fetching questions:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchQuestions();
  }, []);

  const handleAnswerChange = (questionId, value) => {
    setSelectedAnswers((prev) => ({ ...prev, [questionId]: value }));
  };

  const handleSubmit = () => {
    let correctCount = 0;
    groups.forEach((group) => {
      for (let i = 1; group[`Question${i}`]; i++) {
        const questionId = `${group.id}-${i}`;
        const userAnswer = selectedAnswers[questionId];
        const correctAnswerKey = group[`Ans${i}`];
        const correctAnswer = group[`choice${i}_${correctAnswerKey.slice(-1)}`]; // Fix: Correct answer mapping

        if (userAnswer === correctAnswer) {
          correctCount++;
        }
      }
    });

    setScore(correctCount);
    setIsSubmitted(true);
  };

  if (loading) return <p className="text-white">Loading...</p>;

  if (groups.length === 0)
    return <p className="text-white">No questions found.</p>;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold text-blackmb-4">แบบทดสอบ</h2>

      {groups.map((group) => (
        <div key={group.id} className="mb-8">
          {group.URL_file && (
            <div className="w-full flex justify-center">
              <video
                controls
                width="600"
                height="338"
                className="max-w-full rounded-lg shadow-lg"
              >
                <source src={group.URL_file} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            {Object.keys(group)
              .filter((key) => key.startsWith("Question"))
              .map((questionKey) => {
                const questionNum = questionKey.replace("Question", "");
                const questionId = `${group.id}-${questionNum}`;
                const questionText = group[questionKey];
                const choices = [
                  group[`choice${questionNum}_1`],
                  group[`choice${questionNum}_2`],
                  group[`choice${questionNum}_3`],
                  group[`choice${questionNum}_4`],
                ];

                return (
                  <div
                    key={questionId}
                    className="p-4 bg-white shadow-md rounded-lg flex flex-col"
                  >
                    <p className="text-lg font-semibold">
                      {questionNum}. {questionText}
                    </p>

                    {choices.map((choice, choiceIndex) => (
                      <label
                        key={choiceIndex}
                        className="flex items-center px-4 py-2 rounded-lg bg-green-300 my-1"
                      >
                        <input
                          type="radio"
                          name={questionId}
                          value={choice}
                          checked={selectedAnswers[questionId] === choice}
                          onChange={(e) =>
                            handleAnswerChange(questionId, e.target.value)
                          }
                          className="w-5 h-5 text-blue-600 bg-gray-100 border-black-300"
                          disabled={isSubmitted}
                        />
                        <span className="ml-2 text-lg font-medium text-gray-900">
                          {choice}
                        </span>
                      </label>
                    ))}
                  </div>
                );
              })}
          </div>
          <br />
          <hr />
        </div>
      ))}

      {!isSubmitted && (
        <button
          onClick={handleSubmit}
          className="px-6 py-2 bg-blue-500 hover:bg-blue-700 text-blackfont-bold rounded-lg transition duration-300 mt-5"
          disabled={
            Object.keys(selectedAnswers).length !==
            groups.reduce((acc, group) => {
              let questionCount = 0;
              for (let i = 1; group[`Question${i}`]; i++) {
                questionCount++;
              }
              return acc + questionCount;
            }, 0)
          }
        >
          Submit
        </button>
      )}

      {isSubmitted && (
        <p className="text-xl font-bold mt-3 text-black">
          คะแนนของคุณ: {score} /{" "}
          {groups.reduce((acc, group) => {
            let questionCount = 0;
            for (let i = 1; group[`Question${i}`]; i++) {
              questionCount++;
            }
            return acc + questionCount;
          }, 0)}
        </p>
      )}
    </div>
  );
};

export default ChoiceConver;

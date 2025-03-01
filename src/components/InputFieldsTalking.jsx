// src/components/InputFieldsTalking.jsx
import { useState } from "react";
import {
  uploadFileToStorage,
  createTalking,
} from "../services/talkingServices";

const InputFieldsTalking = () => {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    questions: [
      {
        Question: "",
        choice1: "",
        choice2: "",
        choice3: "",
        choice4: "",
        Ans: "",
      },
      {
        Question: "",
        choice1: "",
        choice2: "",
        choice3: "",
        choice4: "",
        Ans: "",
      },
      {
        Question: "",
        choice1: "",
        choice2: "",
        choice3: "",
        choice4: "",
        Ans: "",
      },
    ],
  });

  const choiceMapping = {
    choice1: "A",
    choice2: "B",
    choice3: "C",
    choice4: "D",
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      const updatedQuestions = [...prev.questions];
      updatedQuestions[index][name] = value;
      return { ...prev, questions: updatedQuestions };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const fileURL = await uploadFileToStorage(file);
      if (!fileURL) {
        alert("File upload failed.");
        setLoading(false);
        return;
      }

      let formattedQuestions = { URL_file: fileURL };
      formData.questions.forEach((q, index) => {
        const questionNum = index + 1;
        formattedQuestions[`Question${questionNum}`] = q.Question;
        formattedQuestions[`choice${questionNum}_1`] = q.choice1;
        formattedQuestions[`choice${questionNum}_2`] = q.choice2;
        formattedQuestions[`choice${questionNum}_3`] = q.choice3;
        formattedQuestions[`choice${questionNum}_4`] = q.choice4;
        formattedQuestions[`Ans${questionNum}`] = q.Ans;
      });

      await createTalking(formattedQuestions);

      setFile(null);
      setFormData({
        questions: [
          {
            Question: "",
            choice1: "",
            choice2: "",
            choice3: "",
            choice4: "",
            Ans: "",
          },
          {
            Question: "",
            choice1: "",
            choice2: "",
            choice3: "",
            choice4: "",
            Ans: "",
          },
          {
            Question: "",
            choice1: "",
            choice2: "",
            choice3: "",
            choice4: "",
            Ans: "",
          },
        ],
      });

      alert("✅ Data submitted successfully!");
    } catch (error) {
      console.error("❌ Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white shadow-lg rounded-lg">
      <label className="block font-semibold">Upload File (MP4 only):</label>
      <input
        type="file"
        onChange={handleFileChange}
        required
        className="mt-2 mb-4 p-2 border rounded"
      />
      {loading && <p className="text-blue-500">Uploading file...</p>}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {formData.questions.map((q, index) => (
          <div key={index} className="p-4 border rounded bg-gray-100">
            <label className="font-semibold">Question {index + 1}:</label>
            <input
              type="text"
              name="Question"
              value={q.Question}
              onChange={(e) => handleChange(e, index)}
              required
              className="w-full p-2 border rounded mt-1"
            />
            {Object.entries(choiceMapping).map(([key, label]) => (
              <input
                key={key}
                type="text"
                name={key}
                value={q[key]}
                onChange={(e) => handleChange(e, index)}
                placeholder={`Choice ${label}`}
                required
                className="w-full p-2 border rounded mt-1"
              />
            ))}

            <label className="font-semibold mt-2">Answer:</label>
            <select
              name="Ans"
              value={q.Ans}
              onChange={(e) => handleChange(e, index)}
              required
              className="w-full p-2 border rounded mt-1"
            >
              <option value="">Select Answer</option>
              {Object.entries(choiceMapping).map(([key, label]) => (
                <option key={key} value={key}>
                  {label}
                </option>
              ))}
            </select>
          </div>
        ))}
      </div>

      <button
        type="submit"
        disabled={loading}
        className="mt-4 px-6 py-2 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-lg transition duration-300"
      >
        {loading ? "Uploading..." : "Submit"}
      </button>
    </form>
  );
};

export default InputFieldsTalking;

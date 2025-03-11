import React, { useState } from "react";

const words = [
    { en: "Abide by", th: "ปฏิบัติตาม" },
    { en: "agreement", th: "ข้อตกลง" },
    { en: "assurance", th: "การรับประกัน" },
    { en: "cancellation", th: "การยกเลิก" },
    { en: "determine", th: "กำหนด" },
    { en: "engagement", th: "การว่าจ้าง" },
    { en: "establish", th: "สร้าง" },
    { en: "obligate", th: "ผูกมัด" },
    { en: "party", th: "ฝ่าย" },
    { en: "provision", th: "ข้อกำหนด" },
    { en: "resolve", th: "แก้ไข" },
    { en: "specific", th: "เฉพาะเจาะจง" }
];

const Contracts = () => {
    const [shownTranslations, setShownTranslations] = useState(Array(words.length).fill(false));

    const showTranslation = (index) => {
        const updatedTranslations = [...shownTranslations];
        updatedTranslations[index] = true;
        setShownTranslations(updatedTranslations);
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-200 p-6">
            <h2 className="text-xl font-bold mb-4">1 : Contracts</h2>
            <div className="grid grid-cols-3 gap-4 bg-white p-6 rounded-lg shadow-lg">
                {words.map((word, index) => (
                    <div
                        key={index}
                        className="w-32 h-24 flex flex-col items-center justify-center text-lg font-semibold border rounded-lg bg-gray-100 hover:bg-gray-300 cursor-pointer transition-all duration-300 p-2"
                        onMouseEnter={() => showTranslation(index)}
                    >
                        <span>{word.en}</span>
                        {shownTranslations[index] && (
                            <span className="text-orange-600 font-bold text-sm mt-1">{word.th}</span>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Contracts;

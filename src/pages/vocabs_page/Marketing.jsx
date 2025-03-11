import React, { useState } from "react";

const words = [
    { en: "Fad", th: "แฟชั่น" },
    { en: "Inspiration", th: "แรงบันดาลใจ" },
    { en: "Market", th: "ตลาด" },
    { en: "Persuasion", th: "การชักชวน" },
    { en: "Productive", th: "การผลิต" },
    { en: "Satisfaction", th: "ความพึงพอใจ" },
    { en: "Attract", th: "ดึงดูด" },
    { en: "Compare", th: "เปรียบเทียบ" },
    { en: "Competition", th: "การแข่งขัน" },
    { en: "Consume", th: "กิน" },
    { en: "Convince", th: "โน้มน้าวใจ" },
    { en: "Currently", th: "ปัจจุบัน" } // ✅ เปลี่ยนให้เป็นคำแปลภาษาไทย
];

const Marketing = () => {
    const [shownTranslations, setShownTranslations] = useState(Array(words.length).fill(false));

    const showTranslation = (index) => {
        const updatedTranslations = [...shownTranslations];
        updatedTranslations[index] = true;
        setShownTranslations(updatedTranslations);
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-200 p-6">
            <h2 className="text-xl font-bold mb-4">2 : Marketing</h2>
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

export default Marketing;

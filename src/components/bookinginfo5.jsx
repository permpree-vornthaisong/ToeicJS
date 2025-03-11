import React, { useState } from "react";

const ExamBookingInfo5 = () => {
    const [isVisible, setIsVisible] = useState(true);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div className="thai-font border rounded-lg shadow-md">
            <div className="bg-blue-600 text-white p-3 flex justify-between items-center rounded-lg">
                <h2 className="text-lg">กรณีสอบในนามบุคคลทั่วไป (Personal)</h2>
                <button
                    onClick={toggleVisibility}
                    className="text-white text-2xl rounded-lg bg-blue-700 hover:bg-blue-800 w-10 h-10 flex items-center justify-center transition-all duration-300"
                >
                    {isVisible ? "−" : "+"}
                </button>
            </div>

            {isVisible && (
                <div className="bg-gray-100 p-4 rounded-lg">
                    <p className="mb-2" style={{ textIndent: '2em' }}>
                        จองสอบล่วงหน้าอย่างน้อย 1 วันทำการก่อนวันสอบทาง Call Center ในวันทำการ  
                        วันจันทร์-วันเสาร์ เวลา <strong>08.00 – 16.30 น.</strong>  
                        <span className="text-red-600"> (ไม่รับจองสอบทาง Email)</span>
                    </p>
                    <ul className="pl-4 ms-14">
                        <li className="list-disc">
                            ศูนย์สอบกรุงเทพฯ: 0-2260-7061, 0-2259-3990 ต่อ 101 หรือ ต่อ 603 สำหรับภาษาอังกฤษ
                        </li>
                        <li className="list-disc">
                            ศูนย์สอบเชียงใหม่: 0-5324-1273 ถึง 5
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default ExamBookingInfo5;

import React, { useState } from "react";

const ExamBookingInfo3 = () => {
    const [isVisible, setIsVisible] = useState(true);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div className="thai-font border rounded-lg shadow-md">
            <div className="bg-blue-600 text-white p-3 flex flex-wrap justify-between items-center rounded-lg">
                <h2 className="text-lg flex-1 overflow-wrap break-word">
                    การเลื่อนหรือยกเลิกการสอบ
                </h2>
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
                        กรณีต้องการเลื่อนหรือยกเลิกการสอบ ต้องแจ้งล่วงหน้าอย่างน้อย 1 วันทำการก่อนวันสอบ  
                        ในวันทำการ เวลา <strong className="underline">08.00 - 16.30 น.</strong> ไม่รวมวันหยุดนักขัตฤกษ์  
                        การเลื่อนหรือยกเลิกการสอบภายในวันที่สอบหรือหลังวันสอบ  
                        จะมี<strong className="text-red-600">ค่าธรรมเนียม (ค่าปรับ) จำนวน 500 บาท</strong>  
                        ซึ่งต้องชำระเพิ่มเติมในการสอบครั้งถัดไป
                    </p>
                </div>
            )}
        </div>
    );
};

export default ExamBookingInfo3;

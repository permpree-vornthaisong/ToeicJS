import React, { useState } from "react";

const ExamBookingInfo2 = () => {
    const [isVisible, setIsVisible] = useState(true);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div className="thai-font border rounded-lg shadow-md">
            <div className="bg-blue-600 text-white p-3 flex flex-wrap justify-between items-center rounded-lg">
                <h2 className="text-lg flex-1 overflow-wrap break-word">
                    กรณีผู้สอบต้องใช้อุปกรณ์เสริมพิเศษทางการแพทย์ หรือ อุปกรณ์อื่นๆ ที่จำเป็นต่อร่างกาย
                    ไม่ว่าชนิดใดก็ตาม ทั้งแบบชั่วคราวหรือถาวร
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
                        หากผู้สอบจำเป็นต้องใช้อุปกรณ์ดังกล่าว <strong className="underline">ระหว่างการสอบ</strong> เช่น 
                        อุปกรณ์ตามกระดูก(เฝือก) อุปกรณ์ช่วยฟัง เครื่องกระตุ้นหัวใจ Insulin Pump 
                        เก้าอี้มีล้อสำหรับผู้ป่วย (Wheelchair) เป็นต้น หรือกรณีที่ต้องการสอบด้วยวิธีเฉพาะ เช่น 
                        การสอบสำหรับผู้ที่มีความบกพร่องด้านการได้ยิน หรือ ด้านการมองเห็น (สอบโดยใช้ 
                        อักษร Braille) เป็นต้น จะต้องแจ้งศูนย์สอบฯ และจองสอบ  
                        <strong className="text-red-600">ในวันทำการล่วงหน้าอย่างน้อย 3-8 สัปดาห์</strong>  
                        ทางโทรศัพท์ที่หมายเลข <strong>02-260-7061 ต่อ 101</strong> ในวันทำการ เวลา  
                        <strong className="underline">08.00 -16.30 น.</strong> ซึ่งทางศูนย์สอบฯ จะแจ้งข้อมูลที่จำเป็นต่อไป  
                        <strong className="text-blue-800">ข้อมูลเพิ่มเติม</strong>
                    </p>
                </div>
            )}
        </div>
    );
};

export default ExamBookingInfo2;

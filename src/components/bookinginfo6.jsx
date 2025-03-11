import React, { useState } from "react";

const ExamBookingInfo6 = () => {
    const [isVisible, setIsVisible] = useState(true);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div className="thai-font bg-gray-100 border rounded-lg shadow-md">
            <div className="bg-blue-600 text-white p-3 flex justify-between items-center rounded-lg">
                <h2 className="text-lg">สำหรับผู้ที่ถือสัญชาติไทย</h2>
                <button
                    onClick={toggleVisibility}
                    className="text-white text-2xl rounded-lg bg-blue-700 hover:bg-blue-800 w-10 h-10 flex items-center justify-center transition-all duration-300"
                >
                    {isVisible ? "−" : "+"}
                </button>
            </div>

            {isVisible && (
                <div className="p-4 rounded-lg">
                    <p className="mb-2 mt-5 text-lg font-bold text-black bg-blue-100" style={{ textIndent: '2em' }}>
                        1. กรณีสอบในนามบุคคลทั่วไป
                    </p>
                    <ul className="pl-4 ms-14">
                        <li className="list-disc">
                            บัตรประจำตัวประชาชนไทย หรือใบขับขี่สมาร์ตการ์ดไทย (บัตรแข็ง) หรือหนังสือเดินทางไทย (Passport)
                        </li>
                    </ul>

                    <p className="mb-2 mt-5 text-lg font-bold text-black bg-blue-100" style={{ textIndent: '2em' }}>
                        2. กรณีสอบในนามองค์กร และสถาบันการศึกษา ที่ลงนาม LOA กับ CPA (Thailand)
                    </p>
                    <ul className="pl-4 ms-14 pt-2">
                        <li>
                            1. บัตรประชาชนไทย หรือใบขับขี่สมาร์ตการ์ดไทย (บัตรแข็ง) หรือหนังสือเดินทางไทย (Passport)  
                            <strong className="text-red-600 underline"> และ</strong>
                        </li>
                        <li className="pt-2">
                            2. บัตรพนักงานขององค์กรที่ใช้สิทธิ์สอบแบบมีรูปถ่าย หรือบัตรนักศึกษาแบบมีรูปถ่าย
                        </li>
                    </ul>

                    <p className="mt-5 text-lg text-blue-600 underline" style={{ textIndent: '2em' }}>
                        กรณีต้องการสอบครั้งถัดไป
                    </p>
                    <p className="pl-9 text-lg text-black">
                        ผู้สอบสามารถจองสอบครั้งถัดไปได้หลังจากที่ผลคะแนนสอบครั้งล่าสุดออกแล้ว  
                        โดยต้องมี <span className="text-red-600 underline">"ระยะเว้นการสอบ" 5 วันปฏิทิน</span> หลังจากวันสอบ
                    </p>
                    <p className="pl-9 text-lg text-black pt-1">
                        <span className="underline">หมายเหตุ</span> :  
                        กรณีที่มีการสอบซ้ำภายใน "ระยะเว้นการสอบ" ครั้งที่สอบซ้ำจะถือเป็นโมฆะ  
                        โดยไม่มีการคืนค่าสอบ
                    </p>

                    <div className="pt-6 flex">
                        <img className="h-18 p-2 pl-9" src="/public/images/pay.png" alt="pay" />
                        <h2 className="flex items-center text-xl font-bold text-black">อัตราสอบและการชำระเงิน</h2>
                    </div>

                    <div className="px-5 pb-5">
                        <div className="table-none md:table-fixed">
                            <table className="table-fixed w-full">
                                <thead>
                                    <tr className="bg-blue-100">
                                        <th className="border border-gray-300 p-4">ประเภทการสอบ</th>
                                        <th className="border border-gray-300 p-4">อัตราค่าสอบ</th>
                                        <th className="border border-gray-300 p-4">วิธีการชำระเงิน</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="border border-gray-300 p-4 text-center">บุคคลทั่วไป</td>
                                        <td className="border border-gray-300 p-4 text-center">1,800 บาท</td>
                                        <td className="border border-gray-300 p-4 text-center">
                                            ชำระด้วยเงินสด/บัตรเครดิต/QR code ในวันสอบ
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 p-4 text-center">องค์กร หรือ สถาบันการศึกษา</td>
                                        <td className="border border-gray-300 p-4 text-center">
                                            ตามอัตราที่ตกลงกับองค์กร หรือสถาบันการศึกษา
                                        </td>
                                        <td className="border border-gray-300 p-4 text-center">
                                            ตามอัตราที่ตกลงกับองค์กร หรือสถาบันการศึกษา (ชำระในวันสอบ/เรียกเก็บจากองค์กร)
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ExamBookingInfo6;

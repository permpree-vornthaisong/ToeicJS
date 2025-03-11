import React, { useState } from "react";
import { FcSurvey } from "react-icons/fc";

const ExamBookingInfo4 = () => {
    const [isVisible, setIsVisible] = useState(true);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div className="thai-font border rounded-lg shadow-md">
            <div className="bg-blue-600 text-white p-3 flex flex-wrap justify-between items-center rounded-lg">
                <h2 className="text-lg flex-1 overflow-wrap break-word">
                    กรณีต้องการสอบในครั้งถัดไป
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
                    <p className="mb-2 py-3">
                        ผู้สอบจะสามารถจองสอบครั้งต่อไปได้หลังจากที่ผลคะแนนสอบครั้งล่าสุดออกแล้ว โดยมีระยะเว้นการสอบดังนี้
                    </p>
                    <div className="table-none md:table-fixed">
                        <table className="table-fixed w-full">
                            <thead>
                                <tr>
                                    <th className="border bg-gray-200 border-gray-400 p-4">ประเภทผู้สอบ</th>
                                    <th className="border bg-gray-200 border-gray-400 p-4">ระยะเว้นการสอบสำหรับการสอบครั้งถัดไป</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="border bg-gray-300 border-white p-4">1. สำหรับผู้สอบที่ถือสัญชาติไทย</td>
                                    <td className="border bg-gray-200 border-white text-center p-4">ระยะเว้นการสอบ "5 วันปฏิทิน" หลังจากวันสอบ</td>
                                </tr>
                                <tr>
                                    <td className="border bg-gray-300 border-white p-4">
                                        2. สำหรับผู้สอบที่มิได้ถือสัญชาติไทย กรณีผู้สอบมี
                                        <ul className="list-disc pl-6 space-y-2">
                                            <li>ใบอนุญาตทำงานในประเทศไทย</li>
                                            <li>บัตรนักศึกษา</li>
                                            <li>หนังสือรับรองสถานภาพนิสิต/นักศึกษาประเภทเต็มเวลา</li>
                                        </ul>
                                    </td>
                                    <td className="border bg-gray-200 border-white p-4 text-center">ระยะเว้นการสอบ "5 วันปฏิทิน" หลังจากวันสอบ</td>
                                </tr>
                                <tr>
                                    <td className="border bg-gray-300 border-white p-4">3. ผู้สอบที่ไม่มีบัตรนักศึกษา หรือ ไม่มีใบอนุญาตทำงาน</td>
                                    <td className="border bg-gray-200 border-white p-4 text-center">ระยะเว้นการสอบ "14 วันปฏิทิน" หลังจากวันสอบ</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p className="mt-4 text-blue-600 italic">
                        <strong className="underline">หมายเหตุ:</strong> กรณีที่มีการสอบซ้ำภายใน "ระยะเว้นการสอบ" ครั้งที่สอบซ้ำจะถือเป็นโมฆะ และไม่มีการคืนค่าสอบ
                    </p>

                    <h2 className="mb-2 mt-5 text-xl font-bold flex items-center text-black">
                        <img className="h-18 p-2" src="/public/images/note.png" alt="note" />
                        การรายงานตัวในวันสอบ
                    </h2>
                    <p className="mt-4 text-black" style={{ textIndent: '2em' }}>
                        ผู้สอบที่จองสอบ <strong className="underline text-red-600">ต้องมาลงทะเบียนที่ศูนย์สอบฯ 1 ชั่วโมง ก่อนเวลาสอบ</strong>
                    </p>

                    <h2 className="mb-2 mt-5 text-xl font-bold flex items-center text-black">
                        <img className="h-18 p-2" src="/public/images/check-list.png" alt="check-list" />
                        หลักฐานที่ต้องแสดงในวันสอบ
                    </h2>
                    <p className="mt-4 text-black" style={{ textIndent: '2em' }}>
                        หลักฐานแสดงตนทุกประเภทที่นำมาแสดง <strong className="text-red-600 underline">ต้องเป็นฉบับจริง ข้อมูลและรูปถ่ายเป็นปัจจุบัน</strong>
                    </p>
                </div>
            )}
        </div>
    );
};

export default ExamBookingInfo4;

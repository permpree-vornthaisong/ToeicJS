import React, { useState } from "react";

const ExamBookingInfo7 = () => {
    const [isVisible, setIsVisible] = useState(true);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div className="thai-font border rounded-lg shadow-md">
            <div className="bg-blue-600 text-white p-3 flex justify-between items-center rounded-lg">
                <h2 className="text-lg">
                    กำหนดการรับผลสอบ และการส่งออกผลสอบทางไปรษณีย์ด่วนพิเศษ (EMS)
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
                    <div className="pt-6 flex">
                        <img className="h-18 p-2 pl-9" src="/public/images/a-.png" alt="result" />
                        <h2 className="flex items-center text-xl font-bold text-black">การรับผลสอบ</h2>
                    </div>
                    <p className="mb-2 py-3" style={{ textIndent: '2em' }}>
                        ผู้สอบสามารถเลือกวิธีรับผลสอบได้ในวันสอบก่อนเข้าห้องสอบ  
                        (ไม่สามารถเปลี่ยนแปลงวิธีรับผลสอบได้หลังจากที่เข้าห้องสอบแล้ว)  
                        กรณีที่ผู้สอบเลือกวิธีรับผลสอบทางไปรษณีย์ด่วนพิเศษ (EMS)  
                        จะมีค่าธรรมเนียมตามประเภทของการสอบ (จ่ายเป็นเงินสดในวันสอบเท่านั้น)
                    </p>

                    <div className="px-5 pb-5">
                        <div className="table-none md:table-fixed">
                            <table className="table-fixed w-full">
                                <thead>
                                    <tr>
                                        <th className="border bg-amber-800 text-white p-4" colSpan={3}>
                                            ศูนย์สอบกรุงเทพฯ
                                        </th>
                                        <th className="border bg-amber-800 text-white p-4" colSpan={2}>
                                            ศูนย์สอบเชียงใหม่
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="bg-blue-100">
                                        <td className="border p-4 text-center">รอบสอบ</td>
                                        <td className="border p-4 text-center">เวลารับผล</td>
                                        <td className="border p-4 text-center">วันส่งผลสอบทางไปรษณีย์ (EMS)</td>
                                        <td className="border p-4 text-center">รอบสอบ</td>
                                        <td className="border p-4 text-center">เวลารับผลและส่งผลสอบทางไปรษณีย์ (EMS)</td>
                                    </tr>
                                    <tr>
                                        <td className="border bg-gray-300 p-4 text-center">จันทร์-พฤหัสบดี</td>
                                        <td className="border p-4 text-center">1 วันทำการหลังจากวันสอบ เวลา 14.30-16.30 น.</td>
                                        <td className="border p-4 text-center">1 วันทำการหลังจากวันสอบ</td>
                                        <td className="border bg-gray-300 p-4 text-center">จันทร์-พฤหัสบดี</td>
                                        <td className="border p-4 text-center">4 วันทำการหลังจากวันสอบ เวลา 14.30-16.30 น.</td>
                                    </tr>
                                    <tr>
                                        <td className="border bg-gray-300 p-4 text-center">ศุกร์</td>
                                        <td className="border p-4 text-center">1 วันทำการหลังจากวันสอบ เวลา 14.30-16.30 น</td>
                                        <td className="border p-4 text-center">2 วันทำการหลังจากวันสอบ</td>
                                        <td className="border bg-gray-300 p-4 text-center">ศุกร์-เสาร์</td>
                                        <td className="border p-4 text-center">5 วันทำการหลังจากวันสอบ เวลา 14.30-16.30 น.</td>
                                    </tr>
                                    <tr>
                                        <td className="border bg-gray-300 p-4 text-center">เสาร์</td>
                                        <td className="border p-4 text-center">2 วันทำการหลังจากวันสอบ เวลา 14.30-16.30 น</td>
                                        <td className="border p-4 text-center">2 วันทำการหลังจากวันสอบ</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <p className="text-blue-600 underline" style={{ textIndent: '2em' }}>หมายเหตุ :</p>
                    <div className="text-blue-600">
                        <ul className="pl-4 ms-14">
                            <li className="list-disc">
                                กรณีรับผลสอบทางไปรษณีย์ด่วนพิเศษ (EMS) จะมีค่าธรรมเนียมตามประเภทของการสอบ (จ่ายเป็นเงินสดในวันสอบเท่านั้น)
                            </li>
                            <li className="list-disc">
                                กรณีที่วันส่งผลสอบทางไปรษณีย์ตรงกับวันเสาร์หรือวันหยุดนักขัตฤกษ์ ผลสอบจะถูกส่งออกจากศูนย์สอบฯ ในวันทำการถัดไป
                            </li>
                            <li className="list-disc">
                                ผู้สอบสามารถรับผลสอบตามวันเวลาที่กำหนดภายใน 90 วันหลังจากวันสอบ  
                                หากเกิน 90 วัน ผู้สอบจะต้องขอผลสอบในรูปแบบของการคัดสำเนาผลสอบ (Score Report Reprint) เท่านั้น
                            </li>
                            <li className="list-disc">
                                กรณีให้ส่งผลสอบทางไปรษณีย์ด่วนพิเศษ (EMS) ศูนย์สอบฯ จะส่งผลสอบออกตามกำหนดการข้างต้น  
                                ซึ่งจะส่งถึงปลายทางเมื่อใด ขึ้นอยู่กับการดำเนินงานของทางไปรษณีย์  
                                ทั้งนี้ หากผลสอบถูกตีกลับจากทางไปรษณีย์ ผู้สอบจะต้องเข้ามารับผลสอบที่ศูนย์สอบฯ  
                                ภายใน 90 วันหลังจากวันสอบเท่านั้น
                            </li>
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ExamBookingInfo7;

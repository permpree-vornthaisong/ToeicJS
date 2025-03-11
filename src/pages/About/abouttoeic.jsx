import React from "react";
import ExamBookingInfo from "../../components/bookinginfo";
import ExamBookingInfo2 from "../../components/bookinginfo2";
import ExamBookingInfo3 from "../../components/bookinginfo3"; // ✅ เพิ่มการ import ที่ขาดไป
import ExamBookingInfo4 from "../../components/bookinginfo4";
import ExamBookingInfo6 from "../../components/bookinginfo6";
import ExamBookingInfo7 from "../../components/bookinginfo7";

const Abouttoeic = () => {
    return (
        <div className="p-4">
            <div className="thai-font p-4">
                <h2 className="flex items-center text-lg font-bold text-black">
                    <img className="h-18 p-2" src="/public/images/client-support.png" alt="" />
                    การจอง ABOUT TOEIC
                </h2>
            </div>
            <ExamBookingInfo />
            <div className="pt-6">
                <ExamBookingInfo2 />
            </div>
            <div className="pt-6">
                <ExamBookingInfo3 /> {/* ✅ แก้ให้มี ExamBookingInfo3 */}
            </div>
            <div className="pt-6">
                <ExamBookingInfo4 />
            </div>
            <div className="pt-6">
                <ExamBookingInfo6 />
            </div>
            <div className="pt-6">
                <ExamBookingInfo7 />
            </div>
        </div>
    );
};

export default Abouttoeic;

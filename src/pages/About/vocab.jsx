import React from "react";
import { Link } from "react-router-dom";

const vocabList = [
    "Contracts", "Marketing", "Warranties", "Business Planning", "Conferences",
    "Computer", "Office Technology", "Office Procedures", "Electronics", "Correspondence",
    "Job Advertising and Recruiting", "Applying and Interviewing", "Hiring and Training",
    "Salaries and Benefits", "Promotions, Pensions and Awards", "Shopping", "Ordering Supplies",
    "Shipping", "Invoices", "Inventory", "Banking", "Accounting", "Investments", "Taxes",
    "Financial Statements", "Property and Departments", "Board Meeting and Committees",
    "Quality Control", "Product Development", "Renting and Leasing", "Selecting a Restaurant",
    "Eating Out", "Ordering Lunch", "Cooking as a Career", "Events", "General Travel",
    "Airlines", "Trains", "Hotels", "Car Rentals", "Movies", "Theater", "Music", "Museums",
    "Media", "Doctor's Office", "Dentist's Office", "Health Insurance", "Hospitals", "Pharmacy"
];

const Vocab = () => {
    return (
        <div className="min-h-screen bg-green-900 flex justify-center p-4">
            <div className="p-4 rounded-lg shadow-lg w-full max-w-6xl mt-4">
                <h2 className="text-2xl font-bold text-center mb-4 text-white">Vocabulary List</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {vocabList.map((item, index) => {
                        const path = `/vocab/${item.replace(/\s+/g, "-").toLowerCase()}`; // ✅ เปลี่ยนเป็นตัวพิมพ์เล็กทั้งหมด

                        return (
                            <Link
                                key={index}
                                to={path}
                                className="bg-gray-300 hover:bg-gray-400 text-black p-3 rounded-lg text-center font-semibold transition-all duration-300 block"
                            >
                                {index + 1}: {item}
                            </Link>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Vocab;

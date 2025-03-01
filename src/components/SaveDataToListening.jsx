// AddListening.jsx
import React, { useState } from 'react';
import axios from 'axios';

const AddListening = () => {
    const [formData, setFormData] = useState({
        URL_file: '',
        Question: '',
        choice1: '',
        choice2: '',
        choice3: '',
        choice4: '',
        Ans: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                'http://127.0.0.1:5001/test-63698/us-central1/createListening',
                formData,
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );
            console.log('Response:', response.data);
            // รีเซ็ตฟอร์มหรือแสดงข้อความยืนยันตามต้องการ
            setFormData({
                URL_file: '',
                Question: '',
                choice1: '',
                choice2: '',
                choice3: '',
                choice4: '',
                Ans: '',
            });
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                URL File:
                <input
                    type="text"
                    name="URL_file"
                    value={formData.URL_file}
                    onChange={handleChange}
                    required
                />
            </label>
            <br />
            <label>
                Choice 1:
                <input
                    type="text"
                    name="choice1"
                    value={formData.choice1}
                    onChange={handleChange}
                    required
                />
            </label>
            <br />
            <label>
                Choice 2:
                <input
                    type="text"
                    name="choice2"
                    value={formData.choice2}
                    onChange={handleChange}
                    required
                />
            </label>
            <br />
            <label>
                Choice 3:
                <input
                    type="text"
                    name="choice3"
                    value={formData.choice3}
                    onChange={handleChange}
                    required
                />
            </label>
            <br />
            <label>
                Choice 4:
                <input
                    type="text"
                    name="choice4"
                    value={formData.choice4}
                    onChange={handleChange}
                    required
                />
            </label>
            <br />
            <label>
                Answer:
                <input
                    type="text"
                    name="Ans"
                    value={formData.Ans}
                    onChange={handleChange}
                    required
                />
            </label>
            <br />
            <button type="submit">Submit</button>
        </form>
    );
};

export default AddListening;

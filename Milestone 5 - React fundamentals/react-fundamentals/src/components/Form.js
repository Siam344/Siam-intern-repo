// src/components/Form.js
import React, { useState } from 'react';

const Form = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Show alert on submission
        alert(`Form Submitted!\nName: ${name}\nEmail: ${email}`);

        // Reset form fields
        setName('');
        setEmail('');
    };

    return (
        <div className="max-w-md mx-auto bg-white p-8 rounded-xl shadow-md mt-8">
            <h2 className="text-2xl font-bold mb-4">Submit the Form</h2>
            <p className="text-gray-500 mb-6">Why did the developer go broke? Because they used up all their cache!</p>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-gray-700">Name:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="border border-gray-300 rounded w-full p-2"
                        placeholder="Enter your name"
                        required
                    />
                </div>
                <div>
                    <label className="block text-gray-700">Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="border border-gray-300 rounded w-full p-2"
                        placeholder="Enter your email"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-all"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Form;

import React, { useState } from 'react';

const ButtonComponent = () => {
    const [message, setMessage] = useState("");

    const handleClick = () => {
        setMessage("You are awesome! Keep clicking to spread positivity!");
    };

    return (
        <div className="flex flex-col justify-center items-center space-y-4">
            <button 
                className="bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold py-2 px-6 rounded-full shadow-lg hover:from-green-500 hover:to-blue-600 transition duration-300"
                onClick={handleClick}
            >
                Click Me to Feel Good!
            </button>
            {message && (
                <div className="text-xl text-gray-700 mt-4 animate-bounce">
                    {message}
                </div>
            )}
        </div>
    );
};

export default ButtonComponent;

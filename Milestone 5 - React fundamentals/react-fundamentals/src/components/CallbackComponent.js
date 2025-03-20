import React, { useState, useCallback } from 'react';

function CallbackComponent() {
    const [count, setCount] = useState(0);

    // Using useCallback to memoize the click handler
    const handleClick = useCallback(() => {
        setCount((prevCount) => prevCount + 1);
    }, []);

    return (
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6 m-4 text-center">
            <h2 className="text-2xl font-bold mb-4 text-blue-600">Callback Component</h2>
            <button
                onClick={handleClick}
                className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-all duration-200 mb-3"
            >
                Click Me
            </button>
            <p className="text-lg font-semibold text-gray-700">Click Count: {count}</p>
        </div>
    );
}

export default CallbackComponent;

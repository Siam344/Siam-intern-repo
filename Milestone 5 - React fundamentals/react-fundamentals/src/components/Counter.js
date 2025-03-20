// src/components/Counter.js
import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);
    const reset = () => setCount(0);

    return (
        <div className="flex flex-col items-center justify-center p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Counter</h2>
            <div className="text-4xl font-semibold mb-4">{count}</div>
            <div className="flex gap-4">
                <button
                    className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-all"
                    onClick={increment}
                >
                    Increment
                </button>
                <button
                    className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-all"
                    onClick={decrement}
                >
                    Decrement
                </button>
                <button
                    className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-all"
                    onClick={reset}
                >
                    Reset
                </button>
            </div>
        </div>
    );
};

export default Counter;

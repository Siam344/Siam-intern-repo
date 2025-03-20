import React, { useMemo } from 'react';

const ExpensiveCalculation = () => {
    const result = useMemo(() => {
        console.log('Performing an expensive calculation...');
        return 5 * 5;
    }, []);

    return (
        <div>
            <h2>Expensive Calculation Result: {result}</h2>
        </div>
    );
};

export default ExpensiveCalculation;

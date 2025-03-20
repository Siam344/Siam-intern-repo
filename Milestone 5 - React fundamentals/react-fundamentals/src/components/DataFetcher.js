import React, { useState, useEffect } from 'react';

function DataFetcher() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users'); // Replace with your API
                console.log('Response Status:', response.status); // Log response status
                console.log('Response:', response); // Log the full response

                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }

                const result = await response.json();
                console.log('Fetched Data:', result); // Log the data
                setData(result);
                setLoading(false);
            } catch (err) {
                console.error('Error:', err.message); // Log any errors
                setError(err.message);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) return <p>Loading data...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <h2>Fetched Data:</h2>
            <ul>
                {data.map((item) => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default DataFetcher;

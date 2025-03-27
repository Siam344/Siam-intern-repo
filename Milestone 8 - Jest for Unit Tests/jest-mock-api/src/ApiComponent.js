import React, { useEffect, useState } from "react";
import axios from "axios";

const ApiComponent = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => setData(response.data))
      .catch((error) => setError(error.message));
  }, []);

  return (
    <div>
      {error && <p data-testid="error-message">Error: {error}</p>}
      {data ? <p data-testid="data-message">Data: {JSON.stringify(data)}</p> : <p>Loading...</p>}
    </div>
  );
};

export default ApiComponent;

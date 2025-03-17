import React, { useState } from "react";

const Bug1_MutateState = () => {
  const [count, setCount] = useState([0]);

  const increment = () => {
    setCount([...count, count[0] + 1]); // ✅ Creates a new reference
  };

  return (
    <div>
      <h2>Count: {count[count.length - 1]}</h2>
      <button onClick={increment}>Increase</button>
    </div>
  );
};

export default Bug1_MutateState;

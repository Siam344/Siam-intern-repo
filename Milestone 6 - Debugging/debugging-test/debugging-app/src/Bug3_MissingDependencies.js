import React, { useState, useEffect } from "react";

const Bug3_MissingDependencies = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Count updated:", count);
  }, [count]); // ✅ Added count as dependency

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
};

export default Bug3_MissingDependencies;

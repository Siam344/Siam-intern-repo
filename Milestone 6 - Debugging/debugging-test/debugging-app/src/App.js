import React from "react";
import Bug1_MutateState from "./Bug1_MutateState";
import Bug2_ListKeys from "./Bug2_ListKeys";
import Bug3_MissingDependencies from "./Bug3_MissingDependencies";

function App() {
  return (
    <div>
      <h1>React Debugging Test</h1>
      <Bug1_MutateState />
      <Bug2_ListKeys />
      <Bug3_MissingDependencies />
    </div>
  );
}

export default App;

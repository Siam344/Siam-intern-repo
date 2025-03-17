import React, { useState } from "react";

const Bug2_ListKeys = () => {
  const [items, setItems] = useState(["Item 1", "Item 2", "Item 3"]);

  const addItem = () => {
    const newItem = `Item ${items.length + 1}`; // ✅ Keep the item name normal
    setItems([...items, newItem]);
  };

  return (
    <div>
      <ul>
        {items.map((item) => (
          <li key={`${item}-${Date.now()}`}>{item}</li> // ✅ Unique key, but readable value
        ))}
      </ul>
      <button onClick={addItem}>Add Item</button>
    </div>
  );
};

export default Bug2_ListKeys;

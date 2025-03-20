// Task 5: Lists and User Input
import React, { useState } from 'react';
const ListInput = () => {
  const [text, setText] = useState('');
  const [items, setItems] = useState([]);
  const addItem = () => {
    if (text) {
      setItems([...items, text]);
      setText('');
    }
  };
  return (
    <div>
      <input
        className='border p-2 mr-2'
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder='Add item'
      />
      <button onClick={addItem} className='bg-green-500 text-white p-2'>Add</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};
export default ListInput;

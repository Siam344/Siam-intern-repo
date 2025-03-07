import React, { useState } from "react";


const MessageComponent = ({ message }) => {
    const [clicked, setClicked] = useState(false);
  
    return (
      <div>
        <p data-testid="message">{clicked ? "Clicked!" : message}</p>
        <button data-testid="button" onClick={() => setClicked(true)}>Click Me</button>
      </div>
    );
  };

export default MessageComponent;

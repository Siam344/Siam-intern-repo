import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount, selectCounterValue } from './counterSlice';
import './Counter.css';

export function Counter() {
  const count = useSelector(selectCounterValue);
  const dispatch = useDispatch();

  // Dynamic message based on counter value
  const getMessage = () => {
    if (count > 10) return "🔥 You're on fire!";
    if (count > 5) return "🚀 Keep going!";
    if (count < 0) return "😅 Careful, it's negative!";
    return "😊 Keep clicking!";
  };

  return (
    <div className="counter-container">
      <h1>Intro to Redux</h1>
      <h2>Counter: <span>{count}</span></h2>
      <p className="message">{getMessage()}</p>

      <div className="button-group">
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(incrementByAmount(5))}>Increment by 5</button>
      </div>
    </div>
  );
}

import React from 'react'
import "./App.css";
import { useSelector, useDispatch } from 'react-redux';
import { incrementNumber, decrementNumber } from './action/index.js';

const App = () => {
  const myState = useSelector((state) => state.changeNumber);
  const dipatch = useDispatch();
  return (
    <>
      <div className="container">
        <h1>Increment Decrement Counter</h1>
        <h4>Using React and Redux</h4>
        <div className="quantitiy">
          <a href="" title="decrement" className="quantitiy_minus"><span>-</span></a>
          <input type="text" name="quantity" id="" className="quantity_input" value={myState} />
          <a onClick={() => dipatch(incrementNumber())} href="" title="increment" className="quantitiy_plus"><span>+</span></a>
        </div>
      </div>
    </>
  )
}

export default App

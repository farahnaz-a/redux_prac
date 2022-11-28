import React, {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { increment, decrement, incrementByAmount, decrementByAmount } from '../../slices/CounterSlice'

const Counter = () => {
    const counter = useSelector(state => state.counter.value)
    const dispatch = useDispatch(); 
    const [increm, SetIncrem] = useState(0)
    const [decrem , SetDecrem] = useState(0)
  return (
    <div style={{ paddingLeft : "20px" }}>
      <h1>Counter</h1>

        <button onClick={() => dispatch(increment())}> + </button> <br /> <br />
        <span>
             {counter}    
        </span> <br /> <br />
        <button onClick={() => dispatch(decrement())}> - </button> <br /> <br />
        <label htmlFor="">Increment By Amount</label> <br /> <br />
        <input type="number" value={increm} onChange={(e) => SetIncrem(e.target.value)} /> <br /> <br />
        <button onClick={() => dispatch(incrementByAmount(Number(increm)))}>Add Amount ({increm})</button> <br /> <br />
        <label htmlFor="">Decrement By Amount</label> <br /> <br />
        <input type="number" value={decrem} onChange={(e) => SetDecrem(e.target.value)} /> <br /> <br />
        <button onClick={() => dispatch(decrementByAmount(decrem))}>Subtract Amount ({decrem})</button>

    </div>
    
  )
}

export default Counter

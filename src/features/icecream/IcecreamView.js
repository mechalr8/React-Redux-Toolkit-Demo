import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { ordered, restocked } from './icecreamSlice';

const IcecreamView = () => {
    const numOfIcecreams = useSelector((state) => state.icecream.numOfIcecreams)
    const dispatch = useDispatch()
    const [count, setCount] = useState(1)
  return (
    <div>
      <h2>Number of icecreams - {numOfIcecreams}</h2>
      <button onClick={() => dispatch(ordered())}>Order icecreams</button>
      <input
        type='number'
        value={count}
        onChange={(e) => setCount(parseInt(e.target.value))}
      />
      <button onClick={() => dispatch(restocked(count))}>Restock icecreams</button>
    </div>
  );
}

export default IcecreamView

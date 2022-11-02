import React, { useEffect, useState } from 'react'
import useTitleCount from '../UseTitleCount';

const Test = () => {

    const [count, setCount] = useState(0);

    // custom hook
    useTitleCount(count)

    // useEffect(() => {
    //     console.log("I am fine")
    // }, []);

    // useEffect(() => {
    //     console.log("Hello useEffects");
    // });

    console.log("Hello outside");

  return (
    <div>
        <h1>{count}</h1>
        <button className="btn" onClick={
            () => setCount(count + 1)
        }>Click Test😃</button>
    </div>
  )
}

export default Test
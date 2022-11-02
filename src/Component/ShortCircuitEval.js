import React, { useState } from 'react'

const ShortCircuitEval = () => {

    const [demo, setDemo] = useState("");

  return (
    <div>
        <h1 className="h1style"> { demo || 
            <>
                <h1>mast</h1>
                <p>you can do anything</p>
            </>
        } </h1>

        <h1 className="h1style"> { demo && "Abhi" } </h1>
    </div>
  )
}

export default ShortCircuitEval
import React, { useState } from 'react';

const UseStateArray = () => {

    const myBioData = [
        {
            id: 0, myName: "Abhi", age: 26
        }, {
            id: 1, myName: "Jeet", age: 27
        }, {
            id:2, myName: "Khan", age: 28
        }
    ]

    const [myArray, setmyArray] = useState(myBioData);

    const clearArray = () => {
        setmyArray([]);
    }

    const removeElement = (id) => {
        const myNewArray = myArray.filter((curElm) => {
            return curElm.id !== id;
        })

        setmyArray(myNewArray);
    }

  return (
    <>
        {
            myArray.map((curElm) => {
                return (
                    <h1 className="h1style" key={curElm.id}>Name: {curElm.myName} & Age: {curElm.age} & Id: {curElm.id}
                        <button className='btnInner' onClick={ () => removeElement(curElm.id)}>Remove</button>
                    </h1>
                );
            } )
        }
        <button className='btn' onClick={clearArray}>Clear</button>
    </>
  )
}

export default UseStateArray
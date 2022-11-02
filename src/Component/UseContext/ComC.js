import React, { useContext } from 'react'
import { BioData } from './ComA';

const ComC = () => {
    // consumers -> 3
    const name = useContext(BioData);
  return <h1>hello Abhijeet { name }</h1>
}

export default ComC

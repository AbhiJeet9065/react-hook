import React, { createContext } from 'react'
import ComB from './ComB';

// Context -> 1
const BioData = createContext();

const ComA = () => {
  return (
    // Provider -> 2
    <BioData.Provider value={"Khan"}>
        <ComB />
    </BioData.Provider>
  )
}

export default ComA
export { BioData };

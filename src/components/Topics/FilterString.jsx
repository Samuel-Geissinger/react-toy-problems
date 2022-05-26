import React, { useState } from 'react'

export const FilterString = () => {
  const names = [ "James", "Jessica", "Melody", "Tyler", "Blake", "Jennifer", "Mark", "Maddy" ];
  
  
  const [unFilterdArray, setUnFilterdArray] = useState([...names]);
  const [userInput, setUserInput] = useState('');
  const [filteredArray, setFilteredArray] = useState([]);
  
  
  const handleUserInput = e => {
    setUserInput(e.target.value);
  }
  
  const handleClick = () => {
    const newArr = [];
    for (let i = 0; i < unFilterdArray.length; i++) {
      const element = unFilterdArray[i];
      if (element.includes(userInput)) {
        newArr.push(element);
      }  
    }
    setFilteredArray([...newArr]);
  }

  const makeString = (arr) => {
    return `[ ${arr.map(e => `"${e}"`).join(', ')} ]`;
  }

  return (
    <div className='puzzleBox filterObjectPB'>
      <h4>Filter String</h4>
      <span className='puzzleText'>Names: {makeString(unFilterdArray)}</span>
      <input className='inputLine' onChange={handleUserInput}></input>
      <button className='confirmationButton' onClick={handleClick}>Filter</button>
      <span className='resultsBox filterObjectRB'>Filtered Names: {makeString(filteredArray)}</span>
    </div>
  )
}

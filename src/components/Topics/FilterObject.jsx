import React, { useState } from 'react'

export const FilterObject = () => {
  const objArr = [ { "name": "Jimmy Joe", "title": "Hack0r", "age": 12 }, { "name": "Jeremy Schrader", "age": 24, "hairColor": "brown" }, { "name": "Carly Armstrong", "title": "CEO" } ];
  
  const [unFilterdArray, setUnFilterdArray] = useState(objArr);
  const [userInput, setUserInput] = useState('');
  const [filteredArray, setFilteredArray] = useState('');
  
  const handleUserInput = e => {
    setUserInput(e.target.value);
  }

  const handleClick = () => {
    const filterArray = [];
    for (let i = 0; i < unFilterdArray.length; i++) {
      if (unFilterdArray[i][userInput]) {
        filterArray.push(unFilterdArray[i]);
      }
    }
    setFilteredArray(JSON.stringify(filterArray));
  }

  return (
    <div className='puzzleBox filterObjectPB'>
      <h4>Filter Object</h4>
      <span className='puzzleText'>Original: {JSON.stringify(unFilterdArray)}</span>
      <input className='inputLine' onChange={handleUserInput}></input>
      <button className='confirmationButton' onClick={handleClick}>Filter</button>
      <span className='resultsBox filterObjectRB'>{filteredArray}</span>
    </div>
  )
}

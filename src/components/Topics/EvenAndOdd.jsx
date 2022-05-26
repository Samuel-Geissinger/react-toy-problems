import React, { useState } from 'react'

export const EvenAndOdd = () => {
  const [evenArray, setEvenArray] = useState([]);
  const [oddArray, setOddArray] = useState([]);
  const [userInput, setUserInput] = useState('');
  
  const handleUserInput = e => {
    setUserInput(e.target.value);
  }
    
  const checkValues = () => {
    const copyEven = [];
    const copyOdd = [];
    const userInputArray = userInput.split(',');
    
    for (let i = 0; i < userInputArray.length; i++) {
      const number = +userInputArray[i].trim();
      
      if (number % 2 === 0) {
        copyEven.push(number);
      } else {
        copyOdd.push(number);
      }
    }
    
    setEvenArray(`[${copyEven.join(', ')}]`);
    setOddArray(`[${copyOdd.join(', ')}]`);
  }

  return (
    <div className='puzzleBox evenAndOddPB'>
        <h4>Evens and Odds</h4>
        <input className='inputLine' onChange={handleUserInput}></input>
        <button className='confirmationButton' onClick={checkValues}>Split</button>
        <span className='resultsBox'>Evens: {evenArray}</span>
        <span className='resultsBox'>Odds: {oddArray}</span>
    </div>
  )
}

import React, { useState } from 'react'

export const Sum = () => {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [sum, setSum] = useState(null);

  const handleInput = (value, e) => {
    value(e.target.value);
  }

  const handleClick = () => {
    setSum(+number1 + +number2);
  }

  return (
    <div className='puzzleBox sumPB'>
      <h4>Sum</h4>
      <input type='number' className='inputLine' onChange={e => handleInput(setNumber1, e)} />
      <input type='number' className='inputLine' onChange={e => handleInput(setNumber2, e)} />
      <button className='confirmationButton' onClick={handleClick}>Add</button>
      <span className='resultsBox'>Sum: {sum}</span>
    </div>
  )
}

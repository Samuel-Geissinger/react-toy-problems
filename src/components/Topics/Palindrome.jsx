import React, { useState } from 'react'

export const Palindrome = () => {
  const [userInput, setUserInput] = useState('');
  const [palindrome, setPalindrome] = useState('');

  const handleUserInput = e => {
    setUserInput(e.target.value);
  }

  const handleClick = () => {
    const reverseString = [...userInput].reverse().join('');
    setPalindrome(userInput === reverseString ? 'TRUE' : 'FALSE');
  }

  return (
    <div className='puzzleBox filterStringPB'>
      <h4>Palindrome</h4>
      <input className='inputLine' onChange={handleUserInput}></input>
      <button className='confirmationButton' onClick={handleClick}></button>
      <span className='resultsBox'>Palindrome: {palindrome}</span>
    </div>
  )
}

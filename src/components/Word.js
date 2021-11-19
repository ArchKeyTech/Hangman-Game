import React from 'react'
import '../css/Word.css'

/**
 * Word function which displays all the guesses letters which match the letters
 * in the selected word
 * @param {*} props 
 * @returns 
 */
export function Word(props) {
    //reference states from App component as props
    const { selectedWord, correctGuesses} = props

    return (
        //checks which letters guessed are letters inside the word to guess.
        // returns the letter if it matches
        <div className="word" >
            {selectedWord.toLowerCase().split('').map( (letter, key) => {
                return (
                    <span className='guess' key={key} >
                    {correctGuesses.includes(letter) ? letter : ''}
                </span>
                )
            })}
        </div>
    )
}


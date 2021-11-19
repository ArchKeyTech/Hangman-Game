import React from 'react'
import '../css/WrongGuesses.css'

/**
 * WrongGuesses displays the wrong letters entered for the user to see
 * @param {*} props 
 * @returns 
 */
export function WrongGuesses(props) {

    //reference states from App component as props
    const { wrongGuesses} = props
    return (
        //displaying the wrong guessed letters in a container div
        //the list is constantly updated by use of the map()
        //the reduce function allows for placing commas after each entry
        <div className="wrong-guesses-container">
            <div >
                {wrongGuesses.length > 0 && <p className="Wrong-title">Incorrect Entries</p>}
                {wrongGuesses.map( (guess, key) => 
                    <span key={key}> {guess} </span>
                )
                .reduce((prevLetter, currLetter) => prevLetter === null ? 
                [currLetter] : [prevLetter, ', ', currLetter], null)}
            </div>
        </div>
    )
}


import React from "react";
import '../css/Result.css';


/**
 * Result function to display the result popup when game won or lost
 * @param {*} props 
 * @returns 
 */
export function Result (props) {

    //reference states from App component as props
    const {playAgain, wrongGuesses, selectedWord, correctGuesses} = props
    
    //function to display box
    function PopupResult(props){

        //return Result box 
        return (
            <div className="popup-result-box">
                <div className="result-box">
                    {props.content}
                </div>
            </div>
        )
    }

    /**
     * isWin checks if the game has been won yet
     * @returns 
     */
    function isWin (){

        /*
        this block of code checks whether the selected word has all
        the correct letters guessed, meaning the player won
        */
        let result = "win";
        selectedWord.split('').forEach(letter => {
            if(!correctGuesses.includes(letter)){
                result ="";
            }
        })
        
        return result;
    }


    /*the popup box only appears when a game is won or lost
        when Restart button inside pop up is clicked, 
        it references the playAgain function from App component
    */
    return (
        //checks if wrong guesses reached limit, displays 'You Lost' popup
        //checks if isWin returned "win", displays 'Congratulations' popup
    
        <>
        <div >
            {wrongGuesses.length === 10 &&  <PopupResult
            
            content={
            <>
                
                <h2 className="result-heading">You Lost !</h2>
                <p className="result-msg"> The correct hidden word was: {selectedWord}.
                 </p>
                <button className="close-btn" onClick={playAgain} > Replay </button>
            </>}
              
            />}
            
        </div>
        <div >
            {isWin() ==="win" && <PopupResult 
            content={
            <>
                
                <h1 className="result-heading">CONGRATULATIONS !</h1>
                <p className="result-msg"> You found the word: {selectedWord}!
                 </p>
                <button className="replay-btn" onClick={playAgain} > Replay </button>
            </>}
            />}
        </div>
        </>
        
    )
}

import React from "react";
import '../css/Help.css';


/**
 * Help function to display the Help popup message
 */
export function Help (props) {
    //reference states from App component as props
    const {togglePopup, isOpen, playAgain} = props

    //function to display box
    function Popup(props){

        //return Help box with 'X' close icon
        return (
            <div className="popup-box">
                <div className="box">
                    <span className="close-icon" onClick={props.handleClose}>x</span>
                    {props.content}
                </div>
            </div>
        )
    }
    

    return (

        //return the Help button and Restart button next to it
        //the popup box only appears when Help button is clicked, which references the togglePopup function from App component
        //when Restart button is clicked, it references the playAgain function from App component
        
        <div className="btn-div">
            <button onClick={togglePopup} type="button" className="help-btn">Help</button>
            {isOpen && <Popup
            content={<>
                <h2 className="rules-heading">Rules of Hangman !</h2>
                <p className="rules">You must guess the hidden word letter by letter.<br/>
                Every correct letter entered reveals a part of the word, <br/>
                while each wrong letter brings the stick figure to a brim fate.<br/>
                You are only allowed 10 wrong letters.<br/><br/> Good luck !
                 </p>
                <button className="close-btn" onClick={togglePopup} >Close</button>
              </>}
              handleClose ={togglePopup}
            />}
            <button className="restart-btn" onClick={playAgain}>Restart</button>
        </div>
    )
}

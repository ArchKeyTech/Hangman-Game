import React from 'react';
import '../css/Person.css';

/**
 * Person() dictates which image of the hangman figure is displayed 
 * @param {*} props 
 * @returns 
 */
export function Person (props) {
    //reference states from App component as props
    const {wrongGuesses} = props

    //switch statements to display each image based on how many wrong letter entered
    switch(wrongGuesses.length) {
        //each image is stored within its respective class styled in Person.css
        case 1:
            return (
                <div className="Person">
                    <div className="Person person-state2"></div>
                </div>
            )
        
            case 2:
            return (
                <div className="Person">
                    <div className="Person person-state3"></div>
                </div>
            )
            case 3:
            return (
                <div className="Person">
                    <div className="Person person-state4"></div>
                </div>
            )
            case 4:
            return (
                <div className="Person">
                    <div className="Person person-state5"></div>
                </div>
            )
            case 5:
            return (
                <div className="Person">
                    <div className="Person person-state6"></div>
                </div>
            )
            case 6:
            return (
                <div className="Person">
                    <div className="Person person-state7"></div>
                </div>
            )
            case 7:
            return (
                <div className="Person">
                    <div className="Person person-state8"></div>
                </div>
            )
            case 8:
            return (
                <div className="Person">
                    <div className="Person person-state9"></div>
                </div>
            )
            case 9:
            return (
                <div className="Person">
                    <div className="Person person-state10"></div>
                </div>
            )

            case 10:
            return (
                <div className="Person">
                    <div className="Person person-state11"></div>
                </div>
            )

            default:
                return (
                    <div className="Person">
                        <div className="Person person-state1"></div>
                    </div>
                )


    }
    
    
}


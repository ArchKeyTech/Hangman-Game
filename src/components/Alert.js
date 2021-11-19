import React from 'react'
import '../css/Alert.css'

/**
 * Alert() is used to display a message when player retypes the same correct letter
 * @param {*} props 
 * @returns 
 */
export function Alert (props) {
    //reference states from App component as props
    const {showMessage} = props;

    //displaying the alert text
    return (
        <div className={showMessage ? "alert-container" : "hide-alert"}>
            <p>Cannot enter letter twice !</p>
        </div>
    )
}


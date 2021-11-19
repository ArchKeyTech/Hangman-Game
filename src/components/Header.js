import React from 'react'
import '../css/Header.css'

/**
 * Header component to return header of the app
 * @returns 
 */
export function Header () {
    return (
        <div className="Header">
            <h1 className="Header-titles">HangMan Game !</h1>
            <p className="Header-titles" >Find the hidden word by entering a letter</p>
        </div>
    )
}


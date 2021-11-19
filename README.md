# Hangman-Game
A fun attempt at creating a simple hangman game using ReactJS

## How to install the game

Download the ZIP file of the code or Git Clone from your terminal. Then, navigate to the directory of the downloaded file, inside 'Hangman-game'. Using your text editor or your terminal, type` npm install`. This will setup the node_modules folder (make sure you are in the same directory where the package.json file is located)

## Launching the game

Once the install is complete, run `npm start` to launch the game in development mode.
This will launch the game in the browser with server [http://localhost:3000](http://localhost:3000).

## Rules of the game

The aim of the game is to figure out the hidden word by guessing it letter by letter.
The player has a limit of 10 wrong guesses, after which they lose.
Once all the letters from the hidden word have been found, the game is won.

## Game Mechanics

Once on the game launches, every letter entered will count as a guess. 
The correct guesses appear in the blue boxes, while the wrong guesses are listed at the bottom.
If a correct letter is entered twice, an alert message will pop-up to indicate the letter has already been used.


## Credit

Made by [Dan-Samuel Moleka](https://github.com/ArchKeyTechnique)

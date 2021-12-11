# Hangman-Game
A fun attempt at creating a simple hangman game using ReactJS

## Screenshots
UI:
![Screenshot from 2021-12-11 17-07-45](https://user-images.githubusercontent.com/50621192/145681558-e675b55e-0f38-41ec-a74a-be776d37bf6d.png)

Correct word guess:
![Screenshot from 2021-12-11 17-09-22](https://user-images.githubusercontent.com/50621192/145681583-c24a1bc6-d9d1-4af6-ab71-cbe0ba43c32d.png)

Incorrect word guess:
![Screenshot from 2021-12-11 17-09-35](https://user-images.githubusercontent.com/50621192/145681607-d0afc936-205e-4a8e-9f63-81aa53362b62.png)

Help section:
![Screenshot from 2021-12-11 17-09-42](https://user-images.githubusercontent.com/50621192/145681619-e6189480-40b9-4d7b-ae4b-4203719cb09d.png)


## How to install the game

Download the ZIP file of the code or Git Clone from your terminal. Then, navigate to the directory of the downloaded file, inside 'Hangman-game'. Using your text editor or your terminal, type` npm install`. This will setup the node_modules folder (make sure you are in the same directory where the package.json file is located)

## Launching the game

Once the install is complete, run `npm start` to launch the game in development mode.
This will launch the game in the browser with server [http://localhost:3000](http://localhost:3000).

## Launching via Heroku

Click the link to play via Heroku - https://hangman-app626.herokuapp.com/

## Rules of the game

The aim of the game is to figure out the hidden word by guessing it letter by letter.
The player has a limit of 10 wrong guesses, after which they lose.
Once all the letters from the hidden word have been found, the game is won.

## Game Mechanics

Once on the game launches, every letter entered will count as a guess. 
The correct guesses appear in the blue boxes, while the wrong guesses are listed at the bottom.
If a correct letter is entered twice, an alert message will pop-up to indicate the letter has already been used.


## Credit

By [Dan-Samuel Moleka](https://github.com/ArchKeyTechnique)

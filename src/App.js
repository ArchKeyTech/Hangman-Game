import React from 'react';
import {Header} from './components/Header';
import {Person} from './components/Person';
import {WrongGuesses} from './components/WrongGuesses';
import {Word} from './components/Word';
import dictionary from './dictionary.txt'
import {Alert} from './components/Alert';
import { Help } from './components/Help';
import { Result } from './components/Result';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap';

//creating list to store all dictionary words
let wordList =[];

/**
 * the App class to act as the parent component
 * for Help, Result, Alert, Header, Person, Word and WrongGuesses components
 */
class App extends React.Component {

  constructor(){
    super();
    /*
    the handle functions to control the game's states
    */
    this.handleGuesses = this.handleGuesses.bind(this);
    this.setCorrectGuesses = this.setCorrectGuesses.bind(this);
    this.setWrongGuesses = this.setWrongGuesses.bind(this);
    this.setShowMessage = this.setShowMessage.bind(this);
    this.togglePopup = this.togglePopup.bind(this);
    this.restart = this.restart.bind(this);
    this.gameEnd = this.gameEnd.bind(this);
    

    //the game's states
    this.state = {
      //word picked from dictionary
      selectedWord: '',
      //is game still being played or paused or over
      playable: true,
      //array for correct letters
      correctGuesses: [],
      //array for wrong letters
      wrongGuesses:  [],
      //show alert message when letter is repeated
      showMessage: false,
      //is Help pop-up open
      isOpen: false,
      //result of the game
      result: 'win'
    }

  }


  //handle function to restart the game (it resets all state values to default)
  restart (){
    this.setState({
      selectedWord: wordList[Math.floor(Math.random() * wordList.length)],
      playable: true,
      correctGuesses: [],
      wrongGuesses:  [],
      showMessage: false,
      isOpen: false,
      result: 'win'
    })
  }

  //handle function which updates the correct letters array with a new letter
  setCorrectGuesses(correctGuesses, letter){
    this.setState({
      correctGuesses:[...correctGuesses, letter]
    }) 
  }

  //handle function which updates the wrong letters array with a new letter
  setWrongGuesses(wrongGuesses, letter){
    this.setState({
      wrongGuesses:[...wrongGuesses, letter]
    }) 
  }

  //handle function to show or hide alert message for repeated letters
  setShowMessage () {
    this.setState({
      showMessage: true,
    })
    //timeout used for the alert message is to be displayed for 2 seconds
    setTimeout(() => {
      this.setState({
        showMessage: false,
      });
    }, 2000)
    
  }

  //handle function to turn playbale to false (meaning game has ended, win/loss)
  gameEnd(){

    this.setState({
      playable: false
      
    })
  }


  //handle function to toggle Help button popup (it also turns off playable while popup is up)
  togglePopup (){
    this.setState({
      isOpen: !this.state.isOpen,
      playable: !this.state.playable
    })
  }
  
  //handle function for when letters/keys are entered. handles keydown events
  handleGuesses(ev){

    //dictionary word to guess
    const selectedWord = this.state.selectedWord.toLowerCase();
    //correct letters array
    const correctGuesses = this.state.correctGuesses;
    //wrong letters array
    const wrongGuesses = this.state.wrongGuesses;
    //playable state
    const playable = this.state.playable;

    //the event's key and keycode
    const {key, keyCode} = ev;

    /*
    this block of code checks whether the selected word has all
    the correct letters guessed, meaning the player won
    */
    let result = this.state.result;
    selectedWord.split('').forEach(letter => {
      //everytime a letter is entered we check if the correct letters array
      //has all the letters from the word, if not we keep 'result' blank
      //(indicating the game is not won yet)
        if(!correctGuesses.includes(letter)){
            result ="";
        }
    })

    //if player reached 10 wrong guesses or if game is won
    if (wrongGuesses.length === 10 || result === "win"){
      //we end the game
      this.gameEnd();
    }

    
    //else if game is still playable
    else {
      //check if keys entered are alphabets or the dash '-'
      if (playable && ((keyCode >= 65 && keyCode <= 90) || keyCode ===189 )) {
        //make each key lowercase
        const letter = key.toLowerCase();
  
        
        //if letter clicked is inside word
        if (selectedWord.includes(letter)) {
          //if the letter clicked is not yet inside correctGuesses array, we add it
          if (!correctGuesses.includes(letter)) {
            this.setCorrectGuesses(correctGuesses, letter);
          }
          else {
            //this letter has already been used, display alert message
            this.setShowMessage();
          }
  
        }
        //else if the letter is not inside the word (therefore its a wrong guess)
        else {
          //if the letter clicked is not yet inside wrongGuesses array, we add it
          if (!wrongGuesses.includes(letter)){
  
            this.setWrongGuesses(wrongGuesses, letter);
          }
  
        }
      }
    }
    
    


  }

  //componentdidmount used to fetch the words from dictionary text file when component is mounted
  componentDidMount(){
    fetch(dictionary)
    .then(res => res.text())
    .then( (result) => {

      const textByLine = result.split("\n");
      wordList = textByLine.slice(textByLine.indexOf("START")+1);
      const word = wordList[Math.floor(Math.random() * wordList.length)];

      this.setState ({
        selectedWord: word 
      });
    });

    //calling the handleGuesses function as an event listener
    window.addEventListener('keydown', this.handleGuesses);

    
  }

  //remove handleGuesses evenet listener when componount unmounts
  componentWillUnmount(){
    window.removeEventListener('keydown', this.handleGuesses);
  }


  //render the App component
  render (){
    return (
      <>
      <Header/>
      <Container className="App-container">
        
      <div className="game-container">
        <Word wrongGuesses = {this.state.wrongGuesses} selectedWord={this.state.selectedWord} correctGuesses={this.state.correctGuesses} />
        <Alert showMessage={this.state.showMessage}/>
        <Person wrongGuesses = {this.state.wrongGuesses}/>
        <Help togglePopup ={this.togglePopup} isOpen={this.state.isOpen} playAgain={this.restart}/>
        <WrongGuesses wrongGuesses = {this.state.wrongGuesses}/>
        <Result correctGuesses = {this.state.correctGuesses} wrongGuesses={this.state.wrongGuesses} 
        playAgain={this.restart} selectedWord = {this.state.selectedWord}/>
        
      </div>
      </Container>
   
      </>
    );
  }
  
}

//export App component
export default App;

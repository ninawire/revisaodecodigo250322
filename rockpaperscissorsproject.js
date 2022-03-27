/*Rock, Paper, or Scissors
Rock paper scissors is a classic two player game. Each player chooses either rock, paper, or scissors. The items are compared, and whichever player chooses the more powerful item wins.

The possible outcomes are:

Rock destroys scissors.
Scissors cut paper.
Paper covers rock.
If there’s a tie, then the game ends in a draw.
Our code will break the game into four parts:

Get the user’s choice.
Get the computer’s choice.
Compare the two choices and determine a winner.
Start the program and display the results.

The user should be able to choose ‘rock’, ‘paper’, or ‘scissors’ when the game starts.

Using const and arrow function syntax, create a function named getUserChoice that takes a single parameter userInput.
Since a user can pass in a parameter, such as ‘Rock’ or ‘rock’ with different capitalizations, begin by utilizing JavaScript’s toLowerCase() function to make the userInput all lowercase. 
When getting the user’s choice, you should also check to make sure that the user typed a valid choice: ‘rock’, ‘paper’, or ‘scissors’.

Inside getUserChoice(), write an if/else statement that makes sure the userInput is either 'rock', 'paper', or 'scissors'. If it does, then return the userInput.*/
let getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
        return userInput;
    } else {
        return 'Not a valid option, please choose rock, paper or scissors';
    }
}

 /*Now we need to have the computer make a choice.

Create a new function named getComputerChoice with no parameters. Inside its block, utilize Math.random() and Math.floor() to get a whole number between 0 and 2. Then, depending on the number, return either 'rock', 'paper', or 'scissors'.*/

const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random()*3);
    switch (randomNumber) {
        case 0 :
            return 'rock';
        case 1 :
            return 'paper';
        case 2 :
            return 'scissors';
    }
}

/*Now it’s time to determine a winner.

Create a function named determineWinner that takes two parameters named userChoice and computerChoice. This function will compare the two choices played and then return if the human player won, lost, or tied.*/

const determineWinner = (userChoice, computerChoise) => {
    if (userChoice === computerChoise) {
        return `You both choose ${userChoice} and is a tie!`;
    }

    if (userChoice === 'rock') {
        if (computerChoise === 'paper') {
            return 'You choose rock and computer choose paper, you lost!';
        } else {
            return 'You choose rock and computer choose scissors, you won!';
        }
    }

    if (userChoice === 'paper') {
        if (computerChoise === 'scissors') {
            return 'You choose paper and computer choose scissors, you lost!';
        } else {
            return 'You choose paper and computer choose rock, you won!';
        }
    }

    if (userChoice === 'scissors') {
        if (computerChoise === 'rock') {
            return 'You choose scissors and computer choose rock, you lost!';
        } else {
            return 'You choose scissors and computer choose paper, you won!';
        }
    }
}
/*Everything is set up. Now you need to start the game and log the results. Create a function named playGame.*/
const playGame = () => {
    const userChoice = getUserChoice('paper');
    const computerChoice = getComputerChoice();
    console.log(determineWinner(userChoice, computerChoice));
}

playGame();
playGame();
playGame();
playGame();
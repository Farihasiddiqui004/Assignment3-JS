
//  practice exercise 6.1

function add(a, b) {
    let c = a + b;
    return c;
}
const result = add(8, 9)
console.log(result);

// // 2.
const e = 10;
const f = 15;

// // 3.
const result1 = add(e, f);
console.log(result1);

// // 4.
const x = 20;
const y = 30;

const result2 = add(x, y);


console.log(result2);

//practice exercise 6.2

let stationary = ['pen', 'pencil', 'eraser', 'sharpner', 'ruler', 'paper', 'marker'];
function array() {
    let userInput = prompt('Enter a name :');
    let pick = Math.floor(Math.random() * stationary.length);
    console.log(`User Input: ${userInput}, Random Item: ${stationary[pick]}`);
}

array();

// practice exercise 6.3
let number1 = 45;
let number2 = 20;

let operator = '+';

function calculator(num1, num2, op = '+') {
    if (op === 'add' || op === '+') {
        return num1 + num2;
    } else if (op === 'subtract' || op === '-') {
        return num1 - num2;
    } else {
        return num1 + num2;
    }
}
console.log(`Result of addition: ${calculator(number1, number2, operator)}`);

operator = '-';
console.log(`Result of subtraction: ${calculator(number1, number2, operator)}`);

// // practice problem 4.5


let prize = Number(prompt("Select a number between 0 and 10:"));
let outputMessage = "My Selection ";
let prizeMessage;

switch (prize) {
    case 0:
        prizeMessage = "You get 10k cash.";
        break;
    case 1:
        prizeMessage = "You get a smartphone.";
        break;
    case 2:
        prizeMessage = "You get a earpods.";
        break;
    case 3:
        prizeMessage = "You get a laptop.";
        break
    case 4:
        prizeMessage = "You get a dinner set.";
        break;
    case 5:
        prizeMessage = "you get a smart Watch.";
        break;
    case 6:
        prizeMessage = "You get a notebook.";
        break;
    case 7:
        prizeMessage = "You get a ipad.";
        break;
    case 8:
        prizeMessage = "You get a gift card.";
        break;
    case 9:
        prizeMessage = "You get a paintbrush set.";
        break;
    case 10:
        prizeMessage = "You get a surprise box!";
        break;
    default:
        prizeMessage = "Invalid selection. Please select a number between 0 and 10.";
        break;
}
alert(outputMessage + prize + ": " + prizeMessage);

//Evaluating a number game

const dynamicNum = 6;
let userNum = parseFloat(prompt("Enter a number."));

if (userNum > dynamicNum) {
    alert(`${userNum} is greater than ${dynamicNum}.`);
}
if (userNum === dynamicNum) {
    alert(`${userNum} is equal to ${dynamicNum}.`);
}
if (userNum < dynamicNum) {
    alert(`${userNum} is less than ${dynamicNum}.`);
}

// //Friend checker game

let userName = prompt("Enter a name:");

let message;

switch (userName.toLowerCase()) {
    case 'mahira':
        message = `${userName} is a friend.`;
        break;
    case 'fatima':
        message = `${userName} is a friend.`;
        break;
    case 'tamsaal':
        message = `${userName} is a friend.`;
        break;
    case 'ayesha':
        message = `${userName} is a friend.`;
        break;
    default:
        message = `${userName} is not my friend.`;
        break;
}
console.log(message);


// Rock paper scissors game

function game() {
    const choices = ["rock", "paper", "scissors"];
    const playerOptionIdx = Math.floor(Math.random() * 3);
    const computerOptionIdx = Math.floor(Math.random() * 3);
    let playerOption = choices[playerOptionIdx];
    let computerOption = choices[computerOptionIdx];

    // Initialize scores
    let computerScore = 0;
    let playerScore = 0;

    let responseMessage = `Player's choice: ${playerOption} \nComputer's choice: ${computerOption}\n`;

    // Determine the result
    if (playerOption === computerOption) {
        responseMessage += "It's a tie!";
    } else if (playerOption === "rock") {
        if (computerOption === "scissors") {
            responseMessage += "Player won!";
            playerScore++;
        } else {
            responseMessage += "Computer won!";
            computerScore++;
        }
    } else if (playerOption === "paper") {
        if (computerOption === "rock") {
            responseMessage += "Player won!";
            playerScore++;
        } else {
            responseMessage += "Computer won!";
            computerScore++;
        }
    } else if (playerOption === "scissors") {
        if (computerOption === "paper") {
            responseMessage += "Player won!";
            playerScore++;
        } else {
            responseMessage += "Computer won!";
            computerScore++;
        }
    }

    console.log(responseMessage);
    console.log(`Player score: ${playerScore}`);
    console.log(`Computer score: ${computerScore}`);
}

game();











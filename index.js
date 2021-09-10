const inquirer = require('inquirer');

let players = ["X", "O"]
let playerXTurn = false;
let playerOTurn = false;

let board = []

function startGame() {

    board = [[1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]];

    console.log('\n')
    console.log("New Game Of Tic Tac Toe!")
    console.log('\n')
    randomizeStartingPlayer();

    decideTurn();

}

function randomizeStartingPlayer() {
    const randomIndex = Math.floor(Math.random() * 2);
    if (players[randomIndex] === "X") {
        playerXTurn = true
    } else {
        playerOTurn = true;
    }
    return players[randomIndex];
}

async function playerMove(player) {

    // Create array of available moves for player
    let avaibleMoves = [];
    for (let row of board) {
        for (let i = 0; i < row.length; i++) {
            if (row[i] !== "O" && row[i] !== "X") {
                avaibleMoves.push(row[i])
            }
        }
    }
    // Check if game is a draw
    if (avaibleMoves.length === 0) {
        console.log("Game is a draw.")
        console.log('\n')
        return playagain()
    }
    console.log('\n')
    console.log(`Player ${player} turn:`)

    console.log('\n')
    console.log("", board[0], '\n', board[1], '\n', board[2], '\n')

    const inputChoice = await inquirer
        .prompt([
            {
                type: 'list',
                name: 'arrayIndex',
                message: 'Which spot do you want?',
                choices: avaibleMoves
            }
        ])
    for (let row of board) {
        for (let i = 0; i < row.length; i++) {
            if (row[i] === inputChoice.arrayIndex) {
                row[i] = player
            }
        }
    }
    checkWinner(player)

}
startGame()

function checkWinner(player) {



    // first column win
    if (board[0][0] === board[1][0] && board[0][0] === board[2][0]) {
        console.log(`player ${player} wins!`)
        console.log('\n')
        return playagain()
    }
    // second column win
    if (board[0][1] === board[1][1] && board[0][1] === board[2][1]) {
        console.log(`player ${player} wins!`)
        console.log('\n')
        return playagain()
    }
    // third column win
    if (board[0][2] === board[1][2] && board[0][2] === board[2][2]) {
        console.log(`player ${player} wins!`)
        console.log('\n')
        return playagain()
    }
    // diagnol left-right win
    if (board[0][0] === board[1][1] && board[0][0] === board[2][2]) {
        console.log(`player ${player} wins!`)
        console.log('\n')
        return playagain()
    }
    // diagnol right-left win
    if (board[0][2] === board[1][1] && board[0][0] === board[2][0]) {
        console.log(`player ${player} wins!`)
        console.log('\n')
        return playagain()
    }
    // first row win
    if (board[0][0] === board[0][1] && board[0][0] === board[0][2]) {
        console.log(`player ${player} wins!`)
        console.log('\n')
        return playagain()
    }
    // second row win
    if (board[1][0] === board[1][1] && board[1][0] === board[1][2]) {
        console.log(`player ${player} wins!`)
        console.log('\n')
        return playagain()
    }
    // third row win
    if (board[2][0] === board[2][1] && board[2][0] === board[2][2]) {
        console.log(`player ${player} wins!`)
        console.log('\n')
        return playagain()
    }
    else {
        decideTurn()

    }
}

function decideTurn() {
    if (playerXTurn) {
        // switch state to switch turns
        playerXTurn = !playerXTurn;
        playerOTurn = !playerOTurn;
        playerMove(players[0])
    } else {
        // switch state to switch turns
        playerXTurn = !playerXTurn;
        playerOTurn = !playerOTurn;
        playerMove(players[1])
    }
}

async function playagain() {
    const playerChoice = await inquirer
        .prompt([
            {
                type: 'list',
                name: 'playAgain',
                message: 'Would you like to play again?',
                choices: ["Yes", "No"]
            }
        ])
    if (playerChoice.playAgain === "Yes") {
        startGame()
    } else {
        console.log("Thank you for playing!")
        return
    }
}
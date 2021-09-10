const inquirer = require('inquirer');

let players = ["X", "O"]
let playerXTurn = false;
let playerOTurn = false;

let board = [[1, 2, 3],
[4, 5, 6],
[7, 8, 9]];

function startGame() {
    let gameOver = false;



    // console.log("", test[0], '\n', test[1], '\n', test[2], '\n')
    console.log('\n')
    console.log("New Game Of Tic Tac Toe!")
    console.log('\n')
    randomizeStartingPlayer();
    // console.log(`Player ${firstPlayer} goes first.`)


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
    console.log(`Player ${player} turn:`)
    let avaibleMoves = [];
    console.log('\n')
    console.log("", board[0], '\n', board[1], '\n', board[2], '\n')
    for (let row of board) {
        for (let i = 0; i < row.length; i++) {
            if (row[i] !== "O" && row[i] !== "X") {
                avaibleMoves.push(row[i])
            }
        }
    }

    const inputChoice = await inquirer
        .prompt([
            {
                type: 'list',
                name: 'name',
                message: 'Which spot do you want?',
                choices: avaibleMoves
            }
        ])
    for (let row of board) {
        for (let i = 0; i < row.length; i++) {
            if (row[i] === inputChoice.name) {
                row[i] = player
            }
        }
    }
    checkWinner(player)

}
startGame()

function checkWinner(player) {




    if (board[0][0] === board[1][0] && board[0][0] === board[2][0]) {
        console.log(`player ${player} wins!`)
    }
    if (board[0][1] === board[1][1] && board[0][1] === board[2][1]) {
        console.log(`player ${player} wins!`)
    }
    if (board[0][2] === board[1][2] && board[0][2] === board[2][2]) {
        console.log(`player ${player} wins!`)
    }
    if (board[0][0] === board[1][1] && board[0][0] === board[2][2]) {
        console.log(`player ${player} wins!`)
    }
    if (board[0][2] === board[1][1] && board[0][0] === board[2][0]) {
        console.log(`player ${player} wins!`)
    }
    else {
        decideTurn()

    }


    // switch (board) {
    //     case board[0][0] === board[1][0] && board[0][0] === board[2][0]:
    //         console.log(`Player ${player} is the winner`);
    //         gameOver === true
    //         break;
    //     default:
    //         console.log('default')
    // }
}

function decideTurn() {
    if (playerXTurn) {
        playerXTurn = !playerXTurn;
        playerOTurn = !playerOTurn;
        playerMove(players[0])
    } else {
        playerXTurn = !playerXTurn;
        playerOTurn = !playerOTurn;
        playerMove(players[1])
    }
}
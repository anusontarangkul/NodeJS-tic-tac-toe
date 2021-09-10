const inquirer = require('inquirer');

let players = ["X", "O"]

let board = [[1, 2, 3],
[4, 5, 6],
[7, 8, 9]];

function startGame() {
    let gameOver = false;



    // console.log("", test[0], '\n', test[1], '\n', test[2], '\n')
    console.log('\n')
    console.log("New Game Of Tic Tac Toe!")
    console.log('\n')
    let firstPlayer = randomizeStartingPlayer();
    console.log(`Player ${firstPlayer} goes first.`)


    firstPlayerMove(firstPlayer)

}

function randomizeStartingPlayer() {
    const randomIndex = Math.floor(Math.random() * 2);
    return players[randomIndex];
}

function firstPlayerMove(player) {
    let avaibleMoves = [];
    console.log('\n')
    console.log("", board[0], '\n', board[1], '\n', board[2], '\n')
    for (let row of board) {
        for (let i = 0; i < row.length; i++) {
            if (row[i] !== "O" || row[i] !== "X") {
                avaibleMoves.push(row[i])
            }
        }
    }

    inquirer
        .prompt([
            {
                type: 'list',
                name: 'name',
                message: 'Which spot do you want?',
                choices: avaibleMoves
            }
        ]).then(data => {
            for (let row of board) {
                for (let i = 0; i < row.length; i++) {
                    if (row[i] === data.name) {
                        row[i] = player
                    }
                }
            }
            console.log(board)
        })
}
startGame()
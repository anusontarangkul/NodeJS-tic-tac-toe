const inquirer = require('inquirer');

let players = ["Player 1", "Player 2"]

function startGame() {
    let row1 = ['', '', ''];
    let row2 = ['', '', ''];
    let row3 = ['', '', ''];

    console.log('\n')
    console.log("New Game Of Tic Tac Toe!")
    console.log('\n')
    let firstPlayer = selectStartingPlayer();
    console.log(`${firstPlayer} goes first.`)

    inquirer
        .prompt([
            {
                type: 'text',
                name: 'name',
                message: 'test'
            }
        ])
}

function selectStartingPlayer() {
    const randomIndex = Math.floor(Math.random() * 2);
    return players[randomIndex];
}
startGame()
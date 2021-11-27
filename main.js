let player_1 = '';
let player_2 = '';
let player1 = 'X';
let player2 = 'O';
let turns = 0;
let score_1 = 0;
let score_2 = 0;

//storing the play in this array and then writing function to compare the array for wins.
const grid = [null, null, null, null, null, null, null, null, null];
const winX = ['x', 'x', 'x'];
const winO = ['o', 'o', 'o'];
const winXString = JSON.stringify(winX);
const winOString = JSON.stringify(winO);
let tile = document.getElementById('play_field');

let player_1_turn = document.getElementById('player_1');
let player_2_turn = document.getElementById('player_2');

function reset() {
    document.location.href = '';
}

function addName(event) {
    let parent = event.target.parentElement;
    let playerName = parent.querySelector('.playerName').value;
    let name = parent.querySelector('.name');
    name.textContent = `${playerName} `;
    let input = parent.querySelector('input');
    player_1 = playerName;
    input.remove();
    parent.querySelector('button').style.opacity = '0.2';
}
function addName2(event) {
    let parent = event.target.parentElement;
    let playerName = parent.querySelector('.playerName').value;
    let name = parent.querySelector('.name');
    name.textContent = `${playerName} `;
    let input = parent.querySelector('input');
    player_2 = playerName;
    input.remove();
    parent.querySelector('button').style.opacity = '0.2';
}

function checkWins() {
    let firstRow = grid.slice(0, 3);
    let secondRow = grid.slice(3, 6);
    let thirdRow = grid.slice(6, 9);
    let array0 = grid.slice(0, 1);
    let array1 = grid.slice(1, 2);
    let array2 = grid.slice(2, 3);
    let array3 = grid.slice(3, 4);
    let array4 = grid.slice(4, 5);
    let array5 = grid.slice(5, 6);
    let array6 = grid.slice(6, 7);
    let array7 = grid.slice(7, 8);
    let array8 = grid.slice(8, 9);

    let column1 = array0.concat(array3, array6);
    let column2 = array1.concat(array4, array7);
    let column3 = array2.concat(array5, array8);

    let diagTopLeftBotRight = array0.concat(array4, array8);
    let diagTopRightBotLeft = array2.concat(array4, array6);

    let column1String = JSON.stringify(column1);
    let column2String = JSON.stringify(column2);
    let column3String = JSON.stringify(column3);
    let firstRowString = JSON.stringify(firstRow);
    let secondRowString = JSON.stringify(secondRow);
    console.log(secondRowString);
    let thirdRowString = JSON.stringify(thirdRow);
    let diagTopLeftBotRightString = JSON.stringify(diagTopLeftBotRight);
    let diagTopRightBotLeftString = JSON.stringify(diagTopRightBotLeft);

    if (
        winXString === column1String ||
        winXString === column2String ||
        winXString === column3String ||
        winXString === firstRowString ||
        winXString === secondRowString ||
        winXString === thirdRowString ||
        winXString === diagTopRightBotLeftString ||
        winXString === diagTopLeftBotRightString
    ) {
        let winner = document.getElementById('winner_score');
        winner.classList.add('winner');
        winner.textContent = player_1;
        // alert(`Congratulations ${player_1}! You got three in a row!`);
    } else if (
        winOString === column1String ||
        winOString === column2String ||
        winOString === column3String ||
        winOString === firstRowString ||
        winOString === secondRowString ||
        winOString === thirdRowString ||
        winOString === diagTopLeftBotRightString ||
        winOString === diagTopRightBotLeftString
    ) {
        let winner = document.getElementById('winner_score');
        winner.classList.add('winner');
        score_2++;
        winner.textContent = player_2;
        // alert(`Congratulations ${player_2}! You got three in a row!`);
    }
}
function checkTie() {
    let played = 0;
    for (let i = 0; i < tile.children.length; i++) {
        console.log(tile.children[i]);
        if (tile.children[i].classList.contains('played')) {
            played++;
            console.log(played);
        }
    }
    if (played == 9) {
        alert('No one Won (some call it a draw!)... Reset and try again');
        document.location.href = '';
    }
}
// create event to change from blank to assigned.

// //function to submit name - complete
// const button = document.

//toggle for X (player 1)
function inPlayToggleX() {
    var x = player_1_turn;
    x.classList.toggle('in_play');
}

// toggle for O (player 2)
function inPlayToggleO() {
    var o = player_2_turn;
    o.classList.toggle('in_play');
}
// Creating a toggle between player 1 and player 2 class.
// Each event once the class has been toggled will change where the points go and

tile.addEventListener('click', function (event) {
    if (event.target == tile) {
        alert('you must click tile');
        console.log('tile not clicked');
        return;
    }

    if (event.target.classList.contains('played')) {
        alert('This tile has already been played');
        console.log('already played');
        return;
    }

    if (player_1_turn == document.querySelector('.in_play')) {
        let position = event.target.getAttribute('Id');
        console.log(position);
        grid[position - 1] = 'x';
        event.target.textContent = 'X';

        event.target.classList.add('played', 'cross');
        inPlayToggleX();
        inPlayToggleO();
    } else if (player_2_turn == document.querySelector('.in_play')) {
        let position = event.target.getAttribute('Id');
        console.log(position);
        grid[position - 1] = 'o';
        event.target.textContent = 'O';
        console.log(typeof event);
        event.target.classList.add('played', 'knot');
        inPlayToggleX();
        inPlayToggleO();
    }
    console.log('finished first if Statement');
    turns++;
    checkWins();
    checkTie();
    console.log(winOString);
});

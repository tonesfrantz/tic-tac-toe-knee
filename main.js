let player_1 = '';
let player_2 = '';
let player1 = 'X';
let player2 = 'O';
let turns = 0;

//storing the play in this array and then writing function to compare the array for wins.
const grid = [null, null, null, null, null, null, null, null, null];

function checkWins() {
    if ((grid[0] === grid[1]) === grid[2]) {
        alert('Congratulations! YOU WIN!!!');
    } else if ((grid[3] === grid[4]) === grid[5]) {
        alert('Congratulations! YOU WIN!!!');
    } else if ((grid[6] === grid[7]) === grid[8]) {
        alert('Congratulations! YOU WIN!!!');
    } else if ((grid[0] === grid[4]) === grid[8]) {
        alert('Congratulations! YOU WIN!!!');
    } else if ((grid[2] === grid[4]) === grid[6]) {
        alert('Congratulations! YOU WIN!!!');
    } else if ((grid[0] === grid[3]) === grid[6]) {
        alert('Congratulations! YOU WIN!!!');
    } else if ((grid[1] === grid[4]) === grid[7]) {
        alert('Congratulations! YOU WIN!!!');
    } else if ((grid[2] === grid[5]) === grid[8]) {
        alert('Congratulations! YOU WIN!!!');
        return;
    }
}

// create event to change from blank to assigned.
let tile = document.getElementById('play_field');
let player_1_turn = document.getElementById('player_1');
let player_2_turn = document.getElementById('player_2');

// //function to submit name - complete
// const button = document.

//toggle for X (player 1)
function inPlayToggleX() {
    var x = player_1_turn;
    x.classList.toggle('in_play');
    console.log('inPlayToggleX');
}

// toggle for O (player 2)
function inPlayToggleO() {
    var o = player_2_turn;
    o.classList.toggle('in_play');
    console.log('inPlayToggleO');
}
// Creating a toggle between player 1 and player 2 class.
// Each event once the class has been toggled will change where the points go and

tile.addEventListener('click', function (event) {
    if (event.target == tile) {
        alert('you must click tile');
        console.log('you must click tile');
        return;
    }
    if (player_1_turn == document.querySelector('.in_play')) {
        console.log('inside if');
        let position = event.target.getAttribute('Id');
        console.log(position);
        grid[position - 1] = 'x';
        event.target.textContent = 'X';
        event.target.classList.add('played', 'cross');
        inPlayToggleX();
        inPlayToggleO();
        console.log('finished first if Statement');
        turns++;
        checkWins();
    }
    // event.target !== document.getElementsByClassName('played' || 'cross')
    else if (
        document.getElementById('player_2') ==
        document.querySelector('.in_play')
    ) {
        let position = event.target.getAttribute('Id');
        console.log(position);
        grid[position - 1] = 'o';
        event.target.textContent = 'O';
        console.log(typeof event);
        event.target.classList.add('played', 'knot');
        inPlayToggleX();
        inPlayToggleO();
        console.log('player_2 O');
        turns++;
        checkWins();
    }

    console.log(event.target);
    console.log(grid);
});

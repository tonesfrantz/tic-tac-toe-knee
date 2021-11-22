let player_1 = '';
let player_2 = '';
let player1 = 'X';
let player2 = 'O';
let turns = 0;

//storing the play in this array and then writing function to compare the array for wins.
const grid = [null, null, null, null, null, null, null, null, null];

// create event to change from blank to assigned.

let button = document.getElementById('play_field');
let player_1_turn = document.getElementById('player_1');
let player_2_turn = document.getElementById('player_2');

function inPlayToggleX() {
    var x = player_1_turn;
    x.classList.toggle('in_play');
    console.log('inPlayToggleX');
}

function inPlayToggleO() {
    var o = player_2_turn;
    o.classList.toggle('in_play');
    console.log('inPlayToggleO');
}
// Creating a toggle between player 1 and player 2 class.
// Each event once the class has been toggled will change where the points go and

button.addEventListener('click', function (event) {
    if (event.target == button) {
        alert('you must click tile');
        console.log('you must click tile');
        return;
    }
    if (player_1_turn == document.querySelector('.in_play')) {
        console.log('inside if');
        event.target.textContent = 'X';
        event.target.classList.add('played', 'cross');
        inPlayToggleX();
        inPlayToggleO();
        console.log('finished first if Statement');
        turns++;
    }
    // event.target !== document.getElementsByClassName('played' || 'cross')
    else if (
        document.getElementById('player_2') ==
        document.querySelector('.in_play')
    ) {
        event.target.textContent = 'O';
        console.log(typeof event);
        event.target.classList.add('played', 'knot');
        inPlayToggleX();
        inPlayToggleO();
        console.log('player_2 O');
        turns++;
    }
    console.log(event.target);
});

let player_1 = '';
let player_2 = '';
let player1 = 'X';
let player2 = 'O';

// create event to change from blank to assigned.

let button = document.getElementById('play_field');
let player_1_turn = document.getElementById('player_1');
let player_2_turn = document.getElementById('player_2');

for (i = 0; i < 9; i++) {
    console.log([i]);
    // player_1_turn.style.backgroundColor = 'red';
    // button.addEventListener('click', function (event) {
    //     if (event.target != document.getElementsByClassName('knot played')) {
    //         event.target.classList.add('cross', 'played');
    //         event.target.textContent = player1;
    //         player_1_turn.style.backgroundColor = '';
    //         player_2_turn.style.backgroundColor = 'red';
    //         return;
    //     } else if (event.target != document.getElementsByClassName('played')) {
    //         event.target.classList.add('knot', 'played');
    //         console.log(event.target.classList);
    //         player_2_turn.style.backgroundColor = '';
    //         player_1_turn.style.backgroundColor = 'red';
    //         return;
    //     } else {
    //         alert('You must play in a blank field');
    //     }

    //     // console.log(event.target);
    // });
}

// ther eshould be the loop for 9 turns.
//wiht-in each loop of x there should be the two function that execture.

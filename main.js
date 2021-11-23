let player_1 = '';
let player_2 = '';
let player1 = 'X';
let player2 = 'O';
let turns = 0;

//storing the play in this array and then writing function to compare the array for wins.
const grid = [null, null, null, null, null, null, null, null, null];
const winX = ['x', 'x', 'x'];
const winO = ['o', 'o', 'o'];
const winXString = JSON.stringify(winX);
const winOString = JSON.stringify(winO);
let tile = document.getElementById('play_field');
let player_1_turn = document.getElementById('player_1');
let player_2_turn = document.getElementById('player_2');
const resetButton = document.getElementById('reset');

// resetButton.addEventListener('click', function reset() {
//     console.log('reset clicked');
// });

function checkWins() {
    let firstRow = grid.slice(0, 3);
    console.log(firstRow);
    let secondRow = grid.slice(3, 6);
    console.log(secondRow);
    let thirdRow = grid.slice(6, 9);
    console.log(thirdRow);

    let array0 = grid.slice(0, 1);
    console.log(array0);
    let array1 = grid.slice(1, 2);
    console.log(array1);
    let array2 = grid.slice(2, 3);
    console.log(array2);
    let array3 = grid.slice(3, 4);
    console.log(array3);
    let array4 = grid.slice(4, 5);
    console.log(array4);
    let array5 = grid.slice(5, 6);
    console.log(array5);
    let array6 = grid.slice(6, 7);
    console.log(array6);
    let array7 = grid.slice(7, 8);
    console.log(array7);
    let array8 = grid.slice(8, 9);
    console.log(array8);

    let column1 = array0.concat(array3, array6);
    console.log(column1);
    let column2 = array1.concat(array4, array7);
    console.log(column2);
    let column3 = array2.concat(array5, array8);
    console.log(column3);

    let diagTopLeftBotRight = array0.concat(array4, array8);
    console.log(diagTopLeftBotRight);
    let diagTopRightBotLeft = array2.concat(array4, array6);
    console.log(diagTopRightBotLeft);
    //Strings of all the possibilities. (comparte them to the winX and winO);

    let column1String = JSON.stringify(column1);
    console.log(`column1 ${column1String}`);
    let column2String = JSON.stringify(column2);
    console.log(`column2 ${column2String}`);
    let column3String = JSON.stringify(column3);
    console.log(`column3 ${column3String}`);

    let firstRowString = JSON.stringify(firstRow);
    console.log(`firstRow ${firstRowString}`);
    let secondRowString = JSON.stringify(secondRow);
    console.log(`secondRow ${secondRowString}`);
    let thirdRowString = JSON.stringify(thirdRow);
    console.log(`thirdRow ${thirdRowString}`);

    let diagTopLeftBotRightString = JSON.stringify(diagTopLeftBotRight);
    console.log(
        `diagonal top left to bottom right ${diagTopLeftBotRightString}`
    );
    let diagTopRightBotLeftString = JSON.stringify(diagTopRightBotLeft);
    console.log(
        `diagonal top right to bottom left ${diagTopRightBotLeftString}`
    );

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
        tile.classList.add('delayed');
        alert(`Congratulations ${player_1}! You got three in a row!`);
        document.location.href = '';
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
        tile.classList.add('delayed');
        alert(`Congratulations ${player_2}! You got three in a row!`);
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
    // This is where you edit player 1 and 2 input for play.

    if (event.target.textContent == 'X') {
        alert('This tile has already been used by player 1');
        console.log('already played');
        return;
    }
    if (event.target.textContent == 'O') {
        alert('This tile has already been used by player 2');
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
        console.log('finished first if Statement');
        turns++;
        checkWins();
    }
    // event.target !== document.getElementsByClassName('played' || 'cross')
    else if (player_2_turn == document.querySelector('.in_play')) {
        let position = event.target.getAttribute('Id');
        console.log(position);
        grid[position - 1] = 'o';
        event.target.textContent = 'O';
        console.log(typeof event);
        event.target.classList.add('played', 'knot');
        inPlayToggleX();
        inPlayToggleO();
        turns++;
        checkWins();
    }

    console.log(event.target);
    console.log(grid);
});

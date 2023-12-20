let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let gameActive = true;
const squares = document.getElementsByClassName('cell');

function handleClick(index) {
    if (gameActive && board[index] === "") {
        board[index] = currentPlayer;
        document.getElementsByClassName("cell")[index].innerText = currentPlayer;
        
        if (checkWinner()) {
            document.getElementById("result").innerText = `Player ${currentPlayer} wins!`;
            gameActive = false;
        } else if (board.every(cell => cell !== "")) {
            document.getElementById("result").innerText = "Its a draw!";
            gameActive = false;
        } else {
            currentPlayer = currentPlayer === "X" ? "O" : "X";
        }
    }
}

function checkWinner() {
    // Check rows, columns, and diagonals
    for (let i = 0; i < 3; i++) {
        if (board[i * 3] === board[i * 3 + 1] && board[i * 3 + 1] === board[i * 3 + 2] && board[i * 3] !== "") {
            return true;
        }
        if (board[i] === board[i + 3] && board[i + 3] === board[i + 6] && board[i] !== "") {
            return true;
        }
    }

    if ((board[0] === board[4] && board[4] === board[8] && board[0] !== "") ||
        (board[2] === board[4] && board[4] === board[6] && board[2] !== "")) {
        return true;
    }

    return false;
}
function restartButton() {
    for(let i = 0; i < squares.length; i++) {
     squares[i].textContent = "";
    currentPlayer = "X";
    document.getElementById("result").innerText =" ";
    }
}

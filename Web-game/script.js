const SECRET = "REACT";

const board = document.getElementById("board");
const form = document.getElementById("form");
const input = document.getElementById("input");
const message = document.getElementById("message");

let attempts = 0;

form.addEventListener("submit", function (e) {

  e.preventDefault();

  const guess = input.value.toUpperCase();

  if (guess.length !== 5) {
    return;
  }

  createRow(guess);

  attempts++;

  if (guess === SECRET) {
    message.textContent = "Você venceu!";
    input.disabled = true;
  }

  if (attempts >= 6 && guess !== SECRET) {
    message.textContent = "Você perdeu!";
    input.disabled = true;
  }

  input.value = "";
});

function createRow(word) {

  const row = document.createElement("div");

  row.classList.add("row");

  for (let i = 0; i < word.length; i++) {

    const tile = document.createElement("div");

    tile.classList.add("tile");

    tile.textContent = word[i];

    if (word[i] === SECRET[i]) {

      tile.classList.add("correct");

    } else if (SECRET.includes(word[i])) {

      tile.classList.add("present");

    } else {

      tile.classList.add("absent");

    }

    row.appendChild(tile);
  }

  board.appendChild(row);
}
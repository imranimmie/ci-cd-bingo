// 🎲 Random number between 1 and 100
const secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
  const input = document.getElementById('guessInput').value;
  const guess = Number(input);
  const message = document.getElementById('message');

  attempts++;

  if (!guess || guess < 1 || guess > 100) {
    message.innerText = "⛔ Enter a number between 1 and 100!";
    return;
  }

  if (guess === secretNumber) {
    message.innerText = `🎉 Correct! You guessed it in ${attempts} tries.`;
    message.style.color = "green";
  } else if (guess < secretNumber) {
    message.innerText = "📈 Too low! Try again.";
    message.style.color = "orange";
  } else {
    message.innerText = "📉 Too high! Try again.";
    message.style.color = "orange";
  }
}

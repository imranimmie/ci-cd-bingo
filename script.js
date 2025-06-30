const wordList = ['apple', 'grape', 'smile', 'flame', 'candy', 'beach'];
let targetWord = wordList[Math.floor(Math.random() * wordList.length)];
let currentRow = 0;
let currentTile = 0;
let guesses = Array(6).fill('').map(() => '');

const gameBoard = document.getElementById('game-board');
const keyboard = document.getElementById('keyboard');
const message = document.getElementById('message');

// Draw game grid
for (let i = 0; i < 6; i++) {
  const row = document.createElement('div');
  row.className = 'row';
  for (let j = 0; j < 5; j++) {
    const tile = document.createElement('div');
    tile.className = 'tile';
    tile.setAttribute('id', `tile-${i}-${j}`);
    row.appendChild(tile);
  }
  gameBoard.appendChild(row);
}

// Draw keyboard
'QWERTYUIOPASDFGHJKLZXCVBNM'.split('').forEach(letter => {
  const key = document.createElement('div');
  key.className = 'key';
  key.textContent = letter;
  key.onclick = () => addLetter(letter);
  keyboard.appendChild(key);
});

const enterKey = document.createElement('div');
enterKey.className = 'key';
enterKey.textContent = '⏎';
enterKey.onclick = submitGuess;
keyboard.appendChild(enterKey);

const delKey = document.createElement('div');
delKey.className = 'key';
delKey.textContent = '⌫';
delKey.onclick = deleteLetter;
keyboard.appendChild(delKey);

// Game logic
function addLetter(letter) {
  if (currentTile < 5 && currentRow < 6) {
    guesses[currentRow] += letter.toLowerCase();
    document.getElementById(`tile-${currentRow}-${currentTile}`).textContent = letter;
    currentTile++;
  }
}

function deleteLetter() {
  if (currentTile > 0) {
    currentTile--;
    guesses[currentRow] = guesses[currentRow].slice(0, -1);
    document.getElementById(`tile-${currentRow}-${currentTile}`).textContent = '';
  }
}

function submitGuess() {
  const guess = guesses[currentRow];
  if (guess.length !== 5) {
    showMessage('⛔ Enter 5 letters');
    return;
  }

  const guessArr = guess.split('');
  const targetArr = targetWord.split('');

  for (let i = 0; i < 5; i++) {
    const tile = document.getElementById(`tile-${currentRow}-${i}`);
    if (guessArr[i] === targetArr[i]) {
      tile.classList.add('correct');
    } else if (targetArr.includes(guessArr[i])) {
      tile.classList.add('present');
    } else {
      tile.classList.add('absent');
    }
  }

  if (guess === targetWord) {
    showMessage(`🎉 Correct! The word was "${targetWord.toUpperCase()}"`);
  } else if (currentRow === 5) {
    showMessage(`❌ Game Over! Word: "${targetWord.toUpperCase()}"`);
  } else {
    currentRow++;
    currentTile = 0;
  }
}

function showMessage(msg) {
  message.textContent = msg;
}

function restartGame() {
  window.location.reload();
}


function generateBingo() {
  const card = document.getElementById("bingoCard");
  card.innerHTML = "";
  const numbers = Array.from({ length: 75 }, (_, i) => i + 1);
  shuffle(numbers);
  for (let i = 0; i < 25; i++) {
    const cell = document.createElement("div");
    cell.className = "cell";
    cell.textContent = numbers[i];
    card.appendChild(cell);
  }
}
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}


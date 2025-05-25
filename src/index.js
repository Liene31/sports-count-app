let count = 0;
let numberEl = document.getElementById("number");
let entriesEl = document.getElementById("save-el");

function incrementNumber() {
  count += 1;
  numberEl.innerText = count;
}

function displayEntries() {
  let countStr = ` ${count} -`;
  entriesEl.innerText += countStr;
  numberEl.innerText = 0;
  count = 0;
}

let incrementButton = document.getElementById("increment-btn");
incrementButton.addEventListener("click", incrementNumber);

let saveButton = document.getElementById("save-btn");
saveButton.addEventListener("click", displayEntries);

//StopWatch

let timerCount = 0;

while (timerCount < 10) {
  timerCount += 1;
  console.log(timerCount);
}

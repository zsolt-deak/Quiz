var score = 0;
var nthQuestion = 1;
//question[question nr-1]  [0-question / 1-answers]  [0-a  1-b  2-c  3-d]  [4-correct answer]
let randomQ;
function random() {
  if (nthQuestion <= 18) {
    randomQ = Math.floor(Math.random() * questions.length);
    let questionNr = randomQ + 1;
    console.log("Intrebarea #" + questionNr);

    document.getElementById("Q").innerHTML = questions[randomQ][0];
    document.getElementById("A-btn").innerHTML = questions[randomQ][1][0];
    document.getElementById("B-btn").innerHTML = questions[randomQ][1][1];
    document.getElementById("C-btn").innerHTML = questions[randomQ][1][2];
    document.getElementById("D-btn").innerHTML = questions[randomQ][1][3];
  } else {
    document.getElementById("Q").innerHTML = " ";
    document.getElementById("A-btn").style.visibility = "hidden";
    document.getElementById("B-btn").style.visibility = "hidden";
    document.getElementById("C-btn").style.visibility = "hidden";
    document.getElementById("D-btn").style.visibility = "hidden";
    winloose();
  }
}

function updateScoreBoard() {
  nthQuestion++;
  document.getElementById("score").innerHTML = "Score: " + score + "/18";
  document.getElementById("nthQuestion").innerHTML ="Question: " + nthQuestion + "/18";
  document.getElementById("correctAnswer").innerHTML = questions[randomQ][0];

  random();
  if (nthQuestion === 19) {
    document.getElementById("nthQuestion").innerHTML = "18/18";
  }
}

function winloose() {
  if (score <= 15) {
    document.getElementById("Q").innerHTML = "Mai incearca!";
  }
  if (score >= 15) {
    document.getElementById("Q").innerHTML =
      "Felicitari! Ai luat examenul cu success";
  }
}

random();

const AButton = document.getElementById("A-btn");
const BButton = document.getElementById("B-btn");
const CButton = document.getElementById("C-btn");
const DButton = document.getElementById("D-btn");
const resetButton = document.getElementById("reset");

AButton.addEventListener("click", aclick);
function aclick() {
  if (nthQuestion <= 18) {
    if (questions[randomQ][1][4] == 0) {
      score++;
      document.getElementById("correctAnswer_").innerHTML = questions[randomQ][1][0];
      document.getElementById("correctIncorrect").innerHTML = "Raspunsul a fost corect!"
      updateScoreBoard();
    } else {
      document.getElementById("correctAnswer_").innerHTML =questions[randomQ][1][questions[randomQ][1][4]];
      document.getElementById("correctIncorrect").innerHTML ="Raspunsul: "+questions[randomQ][1][0] + " fost incorect! :"
      updateScoreBoard();
    }
  }
}

BButton.addEventListener("click", bclick);
function bclick() {
  if (nthQuestion <= 18) {
    if (questions[randomQ][1][4] == 1) {
      score++;
      document.getElementById("correctAnswer_").innerHTML =questions[randomQ][1][1];
      document.getElementById("correctIncorrect").innerHTML = "Raspunsul a fost corect!"
      updateScoreBoard();
    } else {
        document.getElementById("correctAnswer_").innerHTML =questions[randomQ][1][questions[randomQ][1][4]];
      document.getElementById("correctIncorrect").innerHTML ="Raspunsul: "+questions[randomQ][1][1] + " fost incorect! :"
      updateScoreBoard();
    }
  }
}

CButton.addEventListener("click", cclick);
function cclick() {
  if (nthQuestion <= 18) {
    if (questions[randomQ][1][4] == 2) {
      score++;
      document.getElementById("correctAnswer_").innerHTML = questions[randomQ][1][2];
      document.getElementById("correctIncorrect").innerHTML = "Raspunsul a fost corect!"
      updateScoreBoard();
    } else {
        document.getElementById("correctAnswer_").innerHTML =questions[randomQ][1][questions[randomQ][1][4]];
      document.getElementById("correctIncorrect").innerHTML ="Raspunsul: "+questions[randomQ][1][2] + " fost incorect! :"
      updateScoreBoard();
    }
  }
}

DButton.addEventListener("click", dclick);
function dclick() {
  if (nthQuestion <= 18) {
    if (questions[randomQ][1][4] == 3) {
      score++;
      document.getElementById("correctAnswer_").innerHTML =questions[randomQ][1][3];
      document.getElementById("correctIncorrect").innerHTML = "Raspunsul a fost corect!"
      updateScoreBoard();
    } else {
        document.getElementById("correctAnswer_").innerHTML =questions[randomQ][1][questions[randomQ][1][4]];
      document.getElementById("correctIncorrect").innerHTML ="Raspunsul: "+questions[randomQ][1][3] + " fost incorect! :"
      updateScoreBoard(); 
    }
  }
}

resetButton.addEventListener("click", resetClick);
function resetClick(){
    location.reload()
}


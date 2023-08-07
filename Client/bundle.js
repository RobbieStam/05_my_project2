(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const url = "http://localhost:3000/countries/random";

let currentCapital, currentCountry;
let score = 0;
const scoreText = document.querySelector("#score");

function displayScore() {
  scoreText.textContent = `Score: ${score}`
}

function fetchCountry(data) {

  const country = data;

  const textElement = document.querySelector("#question");
  textElement.textContent = country['name'];

  currentCapital = country['capital'];
  currentCountry = country['name'];
  // console.log(currentCapital);
}

function displayCountry() {
  fetch(url)
  .then(resp => resp.json())
  .then(fetchCountry);
}

function displayAnswerMessage(isCorrect) {
  answerMessage.style.visibility = 'visible';
  if (isCorrect) {
    answerMessage.textContent = `Correct answer!`;
    answerMessage.style.color = 'green';
  } else {
    answerMessage.textContent = `Incorrect, ${currentCapital} is the capital of ${currentCountry}`;
    answerMessage.style.color = 'firebrick';
  }
}

function checkAnswer(e) {
  e.preventDefault();
  const input = e.target.answer.value;
  if (input.toLowerCase() === currentCapital.toLowerCase()) {
    score++;
    displayAnswerMessage(true);
  } else {
    displayAnswerMessage(false);
  }
  e.target.answer.value = '';
  displayScore();
  displayCountry();
}

function displayTimer(timer, timerElement) {
  let minutes = Math.floor(timer / 60);
  let seconds = Math.floor(timer % 60);

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (seconds < 10) {
    seconds = `0${seconds}`;
  }

  timerElement.textContent= `${minutes}:${seconds}`;
}

function startTimer() {
  const timerElement = document.querySelector('#timer');
  let timer = 30; // set duration

  displayTimer(timer, timerElement); // initialise display
  
  // countdown
  var changeTimer = setInterval(function () {
    displayTimer(timer, timerElement);

    if (--timer < 0) {
      timer = 0;

      endGame();
      clearInterval(changeTimer);
    }
  }, 1000)
}

async function postScore(e) {
  const name = e.target.name.value;
  const finalScore = score;

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name: name,
      score: finalScore
    })
  }

  const response = await fetch(`https://http://localhost:3000/capitals_scores`, options)
  console.log(response)
  if (response.status === 201) {
    console.log(`201 true`)
  }
}

function startGame() {
  replayButton.style.visibility = "hidden";
  answerMessage.style.visibility = "hidden";
  submitButton.removeAttribute("disabled");
  score = 0;
  displayScore();
  displayCountry();
  startTimer();
}

function endGame() {
  // Get name and score
  dialog.showModal();

  submitButton.setAttribute("disabled", true);

  replayButton.style.visibility = "visible";
}

const answerMessage = document.querySelector('#response');

const form = document.querySelector('#country-guess');
form.addEventListener('submit', checkAnswer);

const dialog = document.getElementById("dialog");
const dialogEntry = document.getElementById("name");
dialogEntry.addEventListener("submit", postScore);

// Form cancel button closes the dialog box
const cancelButton = document.getElementById("cancel");
cancelButton.addEventListener("click", () => dialog.close("nameNotGiven"));

const replayButton = document.getElementById("replay");
replayButton.addEventListener("click", startGame)

const submitButton = document.querySelector('.submit-btn');

startGame();

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzdGF0aWMvanMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImNvbnN0IHVybCA9IFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL2NvdW50cmllcy9yYW5kb21cIjtcblxubGV0IGN1cnJlbnRDYXBpdGFsLCBjdXJyZW50Q291bnRyeTtcbmxldCBzY29yZSA9IDA7XG5jb25zdCBzY29yZVRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Njb3JlXCIpO1xuXG5mdW5jdGlvbiBkaXNwbGF5U2NvcmUoKSB7XG4gIHNjb3JlVGV4dC50ZXh0Q29udGVudCA9IGBTY29yZTogJHtzY29yZX1gXG59XG5cbmZ1bmN0aW9uIGZldGNoQ291bnRyeShkYXRhKSB7XG5cbiAgY29uc3QgY291bnRyeSA9IGRhdGE7XG5cbiAgY29uc3QgdGV4dEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3F1ZXN0aW9uXCIpO1xuICB0ZXh0RWxlbWVudC50ZXh0Q29udGVudCA9IGNvdW50cnlbJ25hbWUnXTtcblxuICBjdXJyZW50Q2FwaXRhbCA9IGNvdW50cnlbJ2NhcGl0YWwnXTtcbiAgY3VycmVudENvdW50cnkgPSBjb3VudHJ5WyduYW1lJ107XG4gIC8vIGNvbnNvbGUubG9nKGN1cnJlbnRDYXBpdGFsKTtcbn1cblxuZnVuY3Rpb24gZGlzcGxheUNvdW50cnkoKSB7XG4gIGZldGNoKHVybClcbiAgLnRoZW4ocmVzcCA9PiByZXNwLmpzb24oKSlcbiAgLnRoZW4oZmV0Y2hDb3VudHJ5KTtcbn1cblxuZnVuY3Rpb24gZGlzcGxheUFuc3dlck1lc3NhZ2UoaXNDb3JyZWN0KSB7XG4gIGFuc3dlck1lc3NhZ2Uuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcbiAgaWYgKGlzQ29ycmVjdCkge1xuICAgIGFuc3dlck1lc3NhZ2UudGV4dENvbnRlbnQgPSBgQ29ycmVjdCBhbnN3ZXIhYDtcbiAgICBhbnN3ZXJNZXNzYWdlLnN0eWxlLmNvbG9yID0gJ2dyZWVuJztcbiAgfSBlbHNlIHtcbiAgICBhbnN3ZXJNZXNzYWdlLnRleHRDb250ZW50ID0gYEluY29ycmVjdCwgJHtjdXJyZW50Q2FwaXRhbH0gaXMgdGhlIGNhcGl0YWwgb2YgJHtjdXJyZW50Q291bnRyeX1gO1xuICAgIGFuc3dlck1lc3NhZ2Uuc3R5bGUuY29sb3IgPSAnZmlyZWJyaWNrJztcbiAgfVxufVxuXG5mdW5jdGlvbiBjaGVja0Fuc3dlcihlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgY29uc3QgaW5wdXQgPSBlLnRhcmdldC5hbnN3ZXIudmFsdWU7XG4gIGlmIChpbnB1dC50b0xvd2VyQ2FzZSgpID09PSBjdXJyZW50Q2FwaXRhbC50b0xvd2VyQ2FzZSgpKSB7XG4gICAgc2NvcmUrKztcbiAgICBkaXNwbGF5QW5zd2VyTWVzc2FnZSh0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBkaXNwbGF5QW5zd2VyTWVzc2FnZShmYWxzZSk7XG4gIH1cbiAgZS50YXJnZXQuYW5zd2VyLnZhbHVlID0gJyc7XG4gIGRpc3BsYXlTY29yZSgpO1xuICBkaXNwbGF5Q291bnRyeSgpO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5VGltZXIodGltZXIsIHRpbWVyRWxlbWVudCkge1xuICBsZXQgbWludXRlcyA9IE1hdGguZmxvb3IodGltZXIgLyA2MCk7XG4gIGxldCBzZWNvbmRzID0gTWF0aC5mbG9vcih0aW1lciAlIDYwKTtcblxuICBpZiAobWludXRlcyA8IDEwKSB7XG4gICAgbWludXRlcyA9IGAwJHttaW51dGVzfWA7XG4gIH1cblxuICBpZiAoc2Vjb25kcyA8IDEwKSB7XG4gICAgc2Vjb25kcyA9IGAwJHtzZWNvbmRzfWA7XG4gIH1cblxuICB0aW1lckVsZW1lbnQudGV4dENvbnRlbnQ9IGAke21pbnV0ZXN9OiR7c2Vjb25kc31gO1xufVxuXG5mdW5jdGlvbiBzdGFydFRpbWVyKCkge1xuICBjb25zdCB0aW1lckVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGltZXInKTtcbiAgbGV0IHRpbWVyID0gMzA7IC8vIHNldCBkdXJhdGlvblxuXG4gIGRpc3BsYXlUaW1lcih0aW1lciwgdGltZXJFbGVtZW50KTsgLy8gaW5pdGlhbGlzZSBkaXNwbGF5XG4gIFxuICAvLyBjb3VudGRvd25cbiAgdmFyIGNoYW5nZVRpbWVyID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgIGRpc3BsYXlUaW1lcih0aW1lciwgdGltZXJFbGVtZW50KTtcblxuICAgIGlmICgtLXRpbWVyIDwgMCkge1xuICAgICAgdGltZXIgPSAwO1xuXG4gICAgICBlbmRHYW1lKCk7XG4gICAgICBjbGVhckludGVydmFsKGNoYW5nZVRpbWVyKTtcbiAgICB9XG4gIH0sIDEwMDApXG59XG5cbmFzeW5jIGZ1bmN0aW9uIHBvc3RTY29yZShlKSB7XG4gIGNvbnN0IG5hbWUgPSBlLnRhcmdldC5uYW1lLnZhbHVlO1xuICBjb25zdCBmaW5hbFNjb3JlID0gc2NvcmU7XG5cbiAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXG4gICAgfSxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICBuYW1lOiBuYW1lLFxuICAgICAgc2NvcmU6IGZpbmFsU2NvcmVcbiAgICB9KVxuICB9XG5cbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9odHRwOi8vbG9jYWxob3N0OjMwMDAvY2FwaXRhbHNfc2NvcmVzYCwgb3B0aW9ucylcbiAgY29uc29sZS5sb2cocmVzcG9uc2UpXG4gIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMSkge1xuICAgIGNvbnNvbGUubG9nKGAyMDEgdHJ1ZWApXG4gIH1cbn1cblxuZnVuY3Rpb24gc3RhcnRHYW1lKCkge1xuICByZXBsYXlCdXR0b24uc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XG4gIGFuc3dlck1lc3NhZ2Uuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XG4gIHN1Ym1pdEJ1dHRvbi5yZW1vdmVBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKTtcbiAgc2NvcmUgPSAwO1xuICBkaXNwbGF5U2NvcmUoKTtcbiAgZGlzcGxheUNvdW50cnkoKTtcbiAgc3RhcnRUaW1lcigpO1xufVxuXG5mdW5jdGlvbiBlbmRHYW1lKCkge1xuICAvLyBHZXQgbmFtZSBhbmQgc2NvcmVcbiAgZGlhbG9nLnNob3dNb2RhbCgpO1xuXG4gIHN1Ym1pdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiLCB0cnVlKTtcblxuICByZXBsYXlCdXR0b24uc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xufVxuXG5jb25zdCBhbnN3ZXJNZXNzYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Jlc3BvbnNlJyk7XG5cbmNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY291bnRyeS1ndWVzcycpO1xuZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBjaGVja0Fuc3dlcik7XG5cbmNvbnN0IGRpYWxvZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGlhbG9nXCIpO1xuY29uc3QgZGlhbG9nRW50cnkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hbWVcIik7XG5kaWFsb2dFbnRyeS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIHBvc3RTY29yZSk7XG5cbi8vIEZvcm0gY2FuY2VsIGJ1dHRvbiBjbG9zZXMgdGhlIGRpYWxvZyBib3hcbmNvbnN0IGNhbmNlbEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FuY2VsXCIpO1xuY2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBkaWFsb2cuY2xvc2UoXCJuYW1lTm90R2l2ZW5cIikpO1xuXG5jb25zdCByZXBsYXlCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlcGxheVwiKTtcbnJlcGxheUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc3RhcnRHYW1lKVxuXG5jb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3VibWl0LWJ0bicpO1xuXG5zdGFydEdhbWUoKTtcbiJdfQ==

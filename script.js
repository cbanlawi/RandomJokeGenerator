const setupDiv = document.getElementById("setup");
const punchlineDiv = document.getElementById("punchline");
const root = document.querySelector(":root");
const punchlineBtn = document.getElementById("punchlineBtn");
const newJokeBtn = document.getElementById("newJokeBtn");
let punchline;

punchlineBtn.addEventListener("click", getPunchline);
newJokeBtn.addEventListener("click", getJoke);

async function getPunchline() {
  punchlineDiv.innerHTML = punchline;

  punchlineDiv.classList.add("bubble");
  root.style.setProperty("--pseudo-visibility", "visible");
  punchlineBtn.classList.toggle("hidden");
  newJokeBtn.classList.toggle("hidden");
}

async function getJoke() {
  const jokePromise = await fetch("https://official-joke-api.appspot.com/jokes/programming/random");
  const joke = await jokePromise.json();

  setupDiv.innerHTML = joke[0].setup;

  punchline = joke[0].punchline;

  punchlineDiv.innerHTML = "";
  punchlineDiv.classList.remove("bubble");

  root.style.setProperty("--pseudo-visibility", "hidden");
  punchlineBtn.classList.toggle("hidden");
  newJokeBtn.classList.toggle("hidden");
}

getJoke();
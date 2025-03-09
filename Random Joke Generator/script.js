const mainCont = document.querySelector(".main-container");
const setupDiv = document.querySelector("#jokeSetup");
const punchlineDiv = document.querySelector("#jokePunchline");
const jokeBtn = document.querySelector("#jokeBtn");

const URL = `https://official-joke-api.appspot.com/random_joke`;

jokeBtn.addEventListener(`click`, async () => {
  try {
    const resp = await fetch(URL);
    if (!resp.ok) throw new Error("Failed to fetch error");

    const data = await resp.json();

    setupDiv.textContent = data.setup;
    punchlineDiv.textContent = data.punchline;

    mainCont.classList.add("expanded");

    setupDiv.classList.add("showJoke");
    punchlineDiv.classList.add("showJoke");
  } catch (error) {
    console.log("Failed to fetch joke.");
  }
});

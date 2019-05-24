const css = document.querySelector("h3");
const [color1, color2] = document.querySelectorAll("input");
const body = document.getElementById("gradient");
const buttonChange = document.querySelector("button");

const setGradient = () => {
  body.style.background = linearGradient();
  css.textContent = body.style.background + ";";
};
const linearGradient = () => {
  return `linear-gradient(to right,${color1.value},${color2.value})`;
};
const getRandomValue = () => {
  let symbol = "#";
  const randomValue = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    "A",
    "B",
    "C",
    "D",
    "E",
    "F"
  ];
  for (let i = 0; i < 6; i++) {
    symbol += randomValue[Math.floor(Math.random() * randomValue.length)];
  }
  return symbol;
};
const getRandomChangeButton = () => {
  let randomOne = getRandomValue();
  let randomTwo = getRandomValue();
  body.style.background = `linear-gradient(to right,${randomOne},${randomTwo})`;
  buttonChange.style.background = `linear-gradient(to right,${randomOne},${randomTwo})`;
  css.textContent = body.style.background + ";";
};
color1.addEventListener("input", setGradient);
buttonChange.addEventListener("click", getRandomChangeButton);
color2.addEventListener("input", setGradient);

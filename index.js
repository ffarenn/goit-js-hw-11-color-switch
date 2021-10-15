const refs = {
    body: document.querySelector('body'),
    btnStart: document.querySelector('[data-action="start"]'),
    btnStop: document.querySelector('[data-action="stop"]'),
}

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

let randomColorID = null

//  Number randomiser
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

// button listeners
refs.btnStart.addEventListener('click', onClickColorChange)
refs.btnStop.addEventListener('click', onClickStopColor)

// start color switch function 
function onClickColorChange() {
    randomColorID = setInterval(() => {
        refs.body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)]
    }, 1000)

    refs.btnStart.setAttribute("disabled", "")
}

// stop color switch function
function onClickStopColor() {
    refs.btnStart.removeAttribute("disabled", "")
    clearInterval(randomColorID)
}





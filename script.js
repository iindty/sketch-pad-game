let inputPlayer = 16;
let isDrawing = 1;
let isRainbow = false;

const resizeButton = document.getElementById('resize-button');
const rainbowButton = document.getElementById('rainbow-mode-button');
const clearButton = document.getElementById('clear-button');
const sketchPad = document.getElementById('sketch-pad');

function rainbowRandom() {
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)
    return `rgb(${r},${g},${b})`;
  }
  

for (let count = 0; count < inputPlayer * inputPlayer; count++) {
    const sizeBox = (100 / inputPlayer) + "%";
    const chid = document.createElement("div");
    document.getElementById('sketch-pad').appendChild(chid);
    chid.style.width = (sizeBox);
    chid.style.height = (sizeBox);
    chid.style.border = "1px solid black";
    chid.classList.add("box-of-sketch-pad");
}

function reSize () {
    const resetSketchPad = document.getElementById('sketch-pad');
    resetSketchPad.innerHTML = ``;

    inputPlayer = prompt("Enter a new grid size (1-100) :")
    if (inputPlayer <= 100 && inputPlayer >= 1) {
        for (let count = 0; count < inputPlayer * inputPlayer; count++) {
            const sizeBox = (100 / inputPlayer) + "%";
            const chid = document.createElement("div");
            document.getElementById('sketch-pad').appendChild(chid);
            chid.style.width = (sizeBox);
            chid.style.height = (sizeBox);
            chid.style.border = "1px solid black";
            chid.classList.add("box");
        }
    } else {
        reSize()
    }
}

const handleClick = (e) => {
    
    if (e.target.matches('div') && e.buttons === 1) {
        isDrawing = true;
        if(e.target.matches('div') && isDrawing){
            isRainbow ? e.target.style.background = rainbowRandom() : e.target.style.background = "#212121"
        }
    } else {
        isDrawing = false;
    }
}

sketchPad.addEventListener("mouseover", handleClick)
sketchPad.addEventListener("mouseout", () => {
    isDrawing = false;
})

rainbowButton.addEventListener("click", () => {
    isRainbow = !isRainbow
})

function reset() {
    const box =  document.querySelectorAll('#sketch-pad div');
    box.forEach(item => {
        item.style.background = "#ffffff";
    });
}





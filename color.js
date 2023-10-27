const color1 = document.getElementById("color-1");
const color2 = document.getElementById("color-2");
const color3 = document.getElementById("color-3");
const color4 = document.getElementById("color-4");
const color5 = document.getElementById("color-5");
const color6 = document.getElementById("color-6");
const generateButton = document.querySelector(".generate-button");
let letters = "0123456789ABCDEF";

function getHexCode() {
    for (let i = 0; i < 6; i++)
      newTargetColor += letters[Math.floor(Math.random() * 16)];
}

function totalColorChange(target) {
  newTargetColor = "#";
  if (target === generateButton) {
    getHexCode();
    target.style.backgroundColor = newTargetColor;
  } else {
    getHexCode();
    target.style.backgroundColor = newTargetColor;
    target.textContent = newTargetColor;
  }
}

function buttonColorGenerate() {
  totalColorChange(color1);
  totalColorChange(color2);
  totalColorChange(color3);
  totalColorChange(color4);
  totalColorChange(color5);
  totalColorChange(color6);
  totalColorChange(generateButton);
}




generateButton.addEventListener("click", buttonColorGenerate);
color1.addEventListener('click', () => {navigator.clipboard.writeText(color1.textContent);});
color2.addEventListener('click', () => {navigator.clipboard.writeText(color2.textContent);});
color3.addEventListener('click', () => {navigator.clipboard.writeText(color3.textContent);});
color4.addEventListener('click', () => {navigator.clipboard.writeText(color4.textContent);});
color5.addEventListener('click', () => {navigator.clipboard.writeText(color5.textContent);});
color6.addEventListener('click', () => {navigator.clipboard.writeText(color6.textContent);});


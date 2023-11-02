const colors = document.querySelectorAll(".color");
const generateButton = document.querySelector(".generate-button");
const letters = "0123456789ABCDEF";

function totalColorChange(target) {
  function getHexCode() {
    for (let i = 0; i < 6; i++)
      newTargetColor += letters[Math.floor(Math.random() * 16)];
  }
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
  colors.forEach((color) => {
    totalColorChange(color);
  });
  totalColorChange(generateButton);
}

generateButton.addEventListener("click", buttonColorGenerate);

colors.forEach((color) => {
  color.addEventListener("click", () => {
    navigator.clipboard.writeText(color.textContent).catch((error) => {
      console.log('Failed to copy hex code.', error);
    });
  });
});

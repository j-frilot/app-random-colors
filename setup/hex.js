const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

// hex color is # and 6 values

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

// this function gets a random number. and makes one fit the length of the array (times the length then round down)
function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}

//hexColor variable is a string needed for color hashtag
//each loop adds another number/letter to the hexColor hashtag, loops 6 times
//number/letter determined by the random number on array
btn.addEventListener("click", function () {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
  }

  color.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
});

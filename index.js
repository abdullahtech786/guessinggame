/** @format */

const inputElm = document.getElementById("input");
const buttonElm = document.getElementById("numberBtn");
const list = document.querySelector("#result-list");
const rightGuessElm = document.querySelector("#correctScore");
const wrongGuessElm = document.querySelector("#wrongScore");
// const buttonElm = document.querySelector(".btnElm");
const resetBtn = document.querySelector("#reset");

let inputNum = 0;
let rightNum = 0;
let wrongNum = 0;
let limitChances = 0;
let lastItem;
let lastItem1;

buttonElm.addEventListener("click", function (event) {
  event.preventDefault();
  inputNum = Number(inputElm.value);
  console.log(inputNum);
  inputElm.value = "";
  let randomNumber = Math.floor(Math.random() * 10);
  // // check right or wrong
  checkValidation(randomNumber, inputNum);
  // // limit chances
  limitChances++;
  limitChancesRange(limitChances);
});

// function checkValidation(randomNumber, inputNum) {
//   if (inputNum === randomNumber) {
//     lastItem = list.lastElementChild.cloneNode(true);
//     // let li = document.createElement("li");
//     lastItem.innerHTML = "You have won The Game and your guess is right";
//     lastItem.classList.add("text-primary");
//     lastItem.style.fontSize = "30px";
//     lastItem.style.fontWeight = "bold";
//     list.appendChild(lastItem);
//     // list.appendChild(lastItem);
//     rightNum++;
//     rightGuessElm.textContent = rightNum;
//     buttonElm.setAttribute("disabled", "disabled");
//   } else {
//     lastItem = list.lastElementChild.cloneNode(true);
//     // let lis = document.createElement("li");
//     lastItem.innerHTML = "You have Lost and your Number is : " + randomNumber;
//     lastItem.classList.add("text-danger", "font-weight-bold");
//     lastItem.style.fontSize = "30px";
//     // lastItem1.style.fontWeight = "bold";
//     list.appendChild(lastItem);
//     wrongNum++;
//     wrongGuessElm.textContent = wrongNum;
//   }
// }

function checkValidation(randomNumber, inputNum) {
  if (inputNum === randomNumber) {
    showResult.insertAdjacentHTML(
      "afterbegin",
      `<p class='msg'>Your guess is correct and your number is:  ${randomNumber}</p>`
    );
    rightNum++;
    rightGuessElm.textContent = rightNum;
  } else {
    showResult.insertAdjacentHTML(
      "afterbegin",
      `<p class='msg'>You have lost the game and your number is:  ${randomNumber}</p>`
    );
    wrongNum++;
    wrongGuessElm.textContent = wrongNum;
  }
}

function limitChancesRange(limitChances) {
  if (limitChances === 5) {
    buttonElm.setAttribute("disabled", "disabled");
    alert("Game Over");
  }
}
//   /// reset all
resetBtn.addEventListener("click", () => {
  inputNum = 0;
  rightNum = 0;
  wrongNum = 0;
  limitChances = 0;
  rightGuessElm.textContent = 0;
  wrongGuessElm.textContent = 0;
  if (document.querySelector("#result-list")) {
    lastItem.innerHTML = "";
  }
  //   list.remove();
  buttonElm.removeAttribute("disabled");
  if (document.querySelector(".msg")) {
    showResult.innerHTML = "";
  }

  //   resetBtn.setAttribute("disabled", "disabled");
});

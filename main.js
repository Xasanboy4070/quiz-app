const btn1 = document.querySelector(".answer1");
const btn2 = document.querySelector(".answer2");
const btn3 = document.querySelector(".answer3");
const btn4 = document.querySelector(".answer4");
const question = document.querySelector(".question");
const number = document.querySelector(".number");
const second = document.querySelector(".second");
const divColor = document.querySelector(".divColor");
const answers = document.querySelectorAll(".answer");
function random1() {
  return Math.ceil(Math.random() * 100);
}
function random2() {
  return Math.ceil(Math.random() * 100);
}
function randomElemm() {
  return Math.ceil(Math.random() * 3);
}
let randomNum1 = random1();
let randomNum2 = random2();
let randomElem = randomElemm();
let timer = 15;
let elem;
let answ;
let ball = 0;
second.innerText = timer;
function answerFun(num, random1, random2) {
  if (num === 1) {
    answ = random1 + random2;
  } else if (num === 2) {
    answ = random1 - random2;
  } else if (num === 3) {
    answ = random1 * random2;
  }
  return answ;
}
let answerr = answerFun(randomElem, randomNum1, randomNum2);
function element(num) {
  if (num === 1) {
    elem = "+";
  } else if (num === 2) {
    elem = "-";
  } else if (num === 3) {
    elem = "*";
  }
  return elem;
}
let elemm = element(randomElem);
question.textContent = `${randomNum1}${element(elemm)}${randomNum2}=?`;

function answBtn() {
  let randomBtn = Math.ceil(Math.random() * 4) - 1;
  let randomBtns = Math.ceil(Math.random() * 5);
  answers[randomBtn].innerText = answerr;
  switch (randomBtn) {
    case 0:
      btn1.addEventListener("click", divColorGreen);
      btn2.addEventListener("click", divColorRed);
      btn3.addEventListener("click", divColorRed);
      btn4.addEventListener("click", divColorRed);
      btn2.innerText = answerr + randomBtns;
      btn3.innerText = answerr + randomBtns + 3;
      btn4.innerText = answerr + randomBtns - 8;
      break;
    case 1:
      btn2.addEventListener("click", divColorGreen);
      btn1.addEventListener("click", divColorRed);
      btn3.addEventListener("click", divColorRed);
      btn4.addEventListener("click", divColorRed);
      btn1.innerText = answerr + randomBtns;
      btn3.innerText = answerr + randomBtns + 3;
      btn4.innerText = answerr + randomBtns - 8;
      break;
    case 2:
      btn3.addEventListener("click", divColorGreen);
      btn2.addEventListener("click", divColorRed);
      btn1.addEventListener("click", divColorRed);
      btn4.addEventListener("click", divColorRed);
      btn2.innerText = answerr + randomBtns;
      btn1.innerText = answerr + randomBtns + 3;
      btn4.innerText = answerr + randomBtns - 8;
      break;
    case 3:
      btn4.addEventListener("click", divColorGreen);
      btn2.addEventListener("click", divColorRed);
      btn3.addEventListener("click", divColorRed);
      btn1.addEventListener("click", divColorRed);
      btn2.innerText = answerr + randomBtns;
      btn3.innerText = answerr + randomBtns + 3;
      btn1.innerText = answerr + randomBtns - 8;
      break;
  }
}
// setTimeout(answerNext,1000)

function answerNext() {
  answBtn();
  divColor.style.background = "#fff";
  divColor.style.border = "2px solid";
  answerFun(randomElem, randomNum1, randomNum2);
}
answerNext();
function divColorRed() {
  divColor.style.background = "red";
  divColor.style.border = "none";
  ball += 3;
  number.innerText = ball;
  answerNext();
}
function divColorGreen() {
  divColor.style.background = "green";
  divColor.style.border = "none";
  ball += 10;
  number.innerText = ball;
  answerNext();
}
let inter = setInterval(() => {
  --timer;
  second.innerText = timer;
  if (timer == 0) {
    clearInterval(inter);
    answerNext();
  }
}, 1000);

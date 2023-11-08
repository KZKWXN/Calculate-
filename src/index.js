import "./style.css";

let activity = document.querySelector(".activity");
let A = undefined;
let B = undefined;
let operator = undefined;
let result = undefined;
const ac = document.getElementById("AC");
const division = document.getElementById("division");
const multi = document.getElementById("multi");
const brackets = document.getElementById("()");
const minus = document.getElementById("minus");
const procent = document.getElementById("procent");
const plus = document.getElementById("plus");
const point = document.getElementById("point");
const backspace = document.getElementById("d");
const equall = document.getElementById("equall");
activity.textContent = 0;
const box = document.getElementById("box");

box.addEventListener("click", function (button) {
  numbers(button.target.dataset.number);
});

function numbers(numberes) {
  if (A == undefined) {
    A = numberes;
  } else if (A >= 0 && operator == undefined) {
    A = A + String(numberes);
  } else if (B == undefined) {
    B = numberes;
  } else {
    B = B + String(numberes);
  }
  if (result !== undefined) {
    result = undefined;
  } else {
    operate();
  }
}

function operate() {
  console.log(A);
  console.log(B);
  console.log(operator);
  if (A !== undefined && B !== undefined && operator !== undefined) {
    activity.textContent = A + operator + B;
  } else if (A !== undefined && operator !== undefined) {
    activity.textContent = A + operator;
  } else if (A !== undefined) {
    activity.textContent = A;
  } else {
    activity.textContent = result;
  }
}

function disabled() {
  const buttons = document.querySelectorAll(".division");

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].setAttribute("disabled", "true");
  }
}

function enabled() {
  const buttons = document.querySelectorAll(".division");

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].removeAttribute("disabled", "true");
  }
}

ac.addEventListener("click", function () {
  console.log("AC");
  A = null;
  B = null;
  activity.textContent = 0;
  enabled();
});

division.addEventListener("click", function () {
  console.log("/");
  activity.textContent = A + "/";
  operator = "/";
  disabled();
});

multi.addEventListener("click", function () {
  console.log("*");
  activity.textContent = A + "*";
  operator = "*";
  disabled();
});

brackets.addEventListener("click", function () {
  console.log("()");
});

minus.addEventListener("click", function () {
  console.log("-");
  activity.textContent = A + "-";
  operator = "-";
  disabled();
});

procent.addEventListener("click", function () {
  console.log("%");
  activity.textContent = A + "%";
  operator = "%";
  disabled();
});

plus.addEventListener("click", function () {
  console.log("+");
  activity.textContent = A + "+";
  operator = "+";
  disabled();
});

point.addEventListener("click", function () {
  console.log(".");
  if (A == undefined) {
    A = 0;
    A = 0 + ".";
  } else if ((A >= 0) & (operator == undefined)) {
    A = A + ".";
  } else if (B == undefined) {
    B = 0;
    B = B + ".";
  } else {
    B = B + ".";
  }
});

backspace.addEventListener("click", function () {
  console.log("d");
});

equall.addEventListener("click", function () {
  console.log("=");

  if (A == undefined) {
    console.error("A");
  } else if (B == undefined) {
    console.error("B");
  } else if (operator == undefined) {
    console.error("operator");
  } else if (operator === "+") {
    result = Number(A) + Number(B);
  } else if (operator === "-") {
    result = Number(A) - Number(B);
  } else if (operator === "*") {
    result = Number(A) * Number(B);
  } else if (operator === "/") {
    result = Number(A) / Number(B);
  } else if (operator === "%") {
    result = (Number(A) / 100) * Number(B);
    console.log("HZ");
  }

  console.log(result);
  console.log(operator);
  console.log(A);
  console.log(B);
  activity.textContent = A + operator + B + "=" + result;
  A = undefined;
  B = undefined;
  operator = undefined;

  enabled();
});

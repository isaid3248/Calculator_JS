const screenEL = document.querySelector(".screen");
const screenEL2 = document.querySelector(".screen2");
const screenEL3 = document.querySelector(".screen3");
const positiveButton1 = document.querySelector(".positive1");
const negativeButton1 = document.querySelector(".negative1");
const positiveButton2 = document.querySelector(".positive2");
const negativeButton2 = document.querySelector(".negative2");
const positiveButton = document.querySelector(".positive");
const negativeButton = document.querySelector(".negative");
const duplicateButton = document.querySelector(".duplicate");
const divideButton = document.querySelector(".divide");

console.log(screenEL, positiveButton, negativeButton, duplicateButton, divideButton);

let button = 0;
let button1 = 0;
let button2 = 0;

positiveButton1.addEventListener("click", () => {
  button1 = button1 + 1;
  console.log("Positive is clicked", button1);
  screenEL.innerHTML = button1;
});

negativeButton1.addEventListener("click", () => {
  button1 = button1 - 1;
  console.log("Negative is clicked", button1);
  screenEL.innerHTML = button1;
});
  
positiveButton2.addEventListener("click", () => {
    button2 = button2 + 1;
    console.log("Positive is clicked", button2);
    screenEL2.innerHTML = button2;
  });
  
negativeButton2.addEventListener("click", () => {
    button2 = button2 - 1;
    console.log("Negative is clicked", button2);
    screenEL2.innerHTML = button2;
  });
  
  positiveButton.addEventListener("click", () => {
    button = button1 + button2;
    console.log("toplama is clicked", button);
    screenEL3.innerHTML = button;
  });
  
  negativeButton.addEventListener("click", () => {
    button = button1 - button2;
    console.log("cikarma is clicked", button);
    screenEL3.innerHTML = button;
  });

  duplicateButton.addEventListener("click", () => {
    button = button1 * button2;
    console.log("Duplicate is clicked", button);
    screenEL3.innerHTML = button;
  });

divideButton.addEventListener("click", () => {
    button = button1 / button2;
    console.log("Divide is clicked", button);
    screenEL3.innerHTML = button;
  });
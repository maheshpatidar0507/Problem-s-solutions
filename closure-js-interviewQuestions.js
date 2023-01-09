// Que1-Which of these 3 functions access outer scope variables?
//1
let countClicks = 0;
button.addEventListener("click", function clickHandler() {
  countClicks++;
});
//2
const result = (function immediate(number) {
  const message = `number is: ${number}`;
  return message;
})(100);
//3
setTimeout(function delayedReload() {
  location.reload();
}, 1000);

//Ans
//clickHandler accesses the variable countClicks from the outer scope.
//immediate doesn't access any variables from the outer scope.
//delayedReload accesses the global variable location from the global scope (aka the outermost scope).

// Que2-What will log to console the following code snippet:
(function immediateA(a) {
  return (function immediateB(b) {
    console.log(a); // What is logged?
  })(1);
})(0);
//Ans 0
// Que3-What will log to console the following code snippet:
let count = 0;
(function immediate() {
  if (count === 0) {
    let count = 1;
    console.log(count); // What is logged?
  }
  console.log(count); // What is logged?
})();
//Ans 0 and 1

// Que4-What will log to console the following code snippet:

for (var i = 0; i < 3; i++) {
  setTimeout(function log() {
    console.log(i); // What is logged?
  }, 1000);
}
//Ans 3,3,3

// Que5-What will log to console the following code snippet:
function createIncrement() {
  let count = 0;
  function increment() {
    count++;
  }
  let message = `Count is ${count}`;
  function log() {
    console.log(message);
  }

  return [increment, log];
}
const [increment, log] = createIncrement();
increment();
increment();
increment();
log(); // What is logged?
// Ans-'Count is 0

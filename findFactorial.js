// 0000000000000000000000000000000 way-01 0000000000000000000000000000000000
function findFactorialW1(num) {
  if (num === 0) {
    return 1;
  } else if (num >= 1) {
    let fact = num;
    for (let i = num - 1; i > 0; i--) {
      //5*4*3*2*1=120
      fact = fact * i;
      // console.log(fact);
    }
    return fact;
  } else if (num < 0) {
    return "Number has to be positive.";
  }
}
console.log("Factorial=>", findFactorialW1(5));

// <!--Que. Write a program to check if the input is a vowel or consonan
// <!--  Algorithm
//  Step 1. store input in variable
//  Step 2 - Check in if condition for the letter is vowel or not
//  Step 3 - Check If it is vowel
//  Step 3.1 - Print it is a vowel
//  Step 4 - Print it is a consonent
function checkVowelConsonant(input) {
  if (
    input === "a" ||
    input === "e" ||
    input === "i" ||
    input === "o" ||
    input === "u"
  ) {
    document.write("Vowel");
  } else {
    document.write("Consonant");
  }
}
checkVowelConsonant("t");

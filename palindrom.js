// Que. Check whether given string is palindrome or not.String would be case sensetive.
//  m!=M

// ----------------------------Algo----------------------------
// 1. convert string into array
// 2. create other array and save revers of first array ussing
//     like [0,1,2,3] => [3,2,1,0]
// 3. if array and reverse array are  same  then print 'true'
// else print 'false'

// -----------------------------Code---------------------------

function checkPalindrom(Str) {
  Array1 = Str.split("");

  console.log("Before", Array1);

  let Array2 = [];
  for (i = 0; i < Array1.length; i++) {
    Array2.unshift(Array1[i]);
  }

  // Array2 = Array1.reverse(); => optional method
  console.log("After", Array2);

  for (let i = 0; i < Str.length; i++) {
    if (Array1[i] == Array2[i]) {
      console.log("True");
    } else {
      console.log("False");
    }
  }
}
checkPalindrom("madam"); // true
checkPalindrom("Hello"); // false
checkPalindrom("nayan"); // true
checkPalindrom("Nayan"); // false

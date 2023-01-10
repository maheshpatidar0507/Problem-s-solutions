// Question-Write a function to find the second largest number from given array.

//------------------ Algorithm -----------------------------------------------------
//step 1- Create 2 variable,first largest and second  secondLarget and assign them 0.
//step 1.1- Check the length of array.if length is less then or equal to 1, return "Please enter valid array".
//-Else follow the folloing steps
//step 2 Pick first value and compare with largest.
//step 2.1-If first value is greater than largest then store it into largest variable otherwise leave it.
//step 3- Now compare first value with secondLargest.
//step 3.1- If first value is greater than secondLargest then store it into secondLargest variableotherwise leave it.
//step 4- Pick second value and follow the step 2.1, 3 and 3.1
//step 5- At last return the secondLarget

//------------code-------------------------
function secondLargestNumber(arr) {
  let largest = 0;
  let secondLargest = 0;
  if (arr.length <= 1) {
    console.log("Please enter valid array");
  } else {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > largest) {
        largest = arr[i];
      } else if (arr[i] > secondLargest && arr[i] < largest) {
        secondLargest = arr[i];
      }
    }
  }
  return secondLargest;
}
console.log(secondLargestNumber([1, 6, 1, 3, 54, 23, 4]));
// output 23

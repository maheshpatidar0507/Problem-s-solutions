// Que-Merge nested aray into parent array.
// Input=[1, 2, 3, 4, [5, 6], 7],
// Output=[1, 2, 3, 4, 5, 6, 7]

//------------------------using sort() method----------------------------------------
//---Algorithm---
//  step 1- Create a new blank array (arr1=[]).
//  step 2-Pick first value from input array using for loop and check.If it is
//    number then push into arr1
//  step 2.1-Else this is an Array then start nested loop to pick first value of
//    that nested array and push into arr1
//  step 3-coninue thi process upto all values get pushed into arr1.
//  step 4-Return arr1
//
//---Code---
function mergeNestedArray(arr0) {
  let arr1 = [];
  for (let i = 0; i < arr0.length; i++) {
    {
      if (typeof arr0[i] == "number") {
        arr1.push(arr0[i]);
      } else {
        let arr2 = arr0[i];
        console.log(arr2);
        for (j = 0; j < arr2.length; j++) {
          arr1.push(arr2[j]);
        }
      }
    }
  }
  return arr1;
}
// Input=[1, 2, 3, 4, [5, 6], 7]
console.log(mergeNestedArray([1, 2, 3, 4, [5, 6], 7]));
//Output=[1, 2, 3, 4, 5, 6, 7]

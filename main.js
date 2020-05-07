"use strict"

console.log("js veikia")
//   Count the number of Duplicates
//   Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

//   Example
//   "abcde" -> 0 # no characters repeats more than once
//   "aabbcde" -> 2 # 'a' and 'b'
//   "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
//   "indivisibility" -> 1 # 'i' occurs six times
//   "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
//   "aA11" -> 2 # 'a' and '1'
//   "ABBA" -> 2 # 'A' and 'B' each occur twice

function duplicateCount(text) {
    let raides = text.split("");
    let pasikartojantys = [];
    let pasikartoja = false;
    for (let i = 0; i < raides.length; i++) {
        for (let k = 0; k < pasikartojantys.length; k++) {
            if (raides[i] == pasikartojantys[k]) {
            pasikartoja = true;
            break;
            }
        }
        if (pasikartoja == false) {
            for (let j = 0; j < raides.length; j++) {
            if (j != i && raides[i] == raides[j]) {
                pasikartojantys.push(raides[i]);
                break;
            }
            }
        }
        pasikartoja = false;
    }
    return pasikartojantys.length;
  }
  
  console.log(duplicateCount("Indivisibilities"))


/*Given a list lst and a number N, create a new list that contains each number of lst at most N 
times without reordering. For example if N = 2, and the input is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2], 
drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times, and then take 3, 
which leads to [1,2,3,1,2,3].*/

function deleteNth(arr, n){

    let newArr = []
    let count=0;
    for(let i = 0; i<arr.length; i++){
      count=0;
      if (i != 0){
        for(let j = 0; j<newArr.length; j++){
            if(arr[i]==newArr[j]){
              count++;
            }
        }
        if (count<n){
          newArr.push(arr[i])
        }
      }else{
        newArr.push(arr[i])
      }
    }
    return  newArr
}
  deleteNth([1,2,3,1,2,1,2,3,3,3,3,3,3,3,3], 2)



 // ...
  function diceCount() {
    let dice = 0;
    let diceArray = [];
    let current = null;
    let count = 0;
    for (let i = 0; i < 10; i++) {
      dice = Math.floor(Math.random()*6)+1;
      diceArray.push(dice);
    }
    diceArray.sort();
  
    for (let z = 0; z < diceArray.length; z++) {
      if (diceArray[z] != current) {
          if (count > 0) {
              console.log(current + ' pasikartoja ' + count + ' kartus.');
          }
          current = diceArray[z];
          count = 1;
      } else {
        count++;
      }
      
    }
      if (count > 0) {
        console.log(current + ' pasikartoja ' + count + ' kartus.')
      }
      
  }
  diceCount();
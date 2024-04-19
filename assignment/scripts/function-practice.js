console.log('***** Function Practice *****');

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  console.log("goodmorning", hello);
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"');


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName(Joshua) {
  console.log("my name", Joshua);
  return "Hello, Your Name!"
}

// Remember to call the function to test


// 3. Function to add two numbers together & return the result
function addNumbers(num0, num1) {

  let answer = num0 + num1
  return answer;

};

console.log("addNumbers", addNumbers(100, 200));
console.log("addNumbers", addNumbers(100, 250));


// return firstNumber + secondNumber;





// 4. Function to multiply three numbers & return the result
function multiplyThree(num1, num2, num3) {

  let answer = num1 * num2 * num3
  return answer;

}
console.log("the answer is: ", multiplyThree(5, 5, 5));


// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive(number = 4) {
  console.log(number);
  if (number > 0) {
    console.log("the number is true:");
    return true
  } else (number < 0)
  return false

};


// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
let movies = [1, 2, 3, 4]
movies.pop()




console.log(movies);

function getLast(putBack) {
  console.log("get last:", putBack);
  if (movies.length === 3) {
    return movies.push(4);

  }
};

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 

let numbers = [1, 2, 3, 4];

function find(value) {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === value) {
      console.log("Found it!");
      return true;
    }
  }
  console.log("Not found");
  return false;
};



// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {

}


// 9. Function to return the sum of all numbers in an array
function sumAll(array) {
  let sum = 0;
  // TODO: loop to add items

  // TODO: return the sum
}

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
function allPositive() {

}


// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!


// DO NOT MODIFY
// Used for automated testing
try {
  module.exports = {
    hello,
    helloName,
    addNumbers,
    multiplyThree,
    isPositive,
    getLast,
    find,
    isFirstLetter,
    sumAll,
    allPositive,
  };
} catch (e) {
  // Do nothing
}

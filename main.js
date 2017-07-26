// 1.
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// Then, write and example of using the function.

function max(num1, num2){
    // Your answer here
    if (num1 === num2){
      return num1;
    }else if (num1 > num2){
      return num1;
    } return num2;
}

console.log(max(1,2))

// 2.
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// Then, write and example of using the function.
function maxOfThree(num1, num2, num3){
    // Your answer here
    return Math.max(num1, num2, num3)

}
console.log(maxOfThree(3, 67,0.8908))
// 3.
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// Then, write and example of using the function.

function isVowel(char){
    // Your answer here
    if (char === 'a' ||char==='e'||char==='i'||char==='o'||char==='u'){
      return true;
    } return false;
}

console.log(isVowel('v'))
// 4.
// Write a function called `sum` that takes two parameters and returns the sum of those 2 numbers.
// Then, write and example of using the function.
function sum (num1 , num2){
  return num1 + num2
}

console.log(sum(3,4))
// 5.
// Write a function named `avg` that takes 3 parameters and returns the average of those 3 numbers.
// Then, write and example of using the function.
function average (num1,num2,num3){
  return (num1 + num2 + num3) / 3
}

console.log(average(1,2,3))
// 6.
// Write a function called `getLength` that takes one parameter (a string) and returns the length
// Then, write and example of using the function.
function getLength(string){
  return string.length
}

console.log(getLength('we out here tryn ta fucntion bruh'))
// 7.
// Write a function called `greaterThan` that takes two parameters
// and returns `true` if the second parameter is greater than the first.
// Otherwise the function should return `false`.
// Then, write and example of using the function.
function greaterThan(x,y){
    if(x < y){
      return true
    }return false;
}
console.log(greaterThan(5,999999999));
// 8.
// Write a function called `greet` that takes a
// single parameter and returns a string that
// is formated like "Hello, Name!" where *Name*
// is the parameter that was passed in.
// Then, write and example of using the function.
function greet(name){
  return "Hello " + name + "!"
}

console.log(greet('Mikeangelo'))

// 9.
// Write a function called `madlib` that takes 4 or more parameters (words).
// The function should insert the words into a pre-defined sentence.
// Finally the function should return that sentence.
// Note: When I say words and sentence I mean strings. For example:
// words: "quick", "fox", "fence"
// sentence: "quick brown fox jumps over the fence"
// Then, write and example of using the function.

function madLib(bronoun, noun, verb, noun2){
return 'Say, ' + bronoun + ' what is that ' + noun + ' ' + verb + 'ing from your ' + noun2 + '?'
}



console.log(madLib('my dude', 'gunk', 'hang', 'earlobes'));

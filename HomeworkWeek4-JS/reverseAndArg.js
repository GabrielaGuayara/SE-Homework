/*  5. Write a function that returns the number of arguments passed to the function when called.
    6. Define a function reverseString that computes the reversal of a string. 
    For example, reverseString("jag testar") should return the string "ratset gaj".*/

var prompt = require('prompt-sync')();
var string = prompt('Enter a phrase: ')

console.log ('The reversal is ' +reverseString(string))

function reverseString (str) 
{
    str=str.split('').reverse().join('')
    
    return str+ ' and the numbers of arguments passed to the function is '+arguments.length+"."
}

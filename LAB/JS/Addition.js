var p = require('prompt-sync')();
var num= p('From 1 to what number do you want to add? ')
var sum=0
var i=1
var a
while (i<=num)
    {
        sum=sum+i
        i++
    }

console.log (`The sum of the numbers from 1 to ${num} is: ${sum}`)
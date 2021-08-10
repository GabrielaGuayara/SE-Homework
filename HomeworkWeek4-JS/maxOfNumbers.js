/*  1. Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. 
    2. Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.    */


var prompt=require('prompt-sync')()
console.log ('Menu: \n* Enter 1 if you want to get the longest of 2 numbers \n* Enter 2 if you want to get the longest of 3 numbers \n')
var userInp=Number(prompt('Your choice is: '))

maxofTwoNumbers = (n1,n2) =>
{
        if (n1>n2)
        return 'The first number ' +n1+ ' is the longest.'
        
        else if (n2>n1)
        return 'The second number '+n2+ ' is the longest.'

        else 
        return 'Both are equal'
}

maxOfThree = (n1,n2,n3) =>
{
        if (n1>n2 && n1>n3)
        return n1+ ' is the longest number'
        
        else if (n2>n1 && n2>n3)
        return n2+ ' is the longest number'

        else 
        return n3+ ' is the longest number'
}


switch(userInp)
{
case 1:
        var i_num1= Number(prompt('Enter the first number: '))
        var i_num2= Number(prompt('Enter the second number: '))
        console.log (maxofTwoNumbers (i_num1,i_num2))
        break;
case 2:
        var i_num1= Number(prompt('Enter the first number: '))
        var i_num2= Number(prompt('Enter the second number: '))
        var i_num3= Number(prompt('Enter the third number: '))
        console.log (maxOfThree (i_num1,i_num2, i_num3))
        break;

default:
        console.log ('Invalid choice')
        break;
}


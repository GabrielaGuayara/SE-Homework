/*Part 1: Model a vending machine

a vending machine is an object
it has an array of snacks (make 3 snacks)
snacks are objects that have a name and a price
a vending machine has a function vend that allows user to enter the array position
(a number) of the snack and then that snack will be returned
Be able to call vendingMachine.vend() with a valid integer to return a snack*/
var prompt = require('prompt-sync')()

var vendingMachine = 
{
    snacks: [
        {snk ="snack1", name: "Potato chips", price: '$2.00'}
    ],
    vend: function ()
    {
        var input = prompt('')
    }
}

var snack1 ={
    name: "Potato chips",
    price: '$2.00'  
}

var snack2 ={
    name: "Ice Cream",
    price: '$5.00'  
}
var snack3 ={
    name: "Popcorn",
    price: '$4.00'  
}

machine.snacks.push(snack1, snack2, snack3);
console.log (machine.snacks)
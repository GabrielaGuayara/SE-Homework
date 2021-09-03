var p = require('prompt-sync')();
var num= p('How many times do you want the loop to run?')
let mul;
numl=Math.floor(Math.random()*5)
for ( let i=1; i<=num; i++)
{
    console.log (i*mul)
}

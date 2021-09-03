var p = require('prompt-sync')();
var a= p ('How many values do you want to input? ')

var prompt = require('prompt-sync')();
let array=[]


for (let i=1; i<=a; i++)
{
    var val= prompt ('Enter a value: ')
    array.push(val)
}

console.log ('The following values have been entered:')

for ( let val=0; val<array.length; val++)
{
console.log (array[val])
}
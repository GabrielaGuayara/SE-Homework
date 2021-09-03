var prompt = require('prompt-sync')()
var num = Number(prompt('Enter a number: '))

for (i=1; i<=10; i++)
{
    console.log (i*num)
}
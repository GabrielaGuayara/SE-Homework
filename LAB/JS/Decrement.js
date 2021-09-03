var p = require('prompt-sync')();
var n= p('How many times do you want the loop to run?')
for (num=1; num<=n; num++)
{
    for ( let i=5; i>=1; i--)
    {
        for (let j=1; j<=i; j++)
        {
            process.stdout.write(j.toString())
        }
        console.log ()
    }

    for ( let i=5; i>=1; i--)
    {

        for (let j=1; j<=i; j++)
        {
            process.stdout.write(i.toString())
        }
        console.log ()
    }
}
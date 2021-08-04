
var prompt = require('prompt-sync')();
var num= prompt('Input an even number?  ');
var array = [2,4,6,8,10,-2,-4,-6,-8,2,4,8,10,-2,-4,-6,-8,2,4,6,8,10];
var found=false;
var ocurrs=0;
var positions = [];

for (var i=0; i<array.length; i++)
{
    if (num==array[i])
    {
    ocurrs++
    positions.push(i+1)
    found=true 
    }
}

if (found==true)
{
    console.log ('Number ' + num+ ' ocurrs '+ ocurrs + ' times')
    console.log ('Number ' +num+ ' found in ' +positions+ ' positions')
}
else 
{
    console.log ('Number not found')
}



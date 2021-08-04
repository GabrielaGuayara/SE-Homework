var prompt = require('prompt-sync')();
var num= prompt('What number are you searching for?  ');
var array = [2,4,6,8,10,-1,-3,-5,-7,2,4,8,10,-2,-4,-6,-8,2,4,6,8,10];
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
    console.log ('Occurrences' +num+ ' found in ' +positions+ ' positions')
}
else 
{
    console.log ('Number '+num+ ' not found')
}

var p = require('prompt-sync')();
var num= p ('what even number are you looking for? ')
var array = [2,4,6,8,10,12,14,16,20,22,24,26,28,30]
var statement=false


for (var i=0; i<array.length;i++)
{
    if (num==array[i])
    {
        statement=true
        console.log ('Number '+num+ ' found in '+(i+1)+' position')
        break;
    }
    
}

if (!statement)
{
    console.log ('Number no found')
}
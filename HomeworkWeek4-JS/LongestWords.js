/*  7. Write a function findLongestWord that takes an array of words and returns the length of the longest one.
    8. Write a function filterLongWords that takes an array of words and a number i and returns the array of words 
    that are longer than i characters long.  */

var prompt=require('prompt-sync')()
console.log ('Menu: \n*Enter 1 if you want to know the length of the longest word \n*Enter 2 if you want to filter long words\n')
var user_i = Number(prompt('Your choice is: '))


switch(user_i)
{
    case 1:
    var string = prompt('Enter some words: ').split(' ')
    console.log (findLongestWord(string))
    break;

    case 2:
    var string = prompt('Enter some words: ').split(' ')
    console.log (filterLongWords(string))
    break;

    default:
    console.log ('Invalid choice')
    break;
    
}

function findLongestWord (long)
{
    var temp=0;
    for (var i=0; i<long.length; i++)
    {
        if (long[i].length>temp)
            temp=long[i].length
    }
    return 'The lenght of the largest word is: '+ temp
}


function filterLongWords (filt)
{
    var char = Number(prompt('How long can a word be?  '))
    var filter=[]
    
    for(var i=0; i<filt.length; i++)
    {
    if (filt[i].length>char)
        filter.push(filt[i])
    }
    return 'The array of words that are longer than '+char+' charcters long is: '+filter
}


/* 3. Write a function isCharacterAVowel that takes a character (i.e. a string of length 1) 
and returns true if it is a vowel, false otherwise.*/
var prompt=require('prompt-sync')()
var onechar = prompt('Enter one character: ')

if (onechar.length === 1)
{

    console.log (isCharacterAVowel(onechar))

    function isCharacterAVowel (inp)
    {
        var st = inp.toLowerCase().charAt();
        var statement=false

        if ( st=="a"|| st=="e" || st=="i" || st=="o" || st=="u")
        {
            return statement=true
        }
        else
        return statement= false
    }

}

else
    console.log ('Invalid Entry')


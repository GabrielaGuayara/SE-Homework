/*  4. Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array 
    of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.*/


var array = [2,-7,5,-3,9,1,6]

console.log ('The sum is equal to ' +sumArray(array))
console.log ('The multiply is equal to ' +multiplyArray(array))


function sumArray (sary) 
{

    var sum=0;
    for (i=0;i<sary.length;i++)
    {
        sum=sum+sary[i]
    }

    return sum
}


function multiplyArray (marry) 
{
    var mul=1;
    for (i=0;i<marry.length;i++)
    {
        mul=mul*marry[i]
    }

    return mul
}




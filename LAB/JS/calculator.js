var prompt=require('prompt-sync')()
console.log('Menu \n*Enter 1 for addition \n*Enter 2 for sustraction \n*Enter 3 for multiplication \n*Enter 4 for division\n')
var inp=Number(prompt('Enter a number: '))
var num1=Number(prompt('Enter the first number: '))
var num2=Number(prompt('Enter the second number: '))

switch(inp){
    case 1:
        var calculator = (n1, n2, callBack) =>
            {
                var sum=0
                sum = n1 + n2;
            callBack(sum);
            }
        var result=(sm)=> console.log ("The sum is " + sm)
        calculator(num1,num2,result)
        break;

        case 2:
            var calculator = (n1, n2, callBack) =>
                {
                var rest=0
                rest = n1 - n2;
                callBack(rest);
                }
            var result=(rt)=>console.log ("The sustraction is " + rt)
        calculator(num1,num2,result)
        break;

            case 3:
            var calculator = (n1, n2, callBack) =>
                {
                var mult=1
                mult = n1 * n2;
                callBack(mult);
                }
            var result=(m)=>console.log ("The multiplication is " + m)
        calculator(num1,num2,result)
        break;

        case 4:
            var calculator = (n1, n2, callBack) =>
            {
            var div=1
            div = n1 / n2;
            callBack(div);
            }
            var result=(d)=> console.log ("The division is " + d)
            calculator(num1,num2,result)
            break;

        default:
            console.log ('Invalid choice')
            break;
}





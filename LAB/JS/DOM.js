//Converting an array to a String
var art = ["pencil", "printer", "notebook", "staples","desks"];

var len=art.length;
for(let i=0; i<len; i++)
{
    console.log(art[i].trim());
}


nameArray1=art.toString();
nameArray2=art.join("--");

//converting Strings to an Array

var days="Monday-Tuesday-Wednesday-Thursday-Friday";


daysArray=days.split("-");

daysArray=days.split("");

console.log (days)

//daysArray=days.split();
var positions ='First Second Third Fourth Fifth Sixth Seventh Nineth Tenth'
post1=positions.split(' ')
console.log (positions)




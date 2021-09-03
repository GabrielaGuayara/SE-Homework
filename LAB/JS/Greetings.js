
var welcome
var date= new Date ();
var hour= date. getHours();

if (hour>5 && hour<12)
{
    console.log('Good Morning')
}
else if(hour>12 && hour<16)
{
    console.log ('Good Afternoon')
}
else
{
    console.log ('Hey there')
}

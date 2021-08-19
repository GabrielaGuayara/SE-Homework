//Beginning Circle class
var text="<ul>"
const PI=3.1416;

class Circle {
    constructor(radio, diam) {

        this.radio = radio;
        this.diam = diam;
    } 
    
    circle_area()
    {
    
    var a=PI*this.radio*this.radio
    this.a=a
    }
    circle_circuference()
    {
    var cf=this.radio*PI*2
    this.cf=cf
    }


    displayCircleArea()
    {
    text= text+ "<li>"+'The area of a circle whose radio is ' +this.radio+ ", is " +this.a+' in^2. In addition, its circumference is ' +this.cf+ ' in.'+"</li>";
    return text;
    }
}//Closing Circle class

var cir1 = new Circle( 10, 20)
cir1.circle_area();
cir1.circle_circuference()
cir1.displayCircleArea()

var cir1 = new Circle( 15, 30)
cir1.circle_area();
cir1.circle_circuference()
cir1.displayCircleArea()

text=text+"</ul>";
document.getElementById("p1").innerHTML = text;


//Beginning Rectangle class
var text2="<ul>"
class Rectangle {
    constructor(height, width,sides) {
        this.height = height;
        this.width = width;
        this.sides=sides;
    }
    
    rectangle_area()
    {
    
    var a=this.height*this.width
    this.a=a
    }
    
    rectangle_per()
    {
    var p=(this.height+this.width)*2;
    this.p=p
    }

numsides()
    {
        var sd=this.sides
        this.sd=sd
    }

    displayRectArea()
{
    text2= text2+ "<li>"+"The area of an rectagule whose height is "+this.height+ ' and width is '+this.width+ ', is '+this.a +" cm^2."+" Furthermore, its perimeter is "+this.p+" cm and the numbers of sides is "+this.sd+"."+"</li>";
    return text2;
    }
}//Closing rectangle class

const rect1 = new Rectangle(15, 12, 4);
rect1.rectangle_area();
rect1.numsides();
rect1.rectangle_per()
rect1.displayRectArea();

const rect2 = new Rectangle(18, 12, 4);
rect2.rectangle_area();
rect2.numsides();
rect2.rectangle_per()
rect2.displayRectArea();

text2=text2+"</ul>";
document.getElementById("p2").innerHTML = text2;


//Beginning a Square class
var text3="<ul>"
const rd=1.414;
class Squeare {
    constructor(svalues, sides) {
        this.svalues=svalues
        this.sides=sides
    }
    
    squeare_area()
    {
    
    var a=this.svalues*this.svalues
    this.a=a
    }
    
    square_per()
    {
    var p=(this.svalues)*4;
    this.p=p
    }

numsides()
    {
        var sd=this.sides
        this.sd=sd
    }

squeare_dia()
{
    var dia = this.svalues*rd
    this.dia=dia
}

    displaySquareArea()
{

    text3= text3+"<li>"+'The area of an square whose one side is '+this.svalues+', is '+this.a +" cm^2."+" Furthermore, its perimeter is "+this.p+" and its diagonal is equal to "+this.dia+ ", and the numbers of sides is "+this.sd+"."+"</li>";;
    return text3;
}
}//Closing Square class
const squ1 = new Squeare(7,4);
squ1.squeare_area()
squ1.numsides();
squ1.squeare_dia()
squ1.square_per()
squ1.displaySquareArea()

const squ2 = new Squeare(12,4);
squ2.squeare_area()
squ2.numsides();
squ2.squeare_dia()
squ2.square_per()
squ2.displaySquareArea()

text2=text2+"</ul>";
document.getElementById("p3").innerHTML = text3;


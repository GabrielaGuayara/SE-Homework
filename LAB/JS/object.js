var student =
{
    name: 'Adrian',
    lname: 'Quilli',
    class: 'Grade 8',
    age: '13',
    gender: 'Male',
    Maths:97,
    Science:95,
    English:96,

    average: () => 'His score average is ' +(student.Maths + student.Science + student.English)/3,
    
    info: function ()
    {
        return this.name+ " " + this.lname+ ' is in '+this.class+ ' and he is ' +this.age+" years old. "
    },

}
console.log (student.info() + student.average())


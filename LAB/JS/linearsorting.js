var array = [2,-6,3,8,7,-9]
num=array.length

for (var i=0; i<num-1; i++)
{
    for (var j=i+1; j<num; j++)
    {
        if (array[i]>array[j])
        {
            temp=array[j]
            array[j]=array[i]
            array[i]=temp
        }
    }
}
console.log (array)  


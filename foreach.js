///foreach function call a function for each element of an array.
let cars=["skoda","VW","BMW","BENZ","TOYOTA"]
let text=""
cars.forEach(myFunction)
{
    console.log(text)
}
function myFunction(item,index)
{
    text=text+ index+": "+item+"\n";
}
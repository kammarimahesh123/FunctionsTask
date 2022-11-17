let time=new Date().getHours();
let m=new Date().getMinutes();
let s=new Date().getSeconds();
function timeconvert(time)
{
    if(time>12)
    {
        time=time%12;
        console.log(`${time}: ${m}:${s} PM`)
    }
    else if(time>0 && time <12)
    {
        let time1=time;
        console.log(`${time1}: ${m}:${s} AM`)
    }
}
timeconvert(20)
//////////////////////////////////////////
let ptime = new Date().getHours();

function convertTime(ptime){
    
    if(ptime>12)
    return ptime-12 +" PM";
    else 
    return ptime + " AM"
}
console.log(convertTime(10));

console.log(new Date().getHours())

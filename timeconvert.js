let ptime = new Date().getHours();

function convertTime(ptime){
    
    if(ptime>12)
    return ptime-12 +" PM";
    else 
    return ptime + " AM"
}
console.log(convertTime(24));

console.log(new Date().getHours())
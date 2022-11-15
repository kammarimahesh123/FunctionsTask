
    var x=5;
    var y=5;
let promise=new Promise((resolve,reject)=>{

    if(x===y)
    resolve("Can continue....")
    else
    reject("Stop")
})
promise.then(data=>
{
    console.log(data,(x*y));
})
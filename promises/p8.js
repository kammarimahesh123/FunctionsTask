let promise=new Promise((resolve,reject)=>{

    let seats=3;
    let users=3;

    if(seats===users)
    resolve("tickets available. You can book the tickets")
    else
    reject("Not available.Wait for the next show")
});

function protopay(){
    console.log("proceed to payment")
}
promise.then((data)=>{
    console.log(protopay(),data)
}).catch(data=>{console.log(data)});
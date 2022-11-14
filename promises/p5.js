
let cardaccept=function()
{
    return new Promise((resolve,reject)=>{
            resolve("Card Accepted==>")
    })
};

let transact=function(message){
    return new Promise((resolve,reject)=>{
        resolve(message +"\n You can go for transcation==>")
    });
}

let withrdraw=function(message){
    return new Promise((resolve,reject)=>{
        resolve(message+"\n Withdraw amount==>")
    })
}
let trancom=function(message){
    return new Promise((resolve,reject)=>{
        resolve(message+"\n Transcation Completed==>")
    })
}
let response=function(message){
    return new Promise((resolve,reject)=>
        {
            resolve(message+"\n Thanku for using SBI ATM")
        })
}

cardaccept().then(data=> {return transact(data);})
.then(data=>{return withrdraw(data);})
.then(data=>{return trancom(data);})
.then(data=>{return response(data);})
.then(data=>{console.log("Transaction Process:\n"+data);});
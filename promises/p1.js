function evenNum(){
    return [2,4,6,8,10];
}
let promise=new Promise((resolve,reject)=>{
let x=6;
if(x%2===0){
    resolve("EVEN")
}else{
    reject("ODD")
}
})
.then(data=>{
    console.log("Even Numbers:" , evenNum())
}).catch(data=>
    {
        console.log(data)
    });

function cal(a,b){
    let promise=new Promise((resolve,reject)=>{
        if(a>b){
        resolve("a is greater")
        return a;
        }
        else
        {
            reject("b is greater")
            return b;
        }
    })
    promise.then(x=>{
        console.log(x)
    }).catch(x=>{
        console.log(x)
    })
    
}
console.log(cal(2,4));
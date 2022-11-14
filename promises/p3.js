
const myPromise=new Promise((resolve,reject)=>{

    setTimeout(()=>{
        resolve("Hi.Iam mahesh.Whats up ")
    },1000);
});
myPromise.then(data=>{
    console.log(data);
})
//console.log(myPromise)

const promise=new Promise(resolve=>{
    resolve("Who are you")
});
console.log(promise)
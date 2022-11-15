const p1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(10)},2000);
    
});
const p2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
    resolve(20)},3000)
});
const p3=new Promise((resolve,reject)=>{
setTimeout(()=>{
    resolve(30)},2000);
});
Promise.all([p1,p2,p3]).then(x=>{
    const results=x.reduce((a,b)=>a+b);
    console.log(results)
})
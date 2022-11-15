
function calc(a,b){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(a*b)

        },2000);
    });
};

const add=async function(){
    var res=await calc(2,4);
    var res2= await calc(res,9);
    return await calc(res2,3)

}
add().then(x=>{console.log(x)});
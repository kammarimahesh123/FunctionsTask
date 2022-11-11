
function add(a,b,cbf){
    console.log(a+b);
    cbf();
}
function add1()
{
    console.log("Addition");
}

add(5,3,add1);
// let cal=function calculate(){
//     {
//         var sum=0;
//        for(let i=0;i<1000000000;i++)
//         sum+=i;
//     }
//     console.log("SUM IS:"+sum);
//     }

//     let p1=new Promise(function(resolve,reject)
//     {
//         var cal=true;
//         if(cal)
//         {
//             resolve("the sum is:"+ cal())
//         }
//         else{
//             reject("Error")
//         }
//     }) 
//     .then(val=>
//     {
//             console.log(val)
//     })
//     .catch(val=>
//         {
//             console.log(val)
//         });
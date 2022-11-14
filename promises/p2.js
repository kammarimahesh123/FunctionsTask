//function myFuntion()
{
  //  return "Go to Http://www.maheshjavascript.com"
}
let promise=new Promise((resolve,reject)=>{
    resolve("Iam learning Promises")
    
})
.then(message=>
 {
    console.log(message);
 }).catch(Error=>{
    console.log(Error);
 }   )
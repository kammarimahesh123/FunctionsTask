let users=["mahesh","veeresh","vaishnav","Tulasi","Nagamani"]

function getusers(){
    return new Promise((resolve,reject)=>{
        let array=Array.isArray(users);
        setTimeout(()=>{
            
        if(array===true)
        resolve("user Array..")
        else
        reject("Not an array")
    },2000);
});
};
function entries()
{
    var userentry=users.entries();

    for (let e of userentry)
    {
        console.log(e)
    }
}
let promise=getusers();

promise.then(data=>{
    console.log(data,entries())
})
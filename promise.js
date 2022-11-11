let p=new Promise(function(resolve,reject){

    var res=true;
    if(res)
    {
        resolve("it is true")
    }else{
        reject("it is false")
    }

})
.then(function(val){
    console.log(val)
})
.catch(function(val){
    console.log(val)
})
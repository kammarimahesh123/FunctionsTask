
function location(location){
    console.log("Do something to find the location")
    return new Promise((resolve,reject)=>{
        if(location==="google")
        resolve("Google says --HI" )
        else
        reject("Couldn't find the location")       
    f});

};

function findlocation(response){
    console.log("Found the location");
    return new Promise((resolve,reject)=>{
        resolve("Extra information" +response)
    })
};
// const newLocal = location("google").then(response => {
//     console.log("response received");
//     return findlocation(response);
// }).then(responsereceived => { console.log(responsereceived); });

async function getlocation(){
    try{
    var res=await location("facebook");
    //console.log("response received")
    var res1=await findlocation(res)
    console.log(res1)
}catch(err){
    console.log(err)
}finally{
    console.log("I try to find the location")
}

}
getlocation();
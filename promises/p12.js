
function result(){
    return new Promise((resolve,reject)=>{

    let centres=["Hyd","Wrg","Ngd","Adb"]
    setTimeout(()=>{
        for(var c of centres){
            if(c==="Hyd")
            {
                resolve("Found Centre....");
            }
            else
            {
                reject("Not written exam...");
            }}
        },3000);

    })};
    
    function checkhall(){
        return "Confirmed hall Ticket Number "
    };
    function findRoom(){
        return "Found Room"
    };
    function findSeat(){
        return "Found Seat"
    };
    // const result1 =async function(){
    //     const res1=await result();
    //     const res2=await result(res1,checkhall());
    //     return await result(res2,findRoom());
    // }

    result().then(x=>{console.log(x)})
             .then(x1=>{console.log(x1,checkhall(),findRoom())})
           .then(x2=>{console.log(x2,findSeat())})
           .then(x3=>{console.log(x3)})
           .catch(x=>{console.log(x)})



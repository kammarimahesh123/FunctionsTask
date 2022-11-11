
////Aysnchronous programming will never blocks other functions/staments
//// to get executed.. It executes other statements even it has complex task to be
/// executed.. After all statements blocked statement also get executed..
///// so at a time all the codes get executed.
console.log("heloo world");
setTimeout(()=>
{
    console.log(calculate())
    ,1000});
console.log("India lost the match with england ")
console.log("Sachin Tendulkar")


function calculate(){
{
    var sum=0;
   for(let i=0;i<1000000000;i++)
    sum+=i;
}
console.log("SUM IS:"+sum);
}

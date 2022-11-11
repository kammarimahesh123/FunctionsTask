////IN Synchronous programming, each statement will executes one by one 
///it will executes one thing at a time. Next statement will execute after
//// first statement gets executed.
//// If any one function has complex functionality we need to wait untill it gets
//// executed..This drawback can be resolved in the next concept that is 
/// Asynchronous programming.  
console.log("heloo world");
console.log(calculate());
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

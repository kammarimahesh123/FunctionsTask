////This function ecexutes an reducer function and return a single value
///example addition, subtraction, etc
let nums=[2,4,6,3,9]

let reduce=nums.reduce((a,b)=>{
       return a+b;
})
console.log(reduce)
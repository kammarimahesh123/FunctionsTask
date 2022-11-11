/////This function does operations on elements from end of the array
let nums=[2,34,6,3,89]

let reduceRight=nums.reduceRight((a,b)=>{
       return a-b;
})
console.log(reduceRight)
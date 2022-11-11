/////This function call a function for every element of an array
///Like taking an element and changing it.
///like changing to double,squareroot
///mapping means taking the element and changing it
let nums=[2,4,6,3,9]

let map=nums.map(a=>{
       return Math.sqrt(a);
})
console.log(map)
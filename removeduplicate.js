let nums=[3,5,7,2,3,8,3]
function removeduplicates(nums){

return nums.filter((num,index)=>
    nums.indexOf(num)===index);


}
console.log(removeduplicates(nums));


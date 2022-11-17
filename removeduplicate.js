var arr=[3,4,3,5,6,3,2,1,3]
function rDuplicates(arr){

    var temp=[];
    arr.forEach(x=>{
        if(!temp.includes(x)){
            temp.push(x);
        }
    });
    return temp;
}
console.log(rDuplicates(arr));
/////////////////////////////////////////////////////
let arr1=[2,3,4,4,6,7]

let arr2=[4,5,7,2,4]

let arr3=arr1.concat(arr2)

let rdup=new Set(arr3)

console.log(rdup)
////////////////////////////////////////////////////////////////

let nums=[3,5,7,2,3,8,3]
function removeduplicates(nums){

return nums.filter((num,index)=>
    nums.indexOf(num)===index);


}
console.log(removeduplicates(nums));


var arr=[4,6,7,3,4,5,9,4]
function duplicates(arr)
{
    let arr1=[...new Set(arr)]
    console.log(arr1);
};
duplicates(arr);

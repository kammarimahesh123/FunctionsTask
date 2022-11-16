let arr=[8,3,4,6,4,2,4]
let n=arr.length;
function mostRepeated(arr,n){

let maxcount = 0;
let element_repeats = [];
for (let i = 0; i < n; i++) 
{
  let count = 0;
  for (let j = 0; j < n; j++) 
  {
    if (arr[i] === arr[j])
     {
      count++;
     }
  }

  if (count > maxcount) 
  {
    maxcount = count;
    element_repeats = arr[i];
      }
}
return element_repeats;

}
console.log(mostRepeated(arr, n));


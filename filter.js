////The filter function returns an array of elements which passes a test.
const ages=[2,5,1,45,32,24,19]

function checkage(age)
{
    return age>18;
}
let filter=ages.filter(checkage);

console.log(filter)
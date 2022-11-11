////The every function check if all the elements in an array passes a test or not and returns a boolean value

const ages=[2,51,1,45]
const ages1=[23,51,19,45]

function checkage(age)
{
    return age>18;
}

console.log("Are all the elements passes a test from ages:"+ages.every(checkage));

console.log("Are all the elements passes a testfrom ages1:"+ages1.every(checkage));


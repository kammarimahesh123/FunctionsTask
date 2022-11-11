///The some function checks if any array element passes a test and returns a boolean value.

const ages=[2,5,1,3]

function checkage(age)
{
    return age>18;
}

console.log(ages.some(checkage));

///The find function returns a value of first element in an array element that passes a test.
//// The findIndex() function returns the index of first elements that passes a test
//// if there is no value matches according to function it return undefined

const ages=[2,51,1,45]

function checkage(age)
{
    return age>18;
}

console.log("The value which passes a test:"+ages.find(checkage));
console.log("The index of a value which passes a test:"+ages.findIndex(checkage));
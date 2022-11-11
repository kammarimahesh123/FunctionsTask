
////The splice method adds or removes any element from an array.

//// This method changes the original array.

//// Syntax: array.splice(index, howmany elements, item1,item2...)----ADDDING
 ///// syntax: array.splice(index,homwany)----REMOVING
let cars=["skoda", "BMW", "VW","Toyota"];

carssplice=cars.splice(2,0,"BENZ");
console.log(cars);

cars.splice(1,1);
console.log(cars);
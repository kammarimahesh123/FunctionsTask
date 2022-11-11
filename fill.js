////The fill() function fills the specified element in an array.

/// The fill() method overwrites an original array
/// SYNTAX: array.fill(value, start, end)
let cars=["skoda","volvo","VW","BMW","BENZ","TATA"]


const fill=cars.fill("AUDI",0,2);
console.log(fill);

///This fills with element "JAGUAR" throughout array. Start and close index can be specified. Otherwise all elements will filled
console.log(cars.fill("JAGUAR"))

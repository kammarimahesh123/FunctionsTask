

const count = false;

let countValue = new Promise(function (resolve, reject) {
    if (count) {
        resolve("There is a count value.");
    } else {
        reject("There is no count value");
    }
});
countValue.then(data=>{
console.log(data);})
.catch(data=>{
    console.log(data)
})
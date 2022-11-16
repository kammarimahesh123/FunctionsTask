

// function olddate(){
// let d=new Date().getDate();
// let m=new Date().getMonth();
// let y=new Date().getFullYear();
// console.log(d,m,y)

// }
// olddate();
// console.log(d)

var date= new Date("16 Nov 2022");
var ydate=new Date("16 Nov 2022")

console.log("present Date:", date.toString())

date.setMonth(date.getMonth()-1)
 ydate.setFullYear(date.getFullYear()-1)
console.log("after subtracting one month:",date.toString())
console.log("after subtracting one year",ydate.toString())


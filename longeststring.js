var str=["Mahesh","veeresh","kammariTulasi","vaishnav"];

console.log(str.reduce((a,b)=>(b.length>a.length? b:a)));


// function longest(str)
// {
//     let max=0;
//     let long;
//     let n=str.length;
//     for (let i=0;i<=n;i++)
//     {
//         if(str[i].length > max)
//         {
//             max=str[i].length
//             long=str[i];
//         }
    
//     }
//     console.log(long)
// }
// longest(str);
// /////////////////////////////////////////////////

// var arr=["I","am","Mahesh","i","live","in","Hyderabad"]

// function longestword(arr){

//     let lngth=""

//     arr.forEach(function(x)
//     {
//         if(x.length>lngth.length)
//         {
//             lngth=x;
//         }
//     });
//     return lngth;
// }
// console.log(arr)

//console.log(str.length())
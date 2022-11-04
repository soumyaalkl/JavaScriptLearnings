//Write a Program to reverse an array without using reverse method.

var a = [1,2,3,4,5];
var b = new Array();


for(var i = a.length;i>=1;i--){
   
    b.push(a[i-1]);
   
}
console.log(b);





// // //Write a function to check whether given number is even or odd.
// var a;

// function checkEvenOdd(a){
//     if (a%2==0){
//         console.log('This is an even number');
//     }
//     else{
//         console.log('This is an odd number')
//     }
// }
// checkEvenOdd(11);


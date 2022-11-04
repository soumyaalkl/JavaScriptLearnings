//Functions in Java
//-has parameters(done during declaration of a function) and arguments(during invoking a function).

// function print(){
//     console.log('Calling/Invoking a function');
//     console.log('Welcome to JavaScript');
//     console.log('Hello');

// }

// print();



//Adding numbers
// function addTwoNumbers(a,b){ //parameters, no datatype,dynamic
//     return(a+b);
// }
// // console.log(addTwoNumbers(10,20)); //passing arguments while invoking
// // console.log(addTwoNumbers(10,true)); //output:11 since true retuns the value 1
// // console.log(addTwoNumbers(10,false)); //output:10 since true retuns the value 0

// // console.log(typeof(addTwoNumbers(10,true))); //output:number

// // console.log(addTwoNumbers.length); //returns the number of parameters
// // console.log(addTwoNumbers.name);
// // console.log(addTwoNumbers.toString());

// //find maximum value 
// function maxOfAll(){
//     var max=0;
//     for(var i=0;i<arguments.length;i++){
//         if(arguments[i]>max){
//             max=arguments[i];
//         }
//     }
//     return max;
// }

// console.log(maxOfAll(10,20,30,40,50));

//******Function Declaration:*******
// function function name(){
    //Block of code
    //}
   
    
    //var variableName=function(){
        //block of code

   // }

   //new
   // var functionName=new Function(//block of code)
    //var functionName =new Function('Third way');

   //Arrow Function: ES6
//    var functionName=()=>{
//     console.log('Fourth Way');
//    }
//    functionName();

   //First class citizens of java

//    function fun1(){
//     return'this is fun1';
//    }
//    var x = fun1();
//    console.log(x);
// var arr=[20,'hi',undefined,function()
// {
//     return 'Inside an array';
// }];
// console.log(arr[3]);

// var obj={
//     name:'Sam',
//     number:7428612,
//     details:function(){
//         return 'Hello,this is '+ this.name;
//     }
// }

// console.log(obj.details());

//Declaring nested (one function inside another) functions

// function fun1(){
//     var a=10;
//     console.log('this is fun1 '+a);
//     function fun2(){
//         var b=20;
//         console.log('this is fun2 '+b);
//     }
//     fun2();

// }
// fun1();

//Types of functions

//Arrow Functions

//Anonymous Functions
// var add=function(){
//     //block of code
// }
// add(); //to invoke just call by the variable


//Higher Order Functions
//function functionName(function(){
    //block of code
// })

//Callback Function

//IIFE: Immediately Invoked Function Expression
// (function fun1(){
//     console.log('this is an IIFE');
// })();
// (function add(){
//     console.log('hello');
// })();

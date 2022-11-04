
//*********   Objects in JavaScipt  ************
// --- Objects are collection of properties
// --- Non_primitive Datatype
// --- Stored as key-value pair
// --- Can stpore any datatypes


// var obj={
//     fname:'Samuel',
//     lname:'John',
//     age:25,
//     id:091
// }
// console.log(obj);
// console.log(obj.fname); // Two ways to access a single property. output:Samuel
// console.log(obj['fname']); // Second method. same output as above

//Ways of declaring object

// var a ={}; //Empty object
// console.log(a);
// // **** First Method
//  var obj1={
//     fname:'Samuel',
//     lname:'John',
//     age:25,
//      id:091
//  }


//  var b=new Object(); //Empty object
//  console.log(b);
//  console.log(obj1);
//  // ****Second Method
//  var obj2=new Object(); 
// //  obj2={
// //     fname:'Samuel',
// //     lname:'John',
// //     age:25,
// //      id:091
// //  }
// obj2=obj1;
//  console.log(obj2); 

// var student={
//     name:'Tony',
//     id:020,
//     age:25,
//     gender:'male',
//     course:['UI','QA'],
//     getDetails:function(){
//         return 'My name is '+this.name+' and my ID is '+this.id+'. I am enrolled in '+this.course[1];
//     },
//     'Listening classes':true, // To declare a key with more than one word use semicolon
//     instructor:{                 //Declare another object inside the object
//             name:'Kumar',
//             course:'UI',
//             id:10
//     }
// }
// console.log(student);
// console.log(student.name);
// console.log(student.instructor);
// console.log(student.instructor.name);
// console.log(student['Listening classes']); // calling a property having more than one word
// console.log(student.getDetails());

// // ***** //output:undefined-though property name not declared but called in the console, automatically a property with type undefined is created
// console.log(student.address); //output:undefined
// console.log(student.address='123 West St.'); //Can create and assign a property at the console
// console.log(a); // ReferenceError: a is not defined - variable a is not declared 


//Except primitive type, all the rest are treated as objects


//*******Object Methods********//


//object.assign:
var student={
    name:'Tony',
    id:020,
    age:25,
    gender:'male',
    course:['UI','QA'],
    getDetails:function(){
        return 'My name is '+this.name+' and my ID is '+this.id+'. I am enrolled in '+this.course[1];
    },
    'Listening classes':true, // To declare a key with more than one word use semicolon
    instructor:{                 //Declare another object inside the object
            name:'Kumar',
            course:'UI',
            id:10
    }
}

// var copyStudent= Object.assign({},student); // Two parameters- target 
// console.log(copyStudent);
// console.log(student);


// Object:keys():
// console.log(Object.keys(student)); //Returns all the keys as an array


// //objectInspect.values():
// console.log(Object.values(student)); //Returns all the values as an array

// //objectInspect.entries():
// console.log(Object.entries(student)); //Returns all the keys and values as an array


for(keys in student){
    console.log(keys); //Output: displays all keys
    console.log(keys,student[keys]); //Output: displays all keys and its values

}
console.log(Object.getOwnPropertyNames(student));

//writable:
//enumerable: 

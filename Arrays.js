
// two syntax to create an array
// 1.var a= new Array();
// 2.var a= [1,2,3,4,5];
/*var a= [1,2,3,4,5];
console.log(a);
console.log(a.length);
console.log(a[3]);
console.log(typeof(a));
console.log(typeof(a[2]));
*/

// var a2=['Ram','Sam','Ryan','Peter'];
// console.log(a2);
// console.log(a2[2]);

// var a3=['Ram',3,null,''];
// console.log(a3);

// a3[1]=10;
// console.log(a3);



//Array Methods
//push(): Adds elements at the end of array.It will return new lenght of array.
// var names =['Peter','Harry','Sam','Ryan'];
// console.log(names.length);
// console.log(names.push('Samuel','Jo')); //output: 6
// console.log(names);


// //pop(): Removes elements at the end of array.It will return the removed element.
// var names =['Peter','Harry','Sam','Ryan'];
// console.log(names.length);
// console.log(names.pop()); // output: Ryan
// console.log(names);

// //unshift():Adds an element at the begining of array.It will return new lenght of array.
// var names =['Peter','Harry','Sam','Ryan'];
// console.log(names.unshift('Ron')); //output: 5
// console.log(names);


// //shift():Removes an element at the begining of array.It will return the removed element.
// var names =['Peter','Harry','Sam','Ryan'];
// console.log(names.shift()); 
// console.log(names);


// //indexOf(): Returns the index number of first matching elemnt. Does forward search
// var names =['Peter','Harry','Sam','Ryan','Sam'];
// console.log(names.indexOf('Sam')); 
// console.log(names.indexOf('Sam',1)); //output:2, starts search from 1st index
// console.log(names.indexOf('Sam',3)); //output:4, starts search from 3rd index

// var str= 'This is new example, lets see in this example for clear understanding';
// console.log(str.indexOf('example')); 

// //lastIndexOf():Does backward search,returns index number of the first matching elemnt
// var names =['Peter','Harry','Sam','Ryan','Sam'];
// console.log(names.lastIndexOf('Sam')); 
// console.log(names.lastIndexOf('Sam',1)); 
// console.log(names.lastIndexOf('Sam',3));
 
// var str= 'This is new example, lets see in this example for clear understanding';
// console.log(str.length);
// console.log(str.lastIndexOf('example')); 


//search():
// var str= 'This is new example, lets see in this example for clear understanding';
// console.log(str.search('see'));

// //toUppercase():       toLowercase():
//var str= 'This is new example, lets see in this example for clear understanding';
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());



//startsWith(): endsWith():      ---Returns true or false
// var str= 'This is new example, lets see in this example for clear understanding';
// console.log(str.startsWith('e')); 
// console.log(str.endsWith('ing'));


// //toString(): converts array elemnts to strings
// var names =['Peter','Harry','Sam','Ryan','Sam'];
// console.log(names);
// var b=names.toString();
// console.log(b);


// //join()
// var names =['Peter','Harry','Sam','Ryan','Sam'];
// var b=names.join('');
// console.log(b); //output:PeterHarrySamRyanSam
// var c=names.join('  ');
// console.log(c); //output:Peter  Harry  Sam  Ryan  Sam
// var d=names.join('/');
// console.log(d);// output:Peter/Harry/Sam/Ryan/Sam
// var e=names.join(':');
// console.log(e);// output:Peter:Harry:Sam:Ryan:Sam


// //includes():
// var names =['Peter','Harry','Sam','Ryan','Sam'];
// console.log(names.includes('Harry')); //output:true
// console.log(names.includes('James')); //output: false

// var str= 'This is new example, lets see in this example for clear understanding';
// console.log(str.includes('example')); //case sensitive function -  Returns true or false

// // //reverse(): Reverses the array; overwrites the original array
// var names =['Peter','Harry','Sam','Ryan','Sam'];
// console.log(names.reverse());

// //sort():Sorts the array; overwrites the original array

// var names =['Peter','Harry','Sam','Ryan','Sam'];
// var names1=['Peter','harry','Sam','ryan','Sam'];
// console.log(names.sort());
// console.log(names1.sort());

// var num =[5,43,9,1,76,10,54];
// console.log(num.sort());
// console.log(num.sort((a,b) => a - b ));  --uses lamda function


// //slice():
// var num =[5,43,9,1,76,10,54];
// console.log(num.slice(1,4));
// var names =['Peter','Harry','Sam','Ryan','Sam'];
// console.log(names.slice(1));

//slice(start,end)
// console.log(names.slice(1,4));


// //splice(): adding or removing array element
// //Syntax: arrayName.splice(index,no of element to remove,elmt1,elmt2,...)
// var names =['Peter','Harry','Sam','Ryan','Sam'];
// console.log(names.splice(2,1,'Simon'));
// console.log(names);
// console.log(names.splice(2,1,'James','Sam','Jo'));
// console.log(names);

//substring(start,end):
// var str= 'This is new example, lets see in this example for clear understanding';
// console.log(str.substring(5,20))
// console.log(str.slice(5,20)) // substring and slice methods are same 

//  //substr(start,number of characters):   
// var str= 'This is new example, lets see in this example for clear understanding';
//  console.log(str.substr(5,20)); // starts from 5th index and displays 20 characters from there


//replace(search string,replace string)
// var str= 'This is new example, lets see in this example for clear understanding';
// console.log(str.replace('see','saw'));



// //concat()
// var names =['Peter','Harry','Sam','Ryan','Sam'];
// var arr1 =[5,43,9,1,76,10,54];
// var arr2 =[true,false,null];
// console.log(names.concat(arr1,arr2));


// // for...in :index numbers of elemnt in an array
// var names =['Peter','Harry','Sam','Ryan','Sam'];
// for(var i in names){
//     console.log(i);
// }

// // //for...of:element values of array

// for(var i of names){
//     console.log(i);
//  }

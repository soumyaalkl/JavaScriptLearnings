//Scopes - global,block,local

//variable types- var,let,const
// let is same as var, we can change the value,but const once declared cannot be changed

// scope of var -function
//    let,const- block 

   //block
//    {
//     var a=10;
//     let b=20;
//     const c=30;
   
//     console.log('this is in block '+b);
//     console.log('this is in block '+c);
//    }
//      console.log('this is in block '+a);
    

    function fun1(){
        var a=10;
        let b=20;
        const c=30;
        console.log('this is in block '+a);  
    console.log('this is in block '+b);
    console.log('this is in block '+c);
    }
    fun1();
    //console.log('this is in block '+a); // var a has function scope so if we call the variable outside the function it won't return the value
    //console.log('this is in block '+b);
    //console.log('this is in block '+c);
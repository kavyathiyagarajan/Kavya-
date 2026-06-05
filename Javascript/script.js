// // var a = 10; //Reinitialize & Redeclare
// // let b = 20; //Reinitialize
// // const c = 30;

// // console.log(a);
// // console.log(b);
// // console.log(c);

// // var num = 10;
// // var str = "Kavya";
// // var undefine;
// // var Null = null;
// // var boolean = true;

// // console.log(typeof num);
// // console.log(typeof str);
// // console.log(typeof undefine);
// // console.log(typeof Null);



// // var bigInt = 123n;
// // var symbol = Symbol('li');

// // console.log(typeof bigInt)
// // console.log(typeof symbol)


// // var arr = [10,20,30,40];
// // console.log(typeof arr,arr);
// // var obj = {
// //     name:"Kavya",
// //     dept:["BSc CT"]
// // }
// // console.log(typeof obj,obj);

// // //Arithmetic operator(+,-,*,/)

// // var a = 40;
// // var b = 20;
// // console.log(a+b);
// // console.log(a-b);
// // console.log(a*b);
// // console.log(a%b);
// // console.log(a/b);


// // logicl operator(&&,||,!)
// //                &&    || 
// //true true      true  false
// //true false     false true
// //false true     false false
// // var a = true;
// // var b = false;
// // console.log(a&&b);
// // console.log(a||b);
// // console.log(!a);

// // // Relational Operator (>,>=,<,<=,==,!=)
// // a = 10;
// // b = 20;

// // console.log(a>b);
// // console.log(a<b);
// // console.log(a<=b);
// // console.log(a>=b);
// // console.log(a==b);
// // console.log(a!=b);
// // console.log(a===b);
// // console.log(a!==b);


// // Assignment operaor(+=,-=)
// // a = 10;
// // b = 20;

// // a += b; //30
// // console.log(a);
// // a -= b;
// // console.log(a);

// // // Unary Operator(--,++)

// // var a = 10;

// // console.log(a++);
// // console.log(++a);
// // console.log(a--);
// // console.log(--a); 

// // //Conditional statement
// //  var a = 10;
// //  var b = 20;
// //  //if condition
// // if(true){
// //     //Template Literals
// //     console.log(`${a} + ${b} = ${a+b}`)
// // } 


// // if(true){
// //     a = 10;
// //     console.log(a);
// // }

// // var a; //Hoisting
// // console.log(a);
// // var a = 10;

// // var a = 10; //global scope
// // let b = 20; //Block scope
// // const c = 20;  //Block scope
// // if(true){
// //     var a = 40;
// //     console.log(a);
// //     //let b=20;
// //     const c = 30;
// //     console.log(b);
// // }
// // console.log(a);
// // console.log(b);

// // var a = 10;
// // if(a%2===0){
// //     console.log(`${a} is Even`);
// // }
// // else{
// //     console.log(`${a} is Odd`);
// // }

// // var mark = 80;
// // if(mark >=90){
// //     console.log("O grade");
// // }
// // else if(mark >=70){
// //     console.log("A grade");
// // }
// // else if(mark >=35){
// //     console.log("Pass");
// // }
// // else{
// //     console.log("Fail"); 
// // }
    
// // var a = 10;
// // // condition ? True statement : False statement
// // var result = a%2===0 ? "Even" : "Odd";
// // console.log(result)

// // mark = 90;
// // var result = (mark >=90) ? "O grade" :
// //              (mark >=70) ? "A grade" :
// //              (mark >=35) ? "Pass" :
// //              "Fail";
// // console.log(result);

// // var day = 2;
// // switch(day){
// //     case 1:{
// //         console.log("Sunday");
// //         break;
// //     }
// //      case 2:{
// //         console.log("Monday");
// //         break;
// //     }
// //      case 3:{
// //         console.log("Tuesday");
// //         break;
// //     }
// //      case 4:{
// //         console.log("Wednesday");
// //         break;
// //     }
// //      case 5:{
// //         console.log("Thursday");
// //         break;
// //     }
// //      case 6:{
// //         console.log("Friday");
// //         break;
// //     }
// //      case 7:{
// //         console.log("Saturday");
// //         break;
// //     }
// //     default:{
// //         console.log("Invalid Input");
// //     }
// // }

// //Looping statement

// // 1 times 11 times 10 times
// // for(var i=1;i<=10;i++){
// //     console.log(i);
// // }

// // var val = 10247;
// // var count = 0;
// // while(val > 0){
// //      count++;
// //      val = Math.floor(val/10);
// // }
// // console.log(count);

// // do{
// // console.log("Do...while")
// // }while(false);

// // for(let i=1;i<=10;i++){
// //     if(i%2===0){
// //     continue; 
// //     }
//     console.log(i);
 // }
 
// function add(a=16,b=12){
//     console.log(a+b);
// }

// add(); //Hoisting
// var demo = (a=65,b=35) => {
//    console.log(a+b);
// }
// demo(10,20);
// demo();
// demo(10);

// var arr =[10,20,30];
// var arr2 =[..arr,40,50];
// console.log(arr);
// console.log(arr2);

//Destructuring operator

// var [m1,m2,m3,m4,m5] = [90,99,98,97,100]
// console.log(m1,m2,m3,m4,m5);

// var {Name,Mobile,dept,email,isActive}={
//     Name:"Kavya",
//     Mobile:9944623237,
//     dept:"CT",
//     email:"kavya@gmail.com",
//     isActive:true
// }
// console.log(Name,Mobile,dept,email,isActive);

// var arr = [10,20,30,40,50];

// // for..in
// for(let index in arr){
//     console.log(index)
// }
// //for..of
// for(let value of arr){
//     console.log(value)
// }
// var obj = {
//     name:"kavya",
//     dept:"CT",
//     mobile:6931564654for

// }
// for(let key in obj){
    

// }
// var arr =[1,2,3,4,5];

// var result = arr.map((val)=>(val*2));
// console.log(result);
// var even = arr.filter((val)=>val%2===0);
// console.log(even);
// var sum = arr.reduce((add,val)=>(add+val),0);
// console.log(sum);

var userName={
    Name:"kavya",
    Dept:"CT",
    skills{
        programming:["Java","Javasscript"];
        console.log(skills);
    }
}

var user={
    ...userName,
    Password:12358
}
console.log(user)
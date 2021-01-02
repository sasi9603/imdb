// // var str ="king  ";
// // var str1='kong ';
// // var str3=`goal 
// // <h1>good follow</h>
// // <p> lorem epsum</p>
// // <h1>head</h1>`;

// // console.log (str3);
// // document.write(str3);

// // var s="  anu my love";
// // var age="20";
// // var sal=10000;
// // var com="wipro";

// // console.log("my name is "+s+"  my age is   "+age+"my salary is   "+sal+"my company is  "+com);
// // document.write(`my anme is  ${s} and  my age is ${age} and i work for${com} and iam getting salaary${sal}`);
// // console.log(typeof s);
// // console.log(typeof sal);
// // //number
// // var num =10;
// // var num1=10.10;
// // var num2=1/1;
// // console.log(typeof num);
// // console.log(typeof num1);
// // console.log(typeof num2);


// // var test=true;
// // var test1=false;
// username ="raffi";
// var username;
// console.log(username);
// non-primitive data types
// let lang=['java','python',undefined,null,143,'ruby'];
// var array=['my','own','project','my','style'];
// var array1=new Array('atp','good','practice');
// console.log(lang[2]);
// console.log(array);
// console.log(array1);


//---------length---//



// var array3=Array(7);
// console.log(array3);
// var array4=Array.of(1,2,3,4,5);
// console.log(array4);
// var str="pavan is good boy";
// console.log(typeof(array3));
// console.log(Array.isArray(str));
// console.log(Array.isArray(array37))


//----string---to Array--3 methods----//

// var str="iam good boy";
// var strtoarray=str.split(' ');
// console.log(strtoarray);
// var es6=Array.from(str);
// console.log(es6);
// let[...king]=str;
// console.log(king);
// console.log(king.join(''));

//-///---concate array----//////



// let array1=['array','love'];
// let array2=['danger','dove'];
// let concating=array1.concat(array2,'king');
// console.log(concating);

// let total=[...array1,...array2,'pavan'];


//////------reverse the string-------///////

// var str ='good';
// var reverse=[...str].reverse().join('');
// console.log(reverse);





///-----4th-oct-------//////


// let user={
//     name:'anu',
//     sal:20000,
//     com:'cgi',
//     skills:['java','python','first','cc']}
// console.log(user.name);
// console.log(user.skills);


//-------literals----//
///----constructor-way------///


// let obj=new Object();
// obj.name='thopu';
// obj.age=20;
// obj.sal=30000;
// obj.com='tcs';
// console.log(obj);


//--------another method--//

// let name='pavan';
// let age=20;
// let rel='wife';
// let gf='divya';
// let ud={
// name:name,
// age:age,
// gf:gf,
// rel:rel,
// salary:28888
// };
// console.log(ud);

// let ud1={
//     name,
//     age,
//     gf,
//     rel,
//     salary:29900
//     };
//     console.log(ud1);
    


//-------multiple objects in  array----//





// var user=[
//     {
//         name:'pavan',
//         age:22,
//         sal:234567,
//         com:'ibm',
//         designation:'machine learnming',
//         dob:'20/12/1998',
//         loc:'bangalore',
//         genger:'male',
//         photos:'https://pixabay.com/photos/girl-horse-nature-rider-kiss-4455005/'
//     },
//     {
//         name:'raju',
//         age:22,
//         sal:234567,
//         com:'ibm',
//         designation:'machine learnming',
//         dob:'20/12/1998',
//         loc:'bangalore',
//         genger:'male',
//         photos:'https://pixabay.com/photos/girl-horse-nature-rider-kiss-4455005/'
//     },
//     {
//         name:'raffie',
//         age:22,
//         sal:234567,
//         com:'ibm',
//         designation:'machine learnming',
//         dob:'20/12/1998',
//         loc:'bangalore',
//         genger:'male',
//         photos:'https://pixabay.com/photos/girl-horse-nature-rider-kiss-4455005/'
//     },"selling"
    
// ];

// console.log(user);




////------------5th oct-----////




// let users={
//       name:'raffie',
//       age:22,
//       sal:234567,
//       com:'ibm'
// };
// let me =Object.create(users);
// me.name='manu';
// me.age=34;
// me.com='tcs';
// console.log(me);
// console.log(users);




/////---------object to array like object---//

// let users={
//           name:'raffie',
//           age:22,
//           sal:234567,
//           com:'ibm'
//     };
// let emp=Object.entries(users);
// emp.forEach(element => {console.log(emp);    
// });



// /////---------freezing------///


// let emp1={
//   'emp-name':'raffie',
//     'emp-age':22,
//     sal:234567,
//     com:'ibm'
// };
// let check=Object.freeze(emp);
// emp['emp-name']='king';
// console.log(check);

//---------object hold the data--//


// let emp={
//       'emp-name':'raffie',
//         'emp-age':22,
//         sal:234567,
//         com:'ibm',
//         alldata()
//         {
// console.log(`${this['emp-name']}
// and ${this['emp-age']}`);
//         }
//   };

// console.log(emp.alldata);





// //------------9th--oct----------------///



// function number(){
//     let args=arguments;
//     console.log(args);
//     console.log(Array.isArray(args));
//     let [...checkspread]=args;

//     console.log(typeof checkspread);
//     console.log(Array.isArray(checkspread));
//     console.log(arguments);
// }
// number(100,30,34,34,32);
// var array=[1,4,6,8];
// console.log(array);


//---------function closure------///


// var simpletext='hello simple text ho wr u ';
// function jspider(){
//     let jspidertext='hello j spider how r u ';
//     console.log(jspidertext);
//     function qspider(){
//         let qspidertext='hello qspider how r u';
//         console.log(qspidertext);
//         console.log(jspidertext);
//         console.log(simpletext);  
        
//     }
//     qspider();
// }
// jspider();


//----------call back-111------///


// function jspider(cb)
// {
//     console.log('j spider here');
//     cb();
    
// }
// jspider(function(){
//     alert('hello king prashanth');
// });

    
//-------call back 2222----//


// function jspider(cb)
// {
//     console.log('welocome j spider');
//     cb;
    
// }
// function qspider(){
//     console.log('welcome q spider');
    
// }
// jspider(qspider());



//-------function hoisting-------//


  //sachin();
   //function sachin(){
    //console.log('hey sachine how r u');
    
//}

 //dravid();
//var dravid=function (){
 //   console.log('hey how r u dravid');
    
//} 10-10-2019
   //let users = {
    //name :'sasi',
    //age : 20, 
    //company : 'infosis',
    //details : function () {
      //  console.log(`hello my name is ${this.name} and my age is ${this.age}and i work for ${this.company}`);
   // }
//};
// //users.details();
//   let numbers = () => {
//        console.log(arguments);
//   };
//   numbers(10, 20, 30, 40, 50, 30);
//   let numberses5 = function() {
//       console.log(arguments);

//   };
//   numberses5(10, 10, 30 );
// let numbers = (...rest) => {
//     console.log(rest);
//     console.log(typeof rest);
//     console.log(Array.isArray(rest));
// };
// numbers(10, 20, 30, 40, 30);
// let es5 = function () {
//     console.log(arguments);
//     console.log(typeof arguments);
//     console.log(Array.isArray(arguments));
// };
// es5(10, 20, 40, 50); 
                    // array methods....////
     
//  let lang = ['nodejs', 'angularjs', 'reactjs',];
//  lang.forEach(function(item){
//      console.log(item);
     
//  });

//  let lang = ['nodejs', 'angularjs', 'reactjs',];
//  lang.forEach((value, Array, index,) => {
//      console.log(value);
//      console.log(index);
//      console.log(Array);
//       });

// let user = ['nodejs', 'angularjs','reactjs',]
// for(let x of user){
//     console.log(x);
    

// // }

// let lang = ['angular', 'nodejs','java',];
// var pop = lang.pop();
// const lenth = lang.length;
// console.log(pop);
// console.log(length);

var h1 = document.getElementById('id'); 










































  
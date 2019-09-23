/***********************************
 * Variables and Data types
 */

/*
var firstName = 'Vova';
console.log(firstName);

var lastName ='Kovalyk';
var age =22;

var fullAge =true;
console.log(fullAge);

var job;
*/

/***********************************
 * Variables and type coercion 
 */

//  var firstName = 'John'
//  var age = 28;

//  console.log(firstName + ' '+age);

//  var job ,isMarried;

//  job ='teacher';
//  isMarried =false;

//  console.log(firstName+ 'is a '+ age + 'year old '+job + '.Is he maried? '+isMarried);
 
//  //Variable mutation 
//  age ='twenty eight'

//  job ='driver';
//  //alert is window witch jump from top websyte
//  alert(firstName+ 'is a '+ age + 'year old '+job + '.Is he maried? '+isMarried);
 
//  //prompt is window where a I can write something and witch jump from top websyte
//  var lastName =prompt('What is the last Name?');
//  console.log(firstName + ' '+ lastName);

 /******************************* 
  * Basic Operators
 */

//  var ageJohn = 28;  
//  var ageMark =32;

//  var joinOlder =ageJohn > ageMark;
// console.log(joinOlder);

// //typeof operator
// console.log(typeof joinOlder);

 /******************************* 
  *  Operator precedence
 */

//  var now =2018;
// var yeraJohn =1989;
// var fullAge=18;

// var isFullAge = now =yeraJohn >= fullAge;

// console.log(isFullAge);

// /**
//  * ...**... right-to-left
//  * ...=...  right-to-left
//  */

//  var x,y;
//  x =y =(3+5)*4 -6;
 

//  x=x*2; 
//  x*=2; //same on top 


/******************************* 
  *  If else statements
 */

 /********************************************
  * The Ternary Operator and Switch Statements 
  */

//   var firstName ='John';
//   var age =16;
//     //Ternary operator
//   age >= 18 ? console.log(firstName + ' drinks beer.') //if
//   : console.log(firstName + ' drinks juice.');///else

//   var drink = age >=18 ? 'beer':'juice';
//   console.log(drink);

//   //Switch statement

//   var job = 'teacher';

//   switch(job){
//       case 'teacher':
//       case 'instractor':
//           console.log(firstName + 'teacher kids how to code ');
//           break;
//       case 'teacher':
//           console.log(firstName + 'drib=ve uber in LA ');
//           break;
//           default:
//                 console.log(firstName + 'does somethig else ');
//   }

/**
 * Truthy Falsy values and equality operators
 */

 // falsy values : undefined, null , 0, '',NaN
 // truthy values:  Not falsy values

//  var height;
// height =0;
//  if (height || height === 0){
//      console.log('Variable is defined');
    
//  }else {
//      console.log('Variable has NOT been defiend');
//  }

 /**
  * 23 == '23' -true convert string to number 
  * 23 === '23' -false
  */

  /*****************************
   * Function
   */

   

//     function calculateAge (birthYear){
//         return 2018 - birthYear;
//     }
//    var ageJohn= console.log(calculateAge(1995));

/*****************************
   * Function Statemnts and Expressions
   */

   //Function Declaration
//   function whatDoYouDo(job, firstName)
//   {

//   }

   //Function Expression
//   var whatDoYouDo = function(job, firstName)
//    {
//        switch(job){
//            case'teacher':
//            return firstName +' teaches kids how to code';
           
//            case'driver':
//            return firstName +' drives Uber in LA';
         
//            case'designer':
//            return firstName +' esingns websites';
           
//            default:
//                 return firstName +' does somthing else';
//        }

//    }

//   console.log( whatDoYouDo('teacher','John'));
//   console.log( whatDoYouDo('driver','John'));
//   console.log( whatDoYouDo('designer','John'));
//   console.log( whatDoYouDo('instruktor','John'));

/*********************************************
 * Arrays
 */


//  var names = ['John','Mark','Jane'];
//  var years = new Array(1990,1969,1948);
//  console.log(names[1]);
//  console.log(names);
//  console.log(names.length);

//  names[1] ='Ben';
//  names[names.length]='Marry';
//  console.log(names);

//  names.push('Adam');///add new element to the end
//  names.unshift('Mr.'); // add on first position
//  names.pop();// delete end element
//  names.shift();// first element
//  console.log(names.indexOf('Ben'));
//  console.log(names);

/*********************************************
 * Objects and properties
 */
//Object literal
//  var john = {
//      firstName: 'John',
//      lastName:'Smith',
//      birthYear: 1990,
//      family: ['Jane','Mark','Bob','Emily'],
//      job:'teacher',
//      isMarried: false
//  };
//  console.log(john);
//  console.log(john.job);
//  console.log(john['lastName']);
// var x = 'birthYear';
//  console.log(john[x]);

//  john.job ='designer';
//  john['isMarried']=true;
//  console.log(john);

//  //new Object syntax
//  var jane = new  Object ();
//  jane.firstName = 'Jane';
//  jane.birthYear =1950;
//  jane['lastName'] = 'Smith';
//  console.log(jane);

/*********************************************
 * Objects and Methods
 */

// var john = {
//          firstName: 'John',
//          lastName:'Smith',
//          birthYear: 1990,
//          family: ['Jane','Mark','Bob','Emily'],
//          job:'teacher',
//          isMarried: false,
//          calcAge: function(birthYear){
//             this.age= 2018-this.birthYear;
//          }
//      };
     
//      john.calcAge();
//      console.log(john);


/*************************************************
 * Loops and  iteration
 */
/** 
 for (var i =0 ;i<10; i++){
    //console.log(i);
 }

 var names = ['John','Mark','Jane'];


 for (var i =0 ;i<names.length; i++){
   console.log(names[i]);
}
var i =0;


while(i<names.length){
   console.log(names[i]);
   i++;
}
*/
//continue and break statements
//  var names = ['John','Mark','Jane'];


// for (var i =0 ;i<names.length; i++){
//    if (typeof names[i] !== 'string')//difrent type string 
//    {continue;}
//   console.log(names[i]);
// }

// for (var i =0 ;i<names.length; i++){
//    if (typeof names[i] !== 'string')//difrent type string 
//    {break;}//stop when anather type 
//   console.log(names[i]);
// }


// for (var i=names.length -1; i >=0;i--){
//    console.log(names[i]);
// }

// var i = '56';
// var a = 56;
// i===a;
// var d = i+a;

// console.log(d)


/**********************************************************
 * JavaScript For me 
 */

//  var name ='John';

//  function first(){
//     var a ='Hello ';
//     second();
//    var x =a+name;
//    console.log(x);
//  }
//  function second(){
//    var a ='Hi ';
//    third();
//   var x =a+name;
//   console.log(x);
// }
// function third(){
//    var a ='Hey ';
  
//   var x =a+name;
//   console.log(x);
// }


// console.log(first())

/**
 * Socope Function 
 */
// var a ='John';

// first();

//  function first(){
//     var b ='Hello ';
//     second();
//     function second(){
//       var c='Hi ';
//       third();
    
//    }
   
//  }

// function third(){
//    var d ='Hey ';
//   console.log(c);
// }
 

/**
 * this Keyword
 */
var john = {
        firstName: 'John',
        lastName:'Smith',
        birthYear: 1990,
        calsculateAge: function(){
           console.log(this);
        }
    };
    john.calsculateAge();
// ////////Scope///////  


// function a () {   
    
//   console.log(b)
// }
// var b = 7
// a()

// ///// GLOBAL//////  (VARIABLE DECLARED OUT SIDE THE FUNCTION)

// var cars = 'BMW ,VOLVO';
// function car() {
//   console.log(cars);
// }
// car();



/////// LOCAL OR FUNCTION//////(INSIDE THE FUNCTION)

// function greet() {
//   var greeting = 'World!';
//   console.log(greeting);
// }
// greet(); //world




  //////// BLOCK //////    ( LET AND CONST can’t be accessed from outside that pair of curly braces AND VAR VARIABLE UNLIKE)

  // {
  //   let greeting = 'Hello World!';
  //   var lang = 'English';
  //   console.log(greeting); // Prints 'Hello World!'
  // }
  
  // console.log(lang);// Prints 'English'
 
  //console.log(greeting);    // Uncaught ReferenceError: greeting is not defined




  ///////// NESTED ////////
           //(scope can be nested inside another scope.)

//  var name = 'SONALI';
// function greet() {
//   var greeting = 'Hello';
//   {
//     let lang = 'English';
//     console.log(`${lang}: ${greeting} ${name}`);
//   }
// }
// greet();
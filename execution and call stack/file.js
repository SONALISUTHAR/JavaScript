
// //// Execution context /////

// var n = 5;   

// function square(n) {
//   var ans = n + n;
//   return ans;
// }

// var square1 = square(n); 
// var square2 = square(8);  

// console.log(square1)
// console.log(square2)

// ////// Scope Chain EXAMPLE /////

// var myVar = 1;

// function a(){
//     console.log(myVar);
// }  // 1

// function b() {
//     var car = 'bmw'
//     console.log('my car name is ' , car);
//     a()
// }
// b();


//  //////// Example///////
 
// function outer() {
//     var x = 10;
  
//     function inner() {
//       var y = 20;
  
//       console.log(x);
//       console.log(y); 
//     }
  
// inner();
//   }
  
// outer();

//////// scope  Chain example /////////

	var global_variable = 20;   // global variable

	function main_function() {
		
		var local_variable = 30; // inside variable

		var nested_function = function () {

			
			console.log(local_variable);
		}

		var another_nested_function = function () {
			
			
			console.log(global_variable);
		}

		nested_function();
		another_nested_function();
	}

	main_function();

/////////////////**************** REGULAR FUNCTION vs ARROW FUNCTION *************** *//////////////////////

/////Regular function :
let multi = function(x){
    return (x*x);
  };
  console.log(multi(9));


  //// Arrow function:
	var number = (a ,b) => {
		return (a + b);
	};
	console.log(number(4,5));

//////////////////// examples////////////

    function Car(name){
        this.brand = name ;
    }
    
   // const Car = (name)  => {
    //this.brand = name ;
//}

    let getData = new Car('hyundai')
    console.log(getData)

    ////////////NORMAL FUN examples ///////////

    let userInfo = {
        name : "this code is running",
        fullName() {
            
            console.log(this.name +'  Normal function')
        }}
    
   userInfo.fullName()

 ///////////ARROW FUNCTION/////////
   let personInfo = {
    name: " this code also running",
    fullName(){
        const data = () =>{
            console.log(this.name + ' Arrow function')
        } 
        data()
    }
   }  
   personInfo.fullName()
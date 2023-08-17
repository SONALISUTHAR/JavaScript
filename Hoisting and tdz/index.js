/////////Hoisting /////////////


console.log(addDecl(6,3));

function addDecl(a,b){
    return a+ b;
}


////****** HOSITING EXAMPLE ******//

//console.log(a)
greet()
function greet(){
    console.log('hey')
    
}
 var a = 5;
console.log(a)

///// example/////


function fun (){
    let name = 'aayushi suthar';
    console.log(name)  
}
fun()

////////////// EXAMPLE ///////////////////



var a = 4;

function greet() {
    b = 'VALUE IS';
    console.log(b); 
    var b;
}
console.log(a);



 /////////********** */ Temporal Dead Zone************ ///////

 console.log(varNumber)        //undefined
 //console.log(letNumber)

 var varNumber = 1;

 //let letNumber = 1;


 ///////***** SECOND EXAMPLE ******//////////
 
 
 var babyAge = 10;
 var isBirthday = true;  /// var first value has been used and re-declaration var inside the 'if' 

if(isBirthday) {
	var babyAge = 11; 
}
console.log(babyAge);



///////// keyword example /////////

const game = {
    football: 11,
    cricket : 11,
    id       : 2498,
    getData : function() {
      return this;
    }
};

console.log('number of players of', game.getData());

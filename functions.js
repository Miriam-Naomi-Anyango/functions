
/*Function hoisting is possible in javascript and it's a state whereby you can invoke/call/or 
execute a function before you declare it. This can be in fact true only if only you will
declare the function later somewhere in your program. This means that if you try to call a function that 
is not declared anywhere in the code, then the terminal results will be errors*/

miriam();
function miriam(){
    console.log("Hi Miriam");
}
/*Hoisting is just possible in javascript for functions declare with the "function" keyword.*/


function hesabu(num1, num2){
    console.log(num1 + num2);
}
hesabu(2,3);
hesabu(8,4);

/*Declariong functions with parameters is the best way of doing abstraction
Once a function has been declared using parameters as shown above, you can 
pass into it all the arguments you need. If at all you don't have arguments to 
pass through in place of your function parameters, you can declare a function 
with default parameters as shown below.*/

function lazima(_myName= "Miriam", _myPurpose="trial"){
    console.log(`My name is ${_myName} and the purpose of this function is ${_myPurpose}`);
}
lazima();

/*DEMONSTRATING RETURN VALUES*/
/*Sometimes functions in javascript are expected to return some value
Consider the example below*/

const weatherToday = "Rainy";

function returnValueTest(greeting, yourName){

    if(weatherToday === "Rainy"){
        return `${greeting} ${yourName}, it's very rainy today`;
    }
   
}
const result = returnValueTest("Hi", "Miriam");
console.log(result);

/*When JavaSCript engine encounters a "return" statement it returns the value
of the thing that appears to the right of the word. The thing could be a string,
a Number or an expression*/

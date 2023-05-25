/*DEFINING A FUNCTION USING FUNCTION DECLARATION*/
/*The most common way of to define a function is by use of a function declaration.*/

function myName(){
    console.log("Miriam");
}

/*"myName" is a pointer to some stored, potential, not yet actually run bit of work
(the function). The pointer is used to call, invoke or execute the function. We call/invoke 
a function by adding () after the pointer"*/


function myName(){
    console.log("Miriam")
}
myName();

/*Interestingly, you can write function declarations after you call them, for example*/

seeNow();
function seeNow(){
    console.log("You see, this is possible");
}

/*Functions can be passed arguments, given default arguments and so on*/

function weekDays(day1="Monday", day2="Tuesday"){
    console.log(`${day1} and ${day2} are days of the week`);
}
weekDays("Thursday", "Friday");

/*HOISTING*/
/*JavaScript's ability to call functions before they appear in the code is called hoisting
For hoisting to work, the function must be declared using a function declaration*/


/*FUNCTION EXPRESSION*/
/*Use of the grouping operator ()*/

(function(){
    console.log("You've been razzled!");
});

/*ANONYMOUS FUNCTION*/
/*An anonymous function is quite simply a function that does not have a name*/

// function() {
//     console.log("Really Anonymous")
// };

/*So how can we invoke an anonymous function? We actually have no way of calling it.
WE lose access to our function immediaately after it's created. We however have seen
one way of using it, callback function. For example, you'll often see anonymous functions
passed as an argument to an event listener*/

// const button = document.getElementById("button");
// button.addEventListener("click", function(){
//     console.log("Yet more razzling");
// });

/*Our anonymous function is being stored as an argument to addEventListener. The JavaScript 
engine "stores it away" as work to be executed later when the button is clicked.*/


/*DEFINING A FUNCTION USING A FUNCTION EXPRESSION*/
/*Another way we can solve the problem of accessing an anonymous function is by declaring
a variable and assigning the function as it's value. Recall that any expression can be assigned to a variable; 
this includes function espressions:*/

const myFunction = function(){
    console.log("Go Mirry, you're mastering it, and you're soon becoming a pro");
}

myFunction();

/*Function Expressions are not hoisted*/


/*DEFINING AN IIFE: Immediately-Invoked Function Expression*/
// Another way to invoke an anonymous function is by creating what's known as Immediately Invoked Function Expression (IIFE).

// The first () are used as grouping operators while the second () is used as function invocation

(function(thisNumber) {
    return thisNumber + 3;
})(2);
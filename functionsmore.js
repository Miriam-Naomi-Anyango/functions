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
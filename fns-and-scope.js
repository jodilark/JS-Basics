//////////////////PROBLEM 1////////////////////

var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only parameter.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

  function isTyler(name) {
    if (name === "Tyler"){
      return true;
    } 
    return false;
  }

//////////////////PROBLEM 2////////////////////


//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.


function getName() {
  var userName = prompt(name);
  return userName;
}


//////////////////PROBLEM 3////////////////////



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

function welcome() {
  var userName = getName();
  alert("Welcome, " + userName);
}

//////////////////PROBLEM 4////////////////////




//What is the difference between arguments and parameters?

  "parameter is the variable that a function uses"
  "arguement is a value that is assigned to the variable that the function uses"


//////////////////PROBLEM 5////////////////////



//What are all the falsy values in JavaScript and how do you check if something is falsy?


  "empty string"
  "0"
  "false"
  "null"
  "undefined"
  "NaN"



//////////////////PROBLEM 6////////////////////



//Create a function called myName that returns your name

  function myName(){

  return name;
  }


//Now save the function definition of myName into a new variable called newMyName
// var myNewName = myName();
  function newMyName(){
  return myName;
}
//Now alert the result of invoking newMyName

alert(newMyName);

//////////////////PROBLEM 7////////////////////



//Create a function called outerFn which returns an anonymous function which returns your name.
function anonymous() {
  return "name";
}
  function outerFn() {
    return anonymous;
  }

//Now save the result of invoking outerFn into a variable called innerFn.

 var str = innerFn;

//Now invoke innerFn.
innerFn();
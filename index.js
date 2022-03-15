// assignment operators that works from right to left
var a;
var b = 7;
a = 10;
b = a;
console.log(b);

// string concat by two ways

// first ways
var second = "my name is sanjeev " + "good morning sir ";

console.log(second);

// second ways

var first = "my name is hey ";
first += "my name is hello ";

console.log(first);

var edit = "jello world";

edit = "hello world";

console.log(edit);

// function with parameter and argument

function wordBlank(noun, adjective, pronoun) {
  var result = "";
  result += " the details are " + noun + adjective + pronoun + "world ";
  return result;
}

console.log(wordBlank("dog", "cat", "bigCat"));

// modification of array

var myArray = [10, 20, 30];

myArray[0] = 30;

myArray[1] = 20;
myArray[2] = 10;

console.log(myArray);

// manipulate array with push function adding the array

var add = ["dog,cat"];

add.push(["sanke", "lion"]);

console.log(add);

// manipulating array by removing the element by using pop

var sub = ["sanjeev", "sittu", "watch"];

sub.pop();

console.log(sub);

// using shift operator remove first element from an array

var nice = ["hi", "hello", "me"];

nice.shift();

console.log(nice);

// using unshift operator which add the elements in the begining of array

// var top =["friend","big-bang","goal"];

// top.shift();
// top.unshift(["naruto"]);

// console.log(top);

// function

function ourResuable() {
  console.log("hello world");
}

ourResuable();
ourResuable();

// global scope that is defind outside of scope

var global = 10;

function num1() {
//   variable without the var is automatically become as an global variable 
// but only inside the function 
  Localscope = 20;
}

// example of global scope

function Num2() {
  var output = "";
  if (typeof global != "undefined") {
    output += "my global " + global;
  }

  if (typeof Localscope != "undefined") {
    output += " my local " + Localscope;
  }
  console.log(output);
}

num1();
Num2();

// example of local scope but if we don't use var keyword then it will be accessible
// outside the code

function Local() {
   mykey = "sanjeev";
  console.log(mykey);
}

Local();

// not accessible outside of scope

console.log(mykey);

// global and local scope both are in function


var outerWear = "T-shirt";

function Both(){
    // local variable will be prescendent to global variable 
  var outerWear ="sweater";
  return outerWear;
}

console.log(Both());
console.log(outerWear);

// assignment with a returned value 

var changed = "";

function processArg(Num3){
    return (Num3 * 10/ 2);
}

changed = processArg(5)

console.log(changed);

// stand in line 

function standInLine(arr,item){

arr.pop(item);
return arr.shift();
}

var testArray = [1,2,3,4,5,6]

console.log("before: " + JSON.stringify(testArray))
console.log(standInLine(testArray,7))
console.log("after:" + JSON.stringify(testArray))

// using strict operator === and equality operator== 

function strict(value){
    if (value===3){
        console.log("its true bro ");
    }
    else{
        console.log('not a true bro')
    }
}
strict(3);

function compare (a,b){

    if(a===b){
        console.log("its true bro ");
    }
    else{
        console.log('not a true bro');
    }
}
compare(10,"10");

// spread operator combining two array or object into an another array  

const number1=[1,2,3,4];

const number2 =[6,7,8,9];

const number3 =[...number1,...number2];

console.log(number3);

// rest parameter passing indefinite number of arguments  

function sum(...theArgs) {
  return theArgs.reduce((previous, current) => {
    return previous + current;
  });
}

console.log(sum(1, 2, 3));
// expected output: 6

console.log(sum(1, 2, 3, 4));
// expected output: 10

// asynchronous behaviour 

console.log("i");

setTimeout(()=>{
  console.log("iceCream");
},2000);

console.log("hi");

// currying function where we can pass multiple number of arguments 

const curry = a=>b=>c=> a+b+c ;

console.log(curry(1)); 
console.log(curry(1)(2));
console.log(curry(1)(2)(3));

// iife primary reason to use iimediate invoke function to use data privacy 
//  if you try to access the variable outside the scope it will through you an error 

(function(){
  var iife="message";
  console.log(iife);
})
();

// closures 
// in closures inner function has an access of an outer or enclosing function 
// varaible 

function Welcome(name){
  var greetingInfo = function(message){
   console.log(message+' '+name);
  }
return greetingInfo;
}
var myFunction = Welcome('John');
myFunction('Welcome '); //Output: Welcome John
myFunction('Hello Mr.'); //output: Hello Mr.John

const input =document.querySelector('input');
console.log(input.getAttribute('value')); // Good morning
console.log(input.value);
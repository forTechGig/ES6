"Use Strict"

//deault parameter
function greet($greeting='Senthil'){
    console.log($greeting);
}

greet('Hello again');

//spread operator
let args = [1,2,3];
function withoutspread(args){
    console.log(arguments);
    console.log(`length::`+ arguments.length);
}

withoutspread(args);
console.log('use apply');
withoutspread.apply(null,args);
console.log('use es6');
withoutspread(...args);

//use parameters as arguments
//use parameters as arguments
    console.log('use parameters as arguments');

function argumentAsArray(arg1, arg2){
    console.log('length:'+ arguments.length);
    console.log(arg1 == arguments[0]);
    console.log(arg2 == arguments[1]);
}

argumentAsArray(1,2)

//====================
function passingArgumentToArg(first, second=first){
    return first+second;
}

console.log(passingArgumentToArg(1,2));
console.log(passingArgumentToArg(1));

//block level functions

if(true){

function testBlockLevelFunction(variable){
    console.log(variable)
}

testBlockLevelFunction('inside if block');
}
testBlockLevelFunction('outside if block');

// arrow function
var arrowFunction = (num1, num2) => {return (num1+num2)};

console.log(arrowFunction(1,8));



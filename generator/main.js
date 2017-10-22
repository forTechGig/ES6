"Use Strict"

function *generator(){

    console.log('firt itertion');
    yield 'running the first iteration';

    console.log('secone iteration');
    yield 'running the second iteration';

    return 'returing op';
}

let g = generator();


//iteating manually
/*console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);*/

//Iterate using LET
for(let val of g){
    console.log(val);
}


//Generator function Expression:
let generatorFunction = function *(value){
    for(let i=0; i< value.length; i++){
        yield value[i];
    }
}

let generatorObject = generatorFunction([1, 2, 3]);

console.log(generatorObject.next());
console.log(generatorObject.next());
console.log(generatorObject.next());
console.log(generatorObject.next());

//ECMA5 style 
//generators with object
var o = {
    generator: function *(value){
        for(var i=0; i< value.length; i++){
            yield value[i];
        }
    }
}

var gen = o.generator([1,2,3]);

console.log(gen.next());
console.log(gen.next());
console.log(gen.next());

//use Symbol.iterator
console.log('Use Symbol.iterator');
let values = [1,2,3];
let iterator = values[Symbol.iterator]();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

//Collection Iterators()
//entries Iterator
let colors = ['red', 'green', 'blue'];
for(let color of colors.entries()){
    console.log(color);
}

//values
let data = new Map();
data.set("title", "Understanding ECMAScript 6");
data.set("format", "ebook");
for (let value of data.values()) {
    console.log(value);
}

//keys

for (let value of data.keys()) {
    console.log(value);
}

//destruction and for of loop
console.log('destruction loop')
for(let [key, value] of data){
    console.log(key + ":" + value);
}

//String iterator
console.log('String Iterator');
var string = 'A @ . B';
for(var y=0; y<string.length; y++){
    console.log(string[y]);
}


//iterator in spread operator
let array = [1,2,3];
let arrayIterator = function(...array){
    for(let val of array){
        console.log(val);
    }
}

arrayIterator(array);

//passing arguments to the iterator
console.log('argumented iterator')
let argumentedIterator = function *sample(){
    let first = yield 1;
    let second = yield first+1;
    yield second+4;
}

let iteratorA = argumentedIterator();
console.log(iteratorA.next(2));
console.log(iteratorA.next(3));
console.log(iteratorA.next(8));
console.log(iteratorA.next(8));

//Throwing errors in the iterator


console.log('Throwing errors in the iterator')
let argumentedIteratorError = function *sample(){
    let first = yield 1;
    try{
    let second = yield first+1;
    }catch(ex){
        second = 6;
    }
    yield second+4;
}

let errorIter = argumentedIteratorError();
console.log(errorIter.next());
console.log(errorIter.next());
console.log(errorIter.throw(new Error('Booooooooooooooooooooom')));
console.log(errorIter.next());


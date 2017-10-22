"Use Strict"

//var a = "test1";
//let b = "test2";

//console.log(a);
//console.log(b);


/*function testVar(){
    var a = 10;
    if(true){
        var a = 20;
        console.log(a);
    }
    console.log(a);
}
testVar();

function testLet(){
    let a= 10;
    if(true){
        let a = 20;
        console.log(a);
    }
    console.log(a);
}
testLet();

for(var i=0; i<10; i++){
    console.log(i);
}
console.log(i);//print 10

for(let j=0; j<10;j++){
    console.log(j);
}
console.log(j);//throws error j is not defined
*/


const color = [];
color.push("green");
color.push("blue");

console.log(color);

color = "test";//throw error says assignemt to constant variable
console.log(color);

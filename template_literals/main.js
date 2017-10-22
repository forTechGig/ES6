"Use Strict"

let template = "<h1>Hello Testing template literal</h1>";

document.getElementById("template").innerHTML = template;

let name = "senthil";

//testing multiple line string
let multiLine = `<h1>Hello ${name} Testing 
template literal</h1>`;

document.getElementById("template").innerHTML = multiLine;

//using function in the string
let multiLineWithFun = `<h1>Hello ${showingName('Senthil raja,')} Testing 
template literal</h1>`;

document.getElementById("template").innerHTML = multiLineWithFun;

function showingName(name){
    return name;
}



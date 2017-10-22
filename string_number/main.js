"Use Strict"

let string = "I am learing JavaScript and i love it";

console.log(string.startsWith("I"));
console.log(string.startsWith("i"));

console.log(string.endsWith("it"));
console.log(string.endsWith("It"));

console.log(string.includes("it"));

console.log(string.repeat(3));
console.log(string.indexOf("it"));
console.log(string.lastIndexOf("it"));

//hex
console.log(0xFF);

//binary
console.log(0b01001);

//octal
console.log(0o544);

console.log(Number.isInteger(`eeee`))
console.log(Number.isNaN(NaN));
"Use Strict"

//set======================================
console.log('set======================================');
let myArray = [1,2,3];
let newSet = new Set(myArray);
console.log(newSet);

newSet.add(1);
console.log('after adding 1');
console.log(newSet);

newSet.add(4);
console.log('after adding 4');
console.log(newSet);

newSet.add('Senthilraja');
console.log('after adding a string value');
console.log(newSet);


newSet.add(['a','b']);
console.log('after adding a array value');
console.log(newSet);

newSet.delete(2);
console.log('after remove 2');
console.log(newSet);

//newSet.clear();
//console.log(newSet);

newSet.forEach(val => console.log(val));




//map==========================================
console.log('map======================================');
let newMap = new Map();
newMap.set(1, 1);
newMap.set(2, 2);
newMap.set(3, 6);
newMap.set(4, 7);

console.log(newMap);
console.log(newMap.delete(1));
console.log(newMap);
console.log(newMap.size);

console.log('map has methoid');
console.log(newMap.has(2));

newMap.forEach(e => {
    console.log('for each: ' + e)
})

console.log('weakset======================================');
//weakset

let newweakSet = new WeakSet();
let emptyKey = {};
let key1 = {
    make: 'honda',
    model:'accord'
}
newweakSet.add(key1);
newweakSet.add(emptyKey);

console.log("empty key");
console.log(newweakSet);

console.log('remove key1');
key1 = null;
console.log(newweakSet);

console.log(newweakSet.has(emptyKey) + " : " + newweakSet.size);
emptyKey = null;
console.log(newweakSet.has(emptyKey) + " : " + newweakSet.size);



//set is ec5 which is wrong since it fetches value for diferent object and not for the original key
let map = Object.create(null);
key1 = {};
key2 = {};
map[key1] = "testing";
console.log("checnking the map using ec5");
console.log(map[key2]);



//convert an Set to array
console.log('convert an Set to array===================================')
let setValues = new Set();
setValues.add(1);
setValues.add(4);
setValues.add(6);
setValues.add(6);

console.log(setValues);
console.log('after convertong set to array');
let setToarry = [...setValues];
console.log(setToarry);
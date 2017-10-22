"Use Strict"

class user{
    constructor(email, password, user){
        this.email = email;
        this.password = password;
        this.user = user;
    }

    registerUser(){
        console.log(this.user + 'is registered with '+ this.email)
    }

    static getUserName(){
        console.log('count is 50');
    }
}

//creating object and accessing
/*let senthil = new user('email@email.com','1234','senthil' );
senthil.registerUser();*/

//static method access
//user.getUserName();

class member extends user{
    constructor(email, password, user, memberpackage){
        super(email, password, user);
        this.memberpackage = memberpackage;
    }

    getPackage(){
        console.log('get package details'+this.memberpackage);
    }

    registerUser(){
        console.log("in member method**********");
    }
}

let bookClub = new member('senthil@email.com', '1234', 'senthil', 'standard');
bookClub.getPackage();
bookClub.registerUser();
//bookClub.getUserName();

member.getUserName();
//==============================================================================
//singleton

let singleton = new class{
    constructor(name){
        this.name = name;
    }

    getName(){
        console.log('name is' +this.name);
    }
}("senthil");

console.log('singleton object'+ singleton.getName());

//================================================================================
//testing getter and setter
class getterSetterTest{

    constructor(value){
        this.element = value;
    }

    get Element(){
        return this.element;
    }

    set Element(value){
        this.element = value;
    }
}

let getterSetterTestObj = new getterSetterTest('senthil');

console.log('before setter:'+ getterSetterTestObj.Element)
//setting the element
getterSetterTestObj.Element = 'raja';
console.log('after setting the element'+getterSetterTestObj.Element)


//======================================================================================
//testing computed member names

let element = 'Element';
class computedMemberNames{

    constructor(value){
        this.element = value;
    }

    get [element](){
        return this.element;
    }

    set [element](value){
        this.element = value;
    }
}

let computedMemberNamesObj = new computedMemberNames('senthil as element');

console.log('before setter:'+ computedMemberNamesObj.Element)
//setting the element
computedMemberNamesObj.Element = 'raja as element';
console.log('after setting the element'+computedMemberNamesObj.Element)

//======================================================================================
//Derived Classes from Expressions

function Rectangle(length, width){
    this.length = length;
    this.width = width;
}

Rectangle.prototype.getArea = function(){
    return this.length *this.width;
}

class square extends Rectangle{
    constructor(length){
        super(length, length);
    }
}

var x  = new square(10);
console.log("squareof 10 : " + x.getArea());

//=================================================================================================

function getBase(){
    return Rectangle;
}

class square1 extends getBase(){
    constructor(length){
        super(length, length);
    }
}

let x1  = new square1(10);
console.log("square11111of 10 : " + x1.getArea());
//=====================================================================================================
//symbol.species
class MyClass {
    static get [Symbol.species]() {
        return this;
    }

    constructor(value) {
        this.value = value;
    }

    clone() {
        return new this.constructor[Symbol.species](this.value);
    }
}

class MyDerivedClass1 extends MyClass {
    // empty
}

class MyDerivedClass2 extends MyClass {
    static get [Symbol.species]() {
        return MyClass;
    }
}

let instance1 = new MyDerivedClass1("foo"),
    clone1 = instance1.clone(),
    instance2 = new MyDerivedClass2("bar"),
    clone2 = instance2.clone();

console.log(clone1 instanceof MyClass);             // true
console.log(clone1 instanceof MyDerivedClass1);     // true
console.log(clone2 instanceof MyClass);             // true
console.log(clone2 instanceof MyDerivedClass2);     // false
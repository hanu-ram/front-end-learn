let person1 = {
  name1: undefined,
  age1: 20,
  salary: undefined,
  fun1: function ()
  {
    return this;
  }
};

person1.name1 = 'Hanu';
// console.log( person1.salary );

function Person ( name )
{
  this.name = name;
  console.log( this ); // Refers to the newly created object
}

// let person2 = new Person( 'Alice' );

"use strict";
let x = this;
// console.log( "strict x " + x )

// "use strict";
function fun2 ()
{
  return this;
}

// console.log( `fun 2 ${ fun2() }` );
const person = {
  firstName: "John",
  lastName: "Doe",
  language: "en",
  set lang ( lm )
  {
    this.language = lm;
  }
};


/*------------------------------- Constructors -------------------------------- */

function Book(name, author, category) {
  this.name = name;
  this.author = author;
  this.category = category;
  this.changeName = function (name) {
    this.name = name;
  }
}

const book1 = new Book('Story of Hanu', 'Hanu', 'Adventure');

book1.func1 = function () {
  return this.name;
}
// console.log(book1.func1());
book1.price = 200;
book1.changeName('Story of Hanumanth');
// console.log(book1.name);

// -------------------------------Object Iterables -------------------------------

for (const x of book1.author) {
  // console.log(x)
}

let stringify = JSON.stringify(book1);
let b2 = JSON.parse(stringify);


//-----------------------------Object Shortcuts ------------------------------------
const exampleObject = {
  variableInt : 3244,
  variableString : 'Hello'
}

let {variableInt, variableString} = exampleObject;
console.log(variableInt + '  '+ variableString);

const exampleObject2 = {
  variableString,
  /*
  variableInt: variableInt
   */
  variableInt,
  method1() {
    console.log('Method Executed!');
  }
};
console.log(exampleObject.variableInt);
exampleObject2.method1();


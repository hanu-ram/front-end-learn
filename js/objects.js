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
console.log( person1.salary );

function Person ( name )
{
  this.name = name;
  console.log( this ); // Refers to the newly created object
}

// let person2 = new Person( 'Alice' );

"use strict";
let x = this;
console.log( "strict x " + x )

// "use strict";
function fun2 ()
{
  return this;
}

console.log( `fun 2 ${ fun2() }` );
const person = {
  firstName: "John",
  lastName: "Doe",
  language: "en",
  set lang ( lm )
  {
    this.language = lm;
  }
};

function Person ( name )
{
  this.name = name;
  console.log( this ); // Refers to the newly created object
}

let person1 = new Person( 'Alice' );
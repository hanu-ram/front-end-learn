let object1 = {
  t1: 'Name',
  r1: 'Value',
  t1: 'Test',
  get getR1 ()
  {
    return this.r1;
  },
  set setR1 ( r1 )
  {
    this.r1 = r1;
  },
  getFunction: function ()
  {
    return 'My Name'.toUpperCase();
  }
}
object1.setR1 = 'NewValue'
const va = object1.getR1;
console.log( va );
console.log( object1.getFunction() )

Object.defineProperty( object1, "reset", {
  get: function () { this.t1 = 0; }
} )
Object.defineProperty( object1, "add", {
  set: function ( v ) { this.t1 = this.t1 + v; }
} )


object1.reset;
console.log( object1.t1 );
object1.add = 5;
object1.add = 5;
console.log( object1.t1 );

object1.name = function ()
{
  return this.r1 + "  ----------------  " + this.t1;
}

console.log( object1.name() );
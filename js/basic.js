console.log( 2 + 4 );
let myName = 'Hanu';
var stringTemplate = `Hello ${ myName }`;
console.log( stringTemplate );
function respond ()
{
  alert( "Greeting Message: " + stringTemplate )
}

if ( myName != 'hanu' )
{
  console.log( true );
}
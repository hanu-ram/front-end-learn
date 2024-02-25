let qty = 0;

function showQty ()
{
  console.log( `Added Quantity: ${ qty } ` );
}

function addToCart ()
{
  qty += 1;
  showQty();
}

function add2 ()
{
  qty += 2;
  showQty();
}

function add3 ()
{
  qty += 3;
  showQty();
}

function resetCart ()
{
  qty = 0;
  console.log( "Cart has been reset" );
  showQty();
}
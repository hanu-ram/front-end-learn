let computerMove = '';
function computerPlay () 
{
  let randomNumber = Math.random();
  if ( randomNumber >= 0 && randomNumber < 1 / 3 )
  {
    computerMove = 'Rock'
  }
  else if ( randomNumber >= 1 / 3 && randomNumber < 2 / 3 )
  {
    computerMove = 'Paper';
  }
  else if ( randomNumber >= 2 / 3 && randomNumber < 1 )
  {
    computerMove = 'Scissors';
  }
}

function playerRock ()
{
  computerPlay();
  let result = '';
  if ( computerMove === "Rock" )
  {
    console.log( computerMove );
    result = "Tie.";
  }
  else if ( computerMove === "Paper" )
  {
    console.log( computerMove );
    result = "You Loose!";
  }
  else if ( computerMove === "Scissors" )
  {
    console.log( computerMove );
    result = "You Win!"
  }
  alert( `You picked Rock, computer picked ${ computerMove }. ${ result }` );
}

function playerPaper ()
{
  computerPlay();
  let result = '';
  if ( computerMove === "Rock" )
  {
    result = "You Win!";
  }
  else if ( computerMove === "Paper" )
  {
    result = "Tie.";
  }
  else if ( computerMove === "Scissors" )
  {
    result = "You Loose!"
  }
  alert( `You picked Paper, computer picked ${ computerMove }. ${ result }` );
}
function playerScissors ()
{
  computerPlay();
  let result = '';
  if ( computerMove === "Rock" )
  {
    result = "You Loose!";
  }
  else if ( computerMove === "Paper" )
  {
    result = "You Win!";
  }
  else if ( computerMove === "Scissors" )
  {
    result = "Tie."
  }
  alert( `You picked Scissors, computer picked ${ computerMove }. ${ result }` );
}

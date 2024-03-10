let computerMove = '';
let scoreObject = JSON.parse(localStorage.getItem('score'));
let score = scoreObject || {
  wins: 0,
  losses: 0,
  tie: 0
}
console.log(scoreObject!=null)
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
  scoreBoard(result);
  alert( `You picked Rock, computer picked ${ computerMove }. ${ result }
Wins: ${score.wins}, Losses: ${score.losses}, Tie: ${score.tie}` );
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
  scoreBoard(result);
  alert( `You picked Paper, computer picked ${ computerMove }. ${ result }
Wins: ${score.wins}, Losses: ${score.losses}, Tie: ${score.tie}` );
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
  scoreBoard(result);
  alert( `You picked Scissors, computer picked ${ computerMove }. ${ result }
Wins: ${score.wins}, Losses: ${score.losses}, Tie: ${score.tie}` );
}

function scoreBoard(result) {
  if ( result === 'You Win!') {
    score.wins ++;
  }
  else if ( result === 'You Loose!') {
    score.losses ++;
  }
  else {
    score.tie ++;
  }
  localStorage.setItem('score', JSON.stringify(score))
}
function resetScore() {
  localStorage.removeItem('score');
}

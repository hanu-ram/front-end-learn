let computerMove = '';
let moveImage;
let scoreObject = JSON.parse(localStorage.getItem('score'));
let score = scoreObject || {
    wins: 0,
    losses: 0,
    tie: 0
}
function gameResult(result) {
    document.querySelector('.js-result')
        .innerHTML = result;
}
updateScoreElement();
function updateScoreElement() {
    document.querySelector('.js-score')
        .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Tie: ${score.tie}`;
}
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
        result = "Tie.";
    }
    else if ( computerMove === "Paper" )
    {
        result = "You Loose!";
    }
    else if ( computerMove === "Scissors" )
    {
        result = "You Win!"
    }
    scoreBoard(result);
    updateScoreElement();
    gameResult(result);
    initMoveImage(computerMove);
    document.querySelector('.js-move')
        .innerHTML = `You <img class="move-image" src="../images/rock-emoji.png">
  <img class="move-image" src="../images/${moveImage}"> Computer`;
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
    updateScoreElement();
    gameResult(result);
    initMoveImage(computerMove);
    document.querySelector('.js-move')
        .innerHTML = `You <img class="move-image" src="../images/paper-emoji.png">
  <img class="move-image" src="../images/${moveImage}"> Computer`;
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
    updateScoreElement();
    gameResult(result);
    initMoveImage(computerMove);
    document.querySelector('.js-move')
        .innerHTML = `You <img class="move-image" src="../images/scissors-emoji.png">
  <img class="move-image" src="../images/${moveImage}"> Computer`;
}
function initMoveImage(computerMove) {
    if ( computerMove === "Rock" )
    {
        moveImage = "rock-emoji.png";
    }
    else if ( computerMove === "Paper" )
    {
        moveImage = "paper-emoji.png";
    }
    else if ( computerMove === "Scissors" )
    {
        moveImage = "scissors-emoji.png"
    }
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
    updateScoreElement();
}

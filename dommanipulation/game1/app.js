/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer,player1,player2,gamePlaying;
init();


document.querySelector('.btn-roll').addEventListener('click',function(){
    if(gamePlaying){
        //Random Number
        dice= Math.floor(Math.random()*6) + 1;
        //Display the Dice Result
        diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = "dice-"+dice+".png";
        //Update the round score if round is not one.

        if(dice !== 1){
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;

        } else{
            //Next player
            nextPlayer();
        }
    }
    
});

document.querySelector('.btn-hold').addEventListener('click', function(){
    if(gamePlaying){
        // Change Global score by current score
        scores[activePlayer] += roundScore;

        document.querySelector('#score-'+activePlayer).textContent = scores[activePlayer];

        //check if winner
        if(scores[activePlayer] >= 100){
            document.querySelector('#name-'+activePlayer).textContent = "Winner!";
            document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
            document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
            document.querySelector('.dice').style.display = 'none';
            gamePlaying = false;
        }else{
            //Next Player
            nextPlayer();
        }
    }
    
});

document.querySelector('.btn-new').addEventListener('click',init);

function nextPlayer(){
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.querySelector('.dice').style.display = 'none';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
}

function init(){
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;
    player1 = prompt("What is the name of player 1");
    player2 = prompt("What is the name of player 2");
    document.querySelector('.dice').style.display = 'none';
    document.getElementById('score-0').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = player1;
    document.getElementById('name-1').textContent = player2;
    
    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
}
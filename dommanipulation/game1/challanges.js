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

var previousScore;

document.querySelector('.btn-roll').addEventListener('click',function(){
    if(gamePlaying){
        //Random Number
        dice1= Math.floor(Math.random()*6) + 1;
        dice2 = Math.floor(Math.random()*6) + 1;

        dice = dice1 + dice2;
        //Display the Dice Result
        showDice();
        document.querySelector('#dice-1').src = "dice-"+dice1+".png";
        document.querySelector('#dice-2').src = "dice-"+dice2+".png";
        //Update the round score if round is not one.
        if(dice===12 && previousScore===12){
            scores[activePlayer] = 0;
            document.querySelector('#score-'+activePlayer).textContent = 0;
            nextPlayer();
        }
        else if(dice1 !== 1 && dice2 !== 1){
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;

        } else{
            //Next player
            nextPlayer();
        }
        previousScore = dice;
    }
    
});

document.querySelector('.btn-hold').addEventListener('click', function(){
    if(gamePlaying){
        // Change Global score by current score
        scores[activePlayer] += roundScore;

        document.querySelector('#score-'+activePlayer).textContent = scores[activePlayer];

        //check if winner
        var winScore = document.querySelector('#main-score').value;
        if(winScore){
            winScore = winScore;
        }
        else{
            winScore = 100;
        }
        if(scores[activePlayer] >= winScore){
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
    hideDice();

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
}

function init(){
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;
    //player1 = prompt("What is the name of player 1");
    //player2 = prompt("What is the name of player 2");
    document.getElementById('score-0').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    hideDice();
    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
}

function hideDice(){
    document.querySelector('#dice-1').style.display = 'none';
    document.querySelector('#dice-2').style.display = 'none';
}
function showDice(){
    document.querySelector('#dice-1').style.display = 'block';
    document.querySelector('#dice-2').style.display = 'block';
}
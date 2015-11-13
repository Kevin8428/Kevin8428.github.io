var ui = {};

window.onload = function() {
var cardButton = document.getElementById('getPlayerCards');
var playerHitButton = document.getElementById('hitButton');
var genDealerCards1 = document.getElementById('dealerCardButton1');
playAgain.addEventListener('click',clearCards);

cardButton.onclick = function(){
  play();
  play();
};

playerHitButton.onclick = function(){
  play().selectCard();
};

dealerCardButton1.onclick = function(){
  genDealerCards();
};
};//////END OF WINDOW.ONLOAD///////////////////////////////////////////////////

var playerBank = 100;
var dealerBank = 100;
var cardMin = 1;
var cardMax = 14;
var currentCard = 0;
var playerScore = 0;
var dealerScore = 0;
var cardUpdate = 0;
var dlrCardUpdate;
var suitArr = ['spades', 'hearts', 'clubs', 'diamonds'];
var cardArr = ['two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine','ten', 'jack', 'queen', 'king', 'ace', ];
var deckArr = [];
var cardPlacement;
var cardPicked;

function clearCards(){
    document.getElementById('playerScore').innerHTML = 0;
    document.getElementById('dealerScore').innerHTML = 0;
    playerDiv = document.getElementById('playerCardSection');
    while(playerDiv.firstChild) playerDiv.removeChild(playerDiv.firstChild);
    dealerDiv = document.getElementById('dealerCardSection');
    while(dealerDiv.firstChild) dealerDiv.removeChild(dealerDiv.firstChild);
    dealerScore = 0;
    playerScore = 0;
};

ui.updateScores = function() {
    document.getElementById('playerChips').innerHTML = playerBank;
    document.getElementById('dealerChips').innerHTML = dealerBank;
};

ui.addPlayerElement = function() {
      var newDiv = document.createElement("div");
      newDiv.appendChild(document.createTextNode(cardPicked));
      document.getElementById('playerCardSection').appendChild(newDiv);
      playerScore = playerScore + cardUpdate;
      document.getElementById('playerScore').innerHTML = playerScore;
      if(playerScore>21){
        alert('player bust');
        playerBank -= 10;
        dealerBank += 10;
      };
      ui.updateScores();
};

ui.addDealerElement = function() {
      var newDiv = document.createElement("div");
      newDiv.appendChild(document.createTextNode(cardPicked));
      document.getElementById('dealerCardSection').appendChild(newDiv);
      dealerScore = dealerScore + dlrCardUpdate;
      document.getElementById('dealerScore').innerHTML = dealerScore;
      dealerCheck();
};

function randCard(){
    var genRandCard = Math.floor(Math.random()*cardMax)+1;
    return genRandCard;
};

function randSuit(){
    var genRandCard = Math.floor(Math.random()*4)+1;
    return genRandCard;
};

function dealerCheck(){
    if(dealerScore<=playerScore){
      genDealerCards();
    }
    else if(dealerScore>21){
      alert('dealer bust');
      playerBank += 10;
      dealerBank -= 10;
      ui.updateScores();
    }
    else if(dealerScore>playerScore && dealerScore<21){
      playerBank -= 10;
      dealerBank += 10;
      ui.updateScores();
      alert('dealer wins');
    };
};

function genDealerCards(){
  cardPlacement = randPosition();
  cardPicked = deckArr[cardPlacement];
  console.log(cardPicked);
  dlrCardUpdate = getCardValue();
  ui.addDealerElement(cardPicked);
  console.log(deckArr);
};



function play()
{
    deckArr = [];
    buildDeck = function buildDeck(){
        for(i=0; i<suitArr.length; i++){
          var suit = suitArr[i];
          for(j=0; j<cardArr.length; j++){
            var card = cardArr[j]+ " of " + suit;
            deckArr.push(card);
          };
        };
    };
    buildDeck();
    selectCard = function selectCard(){
        cardPlacement = randPosition();
        cardPicked = deckArr[cardPlacement];
        cardUpdate = getCardValue();
        ui.addPlayerElement(cardPicked);
    };
    selectCard();
    getCardValue();
};

function randPosition(){
    var genRandCard = Math.floor(Math.random()*52);
    return genRandCard;
};

function getCardValue(){
var n = cardPlacement;
switch(n)
{
  case 0: value = 2;
  break;
  case 1: value = 3;
  break;
  case 2: value = 4;
  break;
  case 3: value = 5;
  break;
  case 4: value = 6;
  break;
  case 5: value = 7;
  break;
  case 6: value = 8;
  break;
  case 7: value = 9;
  break;
  case 8: value = 10;
  break;
  case 9: value = 10;
  break;
  case 10: value = 10;
  break;
  case 11: value = 10;
  break;
  case 12: value = 11;
  break;
  case 13: value = 2;
  break;
  case 14: value = 3;
  break;
  case 15: value = 4;
  break;
  case 16: value = 5;
  break;
  case 17: value = 6;
  break;
  case 18: value = 7;
  break;
  case 19: value = 8;
  break;
  case 20: value = 9;
  break;
  case 21: value = 10;
  break;
  case 22: value = 10;
  break;
  case 23: value = 10;
  break;
  case 24: value = 10;
  break;
  case 25: value = 11;
  break;
  case 26: value = 2;
  break;
  case 27: value = 3;
  break;
  case 28: value = 4;
  break;
  case 29: value = 5;
  break;
  case 30: value = 6;
  break;
  case 31: value = 7;
  break;
  case 32: value = 8;
  break;
  case 33: value = 9;
  break;
  case 34: value = 10;
  break;
  case 35: value = 10;
  break;
  case 36: value = 10;
  break;
  case 37: value = 10;
  break;
  case 38: value = 11;
  break;
  case 39: value = 2;
  break;
  case 40: value = 3;
  break;
  case 41: value = 4;
  break;
  case 42: value = 5;
  break;
  case 43: value = 6;
  break;
  case 44: value = 7;
  break;
  case 45: value = 8;
  break;
  case 46: value = 9;
  break;
  case 47: value = 10;
  break;
  case 48: value = 10;
  break;
  case 49: value = 10;
  break;
  case 50: value = 10;
  break;
  case 51: value = 11;
  break;
};
return value;
};

var ui = {};

window.onload = function() {

  var cardButton = document.getElementById('getPlayerCards');
  var playerHitButton = document.getElementById('hitButton');
  var genDealerCards1 = document.getElementById('dealerCardButton1');


//  subtotal of all array values
//   genTotalPlayerScore = function(){
//     var playerCardsTotalValue = 0;
//     for (var i = 0; i < totalPlayerCardsArray.length; i++){
//       playerCardsTotalValue = parseInt(playerCardsTotalValue + totalPlayerCardsArray[i]);
//       displayTotal.innerHTML = playerCardsTotalValue;
//     }
//     //return playerCardsTotalValue;
// }


cardButton.addEventListener('click',generatePlayerCards);
genDealerCards1.addEventListener('click',genDealerCards);
playerHitButton.addEventListener('click',playerHit);
playAgain.addEventListener('click',clearCards);


function clearCards(){
    document.getElementById('playerScore').innerHTML = 0;
    document.getElementById('dealerScore').innerHTML = 0;
    playerDiv = document.getElementById('playerCardSection');
    while(playerDiv.firstChild) playerDiv.removeChild(playerDiv.firstChild);
    dealerDiv = document.getElementById('dealerCardSection');
    while(dealerDiv.firstChild) dealerDiv.removeChild(dealerDiv.firstChild);
    dealerScore = 0;
    playerScore = 0;
}

ui.updateScores = function() {
    document.getElementById('playerChips').innerHTML = playerBank;
    document.getElementById('dealerChips').innerHTML = dealerBank;
}

ui.addPlayerElement = function() {
      var newDiv = document.createElement("div");
      newDiv.appendChild(document.createTextNode(cardUpdate));
      document.getElementById('playerCardSection').appendChild(newDiv);
      playerScore = playerScore + cardUpdate;
      document.getElementById('playerScore').innerHTML = playerScore;
      if(playerScore>21){
        alert('player bust');
        playerBank -= 10;
        dealerBank += 10;
      }
      ui.updateScores();
}

ui.addDealerElement = function() {
      var newDiv = document.createElement("div");
      newDiv.appendChild(document.createTextNode(dlrCardUpdate));
      document.getElementById('dealerCardSection').appendChild(newDiv);
      dealerScore = dealerScore + dlrCardUpdate;
      document.getElementById('dealerScore').innerHTML = dealerScore;
      dealerCheck();
}

}//////////END OF WINDOW.ONLOAD
var playerBank = 100;
var dealerBank = 100;
var cardMin = 1;
var cardMax = 14;
var currentCard = 0;
var playerScore = 0;
var dealerScore = 0;
var cardUpdate;
var nPlayers = prompt('number of players: ');



pickSuit = function(){
    var suit = randSuit();
    if(suit ==1)
    return "spades";
    if(suit ==2)
    return "clubs";
    if(suit ==3)
    return "diamonds";
    if(suit ==4)
    return "hearts";
}

transformPlayerCard = function(cardInput){
    if(cardInput == 1){
      cardUpdate = 11;
    }
    else if(cardInput >10){
      cardUpdate = 10;
    }
    else {
      cardUpdate = cardInput;
    }
    ui.addPlayerElement(cardUpdate);
}

transformDealerCard = function(cardInput){
    if(cardInput == 1){
      dlrCardUpdate = 11;
    }
    else if(cardInput >10){
      dlrCardUpdate = 10;
    }
    else {
      dlrCardUpdate = cardInput;
    }
    ui.addDealerElement(dlrCardUpdate);
}

cardValue = function(){
    if(card ==1){
      return 11;
    }
    if(card > 10){
      return 10;
    }
    return card;
}

function randCard(){
    var genRandCard = Math.floor(Math.random()*cardMax)+1;
    return genRandCard;
}

function randSuit(){
    var genRandCard = Math.floor(Math.random()*4)+1;
    return genRandCard;
}

function generatePlayerCards(){
    currentCard = randCard();
    transformPlayerCard(currentCard);
    currentCard = randCard();
    transformPlayerCard(currentCard);
}

function playerHit(){
    currentCard = randCard();
    transformPlayerCard(currentCard);
}

function genDealerCards(){
    currentCard = randCard();
    transformDealerCard(currentCard);
}

function dealerCheck(){
    if(dealerScore<=playerScore){
      dealerHit();
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
    }
}

function dealerHit(){
  currentCard = randCard();
  transformDealerCard(currentCard);
}

//generate cards for multiple players

//generate cards

function genmultiPlrCrds(cardOne, cardTwo){
    this.cardOne = randCard(),
    this.cardTwo = randCard(),
    this.ui.addDealerElement(),


    //transformPlayerCard(currentCard);
    //currentCard = randCard();
    //transformPlayerCard(currentCard);
};

david = new genmultiPlrCrds();




function genPlayer(name, chips, score){
  this.name = name,
  this.chips = chips,
  this.score = score
};

var james = {
  eyeColor: 'blue',
  hairColor: 'brown',
  42: 'secret',
  height: 72
};


//can only pull '42' using james['42']
// last line of section SHOULD NOT HAVE COMMA

//james['eyeColor']] -- this will access the property
//james.eyeColor










//var david = new genPlayer("dave", 200, 0);

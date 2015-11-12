var ui = {};

window.onload = function() {

//  subtotal of all array values
//   genTotalPlayerScore = function(){
//     var playerCardsTotalValue = 0;
//     for (var i = 0; i < totalPlayerCardsArray.length; i++){
//       playerCardsTotalValue = parseInt(playerCardsTotalValue + totalPlayerCardsArray[i]);
//       displayTotal.innerHTML = playerCardsTotalValue;
//     }
//     //return playerCardsTotalValue;
// }

//var nPlayers = prompt('number of players: ');
var cardButton = document.getElementById('getPlayerCards');
var playerHitButton = document.getElementById('hitButton');
var genDealerCards1 = document.getElementById('dealerCardButton1');
genDealerCards1.addEventListener('click',genDealerCards);
playAgain.addEventListener('click',clearCards);

cardButton.onclick = function(){
  player1.generatePlayerCards();
};
playerHitButton.onclick = function(){
  player1.playerHit();
};
}//////END OF WINDOW.ONLOAD///////////////////////////////////////////////////


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

var player1 = new player();

// ui.addPlayerElement = function() {
//   console.log('test');
// }

///.protype



function player(){

  this.generatePlayerCards = function (){
    //console.log('works');
      currentCard = randCard();
      this.transformPlayerCard(currentCard);
      currentCard = randCard();
      this.transformPlayerCard(currentCard);
  };
  this.playerHit = function (){
      currentCard = randCard();
      this.transformPlayerCard(currentCard);
  };

  this.transformPlayerCard = function(cardInput){
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
  };

};





var playerBank = 100;
var dealerBank = 100;
var cardMin = 1;
var cardMax = 14;
var currentCard = 0;
var playerScore = 0;
var dealerScore = 0;
var cardUpdate;



// transformPlayerCard = function(cardInput){
//     if(cardInput == 1){
//       cardUpdate = 11;
//     }
//     else if(cardInput >10){
//       cardUpdate = 10;
//     }
//     else {
//       cardUpdate = cardInput;
//     }
//     console.log('works');
//     ui.addPlayerElement(cardUpdate);
// }



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




///////////////////////////////////////////////////////////////////////////////////////////
// var deck1 = new play();
// deck1.buildDeck();
// deck1.selectCard();
// //deck1.shuffleDeck();
//
// function play(){
//
// var suitArr = ['spades', 'hearts', 'clubs', 'diamonds'];
// var cardArr = ['two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine','ten', 'jack', 'queen', 'king', 'ace', ];
// var deckArr = [];
//
//     this.buildDeck = function buildDeck(){
//         for(i=0; i<suitArr.length; i++){
//           var suit = suitArr[i];
//           //console.log(suit);
//           for(j=0; j<cardArr.length; j++){
//             var card = cardArr[j]+ " of " + suit;
//             deckArr.push(card);
//           };
//         };
//         console.log(deckArr);
//         //console.log(deckArr.length);
//     };
//     this.selectCard = function selectCard(){
//         var cardPlacement = randCard();
//         //console.log(cardPlacement);
//         var cardPicked = deckArr[cardPlacement];
//         console.log(cardPicked);
//         //console.log(deckArr);
//     }
// };



//

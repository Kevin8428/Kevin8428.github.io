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
//genDealerCards1.addEventListener('click',genDealerCards);
playAgain.addEventListener('click',clearCards);

cardButton.onclick = function(){
  play();
  play();
};

// cardButton.onclick = function(){
//   player1.generatePlayerCards();
// };

playerHitButton.onclick = function(){
  play().selectCard();
};

dealerCardButton1.onclick = function(){
  genDealerCards();
}



// playerHitButton.onclick = function(){
//   player1.playerHit();
// };
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
      // console.log('works');
      // if(dealerScore>21){
      //   alert('dealer bust');
      // };
      // if(dealerScore<21 && dealerScore <playerScore){
      //   genDealerCards();
      // };
      // if(dealerScore<=21 && dealerScore > playerScore){
      //   alert('dealer wins');
      // };
};

//var player1 = new player();

// ui.addPlayerElement = function() {
//   console.log('test');
// }

///.protype





// function player(){
//
//   this.generatePlayerCards = function (){
//     //console.log('works');
//       currentCard = randCard();
//       this.transformPlayerCard(currentCard);
//       currentCard = randCard();
//       this.transformPlayerCard(currentCard);
//   };
  // this.playerHit = function (){
  //     currentCard = randCard();
  //     this.transformPlayerCard(currentCard);
  // };

  // this.transformPlayerCard = function(cardInput){
  //       if(cardInput == 1){
  //         cardUpdate = 11;
  //       }
  //       else if(cardInput >10){
  //         cardUpdate = 10;
  //       }
  //       else {
  //         cardUpdate = cardInput;
  //       }
  //       console.log(cardUpdate + 'is card update');
  //       ui.addPlayerElement(cardUpdate);
  // };

// };





var playerBank = 100;
var dealerBank = 100;
var cardMin = 1;
var cardMax = 14;
var currentCard = 0;
var playerScore = 0;
var dealerScore = 0;
var cardUpdate = 0;



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







//
//
// transformDealerCard = function(cardInput){
//     if(cardInput == 1){
//       dlrCardUpdate = 11;
//     }
//     else if(cardInput >10){
//       dlrCardUpdate = 10;
//     }
//     else {
//       dlrCardUpdate = cardInput;
//     }
//     ui.addDealerElement(dlrCardUpdate);
// }

// cardValue = function(){
//     if(card ==1){
//       return 11;
//     }
//     if(card > 10){
//       return 10;
//     }
//     return card;
// }

function randCard(){
    var genRandCard = Math.floor(Math.random()*cardMax)+1;
    return genRandCard;
}

function randSuit(){
    var genRandCard = Math.floor(Math.random()*4)+1;
    return genRandCard;
}

// function genDealerCards(){
//     currentCard = randCard();
//     transformDealerCard(currentCard);
// }

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
    }
}

// function dealerHit(){
//   currentCard = randCard();
//   transformDealerCard(currentCard);
// }

var dlrCardUpdate;

function genDealerCards(){
  cardPlacement = randPosition();
  cardPicked = deckArr[cardPlacement];
  console.log(cardPicked);
  dlrCardUpdate = getCardValue();
  ui.addDealerElement(cardPicked);
}



var suitArr = ['spades', 'hearts', 'clubs', 'diamonds'];
var cardArr = ['two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine','ten', 'jack', 'queen', 'king', 'ace', ];
var deckArr = [];


/////////////////////////////////////////////////////////////////////////////////////////
// var deck1 = new play();
// deck1.buildDeck();
// deck1.selectCard();
//deck1.shuffleDeck();

var cardPlacement;
var cardPicked;

function play(){



    buildDeck = function buildDeck(){
        for(i=0; i<suitArr.length; i++){
          var suit = suitArr[i];
          //console.log(suit);
          for(j=0; j<cardArr.length; j++){
            var card = cardArr[j]+ " of " + suit;
            deckArr.push(card);
          };
        };
        //console.log(deckArr);
        //console.log(deckArr.length);
    };
buildDeck();
    selectCard = function selectCard(){
        cardPlacement = randPosition();
        //console.log(cardPlacement);
        cardPicked = deckArr[cardPlacement];
        cardUpdate = getCardValue();
        ui.addPlayerElement(cardPicked);
    }
selectCard();
getCardValue();
//pushCardValue();

};

function randPosition(){
    var genRandCard = Math.floor(Math.random()*52)+1;
    return genRandCard;
}

// function getTotalValue(){
//
// }


console.log(value + ' is card value');

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
//console.log(value)
return value;
};

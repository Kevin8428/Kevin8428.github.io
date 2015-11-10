window.onload = function() {


// start canvas -------------------------------------------------------------
 // var draw1 = document.getElementById('draw');
 // draw1.addEventListener('click',draw);




//     var canvas = document.getElementById('canvas');
//     var ctx = canvas.getContext('2d');
//     var x = 0;
//     var y = 0;
//
// function draw(aaa,bbb){
//       ctx.save();//save the cavas state if required
//       ctx.clearRect(0,0,100,100)//clear canvas for redrawing
//       ctx.fillStyle = 'rgba(0,200,0,1)';//style a green box
//       ctx.fillRect (x, 20, 50, 50);//draw the rectangle
//       ctx.restore();//restore the canvas state if saved
//       x += 5;//increment the x position by some numeric value
//       //var loopTimer = setTimeout(function(){  -----THIS WAY WORKS---------
//       //  draw(x,0);
//       //},200);
//
//       var loopTimer = setTimeout(draw, 200); //////THIS WAY IS SHORTER------
//     }

// end canvas -------------------------------------------------------------

  var cardButton = document.getElementById('getPlayerCards');
  var playerHitButton = document.getElementById('hitButton');
  var genDealerCards1 = document.getElementById('dealerCardButton1');
  var cardValue = document.getElementById('cardValue');
  var cardValue2 = document.getElementById('cardValue2');
  var playerHit1Div = document.getElementById('playerHit1Div');
  var playerHit2Div = document.getElementById('playerHit2Div');
  var playerHit3Div = document.getElementById('playerHit3Div');
  var dealerHit1Div = document.getElementById('dealerHit1Div');
  var dealerHit2Div = document.getElementById('dealerHit2Div');
  var dealerHit3Div = document.getElementById('dealerHit3Div');
  var cardValue3 = document.getElementById('cardValue3');
  var cardValue4 = document.getElementById('cardValue4');
  var dealerCardTotal = document.getElementById('displayDealerTotal');
  var playerScore1 = document.getElementById('playerScoreID');
  var dealerScore1 = document.getElementById('dealerScoreID');

//---------------------START NOTES FROM JAMES--------------------------




    function targetDiv(target, number) {
      var obj = target + 'Hit' + number + 'Div';
      return document.getElementById(obj);
    }

    targetDiv(player,3)


  var game = {
    // card
    // board logic
    // etc
  }
  var player = {
    cardValue: document.getElementById('cardValue'),
    cardValue2: document.getElementById('cardValue2'),
    playerHit1Div: document.getElementById('playerHit1Div'),
    playerHit2Div: document.getElementById('playerHit2Div'),
    playerHit3Div: document.getElementById('playerHit3Div')
  };
  // player.playerHit1Div
  // player.cardValue

// console.dir(player);

  var dealer = {
    cardValue3: document.getElementById('cardValue3'),
    cardValue4: document.getElementById('cardValue4'),
    dealerHit1Div: document.getElementById('dealerHit1Div'),
    dealerHit2Div: document.getElementById('dealerHit2Div'),
    dealerHit3Div: document.getElementById('dealerHit3Div')
  };

// for (var x in player){
//   console.log('the value for ' + x + ' is ' + player[x]);
// }

  // var james = {
  //   eyeColor: 'blue',
  //   hairColor: 'brown',
  //   42: 'secret',
  //   height: 72
  // };
  //
  // for (var prop in james) {
  //   console.log('the value for ' + prop + ' is '+ james[prop]);
  // }

//---------------------END NOTES FROM JAMES--------------------------

  var playerCard1Value = 0;
  var playerCard2Value = 0;

  var dealerCard1Value = 0;
  var dealerCard2Value = 0;


  var totalDealerCardsValue = 0;
  var playerScore = 0;
  var dealerScore = 0;

//assign values into player object
//have values for first 2 player cards display
//have values for other player cards display when clicking hit button







cardButton.addEventListener('click',generatePlayerCards);
genDealerCards1.addEventListener('click',genDealerCards);
playerHitButton.addEventListener('click',playerHit);




}//////////END OF WINDOW.ONLOAD

var cardMin = 1;
var cardMax = 14;
var playerHit1Value = 0;
var playerHit2Value = 0;
var playerHit3Value = 0;
var totalPlayerCardsValue = 0;

var dealerHit1Value = 0;
var dealerHit2Value = 0;
var dealerHit3Value = 0;

var player = {
  card1: randCard(),
  card2: randCard(),
  card3: randCard(),
  card4: randCard(),
  card5: randCard(),
  card6: randCard(),
  card7: randCard()
}


var dealer = {
  card1: randCard(),
  card2: randCard(),
  card3: randCard(),
  card4: randCard(),
  card5: randCard(),
  card6: randCard(),
  card7: randCard()
}


function randCard(){
var genRandCard = Math.floor(Math.random()*cardMax)+1;
return genRandCard;
}


function generatePlayerCards(){
  //playerCard1Value = player.card1;
  //playerCard2Value = player.card2;
  cardValue.innerHTML = player.card1;
  cardValue2.innerHTML = player.card2;
  totalPlayerCardsValue = player.card1 + player.card2;
  displayTotal.innerHTML = totalPlayerCardsValue;
  if(totalPlayerCardsValue > 21){
    alert('over 21, you lose');
    //dealerScore ++;
  }
}

function playerHit(){
  if(playerHit1Value<1){
  playerHit1Value = player.card3;
  playerHit1Div.innerHTML = player.card3;
  totalPlayerCardsValue = player.card1 + player.card2 + player.card3;
  }
  else if(playerHit2Value<1){
  playerHit2Value = player.card4;
  playerHit2Div.innerHTML = player.card4;
  totalPlayerCardsValue = player.card1 + player.card2 + player.card3 + player.card4;
  }
  else if(playerHit3Value<1){
  playerHit3Value = player.card5;
  playerHit3Div.innerHTML = player.card5;
  totalPlayerCardsValue = player.card1 + player.card2 + player.card3 + player.card4 + player.card5;
  }
  displayTotal.innerHTML = totalPlayerCardsValue;
  if(totalPlayerCardsValue > 21){
    alert('over 21, you lose');
    //dealerScore ++;
    // console.log('d: ' + dealerScore);
    // console.log('p: ' + playerScore);
    // console.log('------');
  }
}

function genDealerCards(){
  // dealerCard1Value = randCard();
  // dealerCard2Value = randCard();
  cardValue3.innerHTML = dealer.card1;
  cardValue4.innerHTML = dealer.card2;
  totalDealerCardsValue = dealer.card1 + dealer.card2;
  displayDealerTotal.innerHTML = dealer.card1 + dealer.card2;
  if(totalDealerCardsValue>21){
    alert('player wins2');
    playerScore ++;
    // console.log('d: ' + dealerScore);
    // console.log('p: ' + playerScore);
    // console.log('------');
  }
  else if(totalDealerCardsValue > totalPlayerCardsValue){
    alert('dealer wins1');
    // console.log('totalDealerCardsValue: ' +totalDealerCardsValue);
    // console.log('totalPlayerCardsValue' + totalPlayerCardsValue);
    //dealerScore ++;
    // console.log('d: ' + dealerScore);
    // console.log('p: ' + playerScore);
    // console.log('------');
  }
  else if(dealerHit1Value < 1){
    dealerHit1Value = dealer.card3;
    dealerHit1Div.innerHTML = dealer.card3;
    totalDealerCardsValue.innerHTML = dealer.card1 + dealer.card2 + dealer.card3;
  }
  else if(dealerHit2Value < 1){
    dealerHit2Value = dealer.card4;
    dealerHit2Div.innerHTML = dealer.card4;
    totalDealerCardsValue.innerHTML = dealer.card1 + dealer.card2 + dealer.card3 + dealer.card4;
  }
  else if(dealerHit3Value < 1){
    dealerHit3Value = dealer.card5;
    dealerHit3Div.innerHTML = dealer.card5;
    totalDealerCardsValue.innerHTML = dealer.card1 + dealer.card2 + dealer.card3 + dealer.card5;
  }


  //updateDealerScore();
  // console.log('d: ' + dealerScore);
  // console.log('p: ' + playerScore);
  // console.log('------');
}

function dealerHit(){
  dealerHit1Value = randCard();
  dealerHit1Div.innerHTML = dealerHit1Value;
  totalDealerCardsValue = dealer.card1 + dealer.card2 + dealer.card3;
  displayDealerTotal.innerHTML = totalDealerCardsValue;
  if(totalDealerCardsValue > totalPlayerCardsValue && totalDealerCardsValue < 22){
    alert('dealer wins');
    dealerScore ++;
    console.log('d: ' + dealerScore);
    console.log('p: ' + playerScore);
    console.log('------');
  }
  else if(totalDealerCardsValue>21){
    alert('player wins');
    playerScore ++;
    console.log('d: ' + dealerScore);
    console.log('p: ' + playerScore);
    console.log('------');
  }
  else if(totalDealerCardsValue <= totalPlayerCardsValue){
    dealerHit2();
  }
}

function dealerHit2(){
  dealerHit2Value = randCard();
  dealerHit2Div.innerHTML = dealerHit2Value;
  totalDealerCardsValue = dealer.card1 + dealer.card2 + dealer.card3 + dealer.card4;
  displayDealerTotal.innerHTML = totalDealerCardsValue;
  if(totalDealerCardsValue > totalPlayerCardsValue && totalDealerCardsValue < 22){
    alert('dealer wins');
  }
}

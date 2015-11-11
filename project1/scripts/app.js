var ui = {};

var paragraph = document.getElementById("div1");
var text = document.createTextNode('this is new text');
paragraph.appendChild(text);
element.appendChild(paragraph);

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
  var dealerHit3Div = document.getElementById('dealerHit3Div');
  var dealerCardTotal = document.getElementById('displayDealerTotal');
  var playerScore1 = document.getElementById('playerScoreID');
  var dealerScore1 = document.getElementById('dealerScoreID');


  ui.updateCardValue = function(newValue) {
    document.getElementById('cardValue').innerHTML = newValue;
  }
  ui.updateCardTwoValue = function(newValue) {
    document.getElementById('cardValue2').innerHTML = newValue;
  }
  ui.updateDealerCardOneValue = function (newValue){
    document.getElementById('cardValue3').innerHTML = newValue;
  }
  ui.updateDealerCardTwoValue = function (newValue){
    document.getElementById('cardValue4').innerHTML = newValue;
  }
  ui.updateDealerHitOne = function (newValue){
    document.getElementById('dealerHit1Div').innerHTML = newValue;
  }
  ui.updateDealerHitTwo = function (newValue){
    document.getElementById('dealerHit2Div').innerHTML = newValue;
  }
  ui.updatePlayerHit1Value = function (newValue){
    document.getElementById('playerHit1Div').innerHTML = newValue;
  }
  ui.updatePlayerHit2Value = function (newValue){
    document.getElementById('playerHit2Div').innerHTML = newValue;
  }
  ui.updatePlayerHit3Value = function (newValue){
    document.getElementById('playerHit3Div').innerHTML = newValue;
  }

  ui.genTotalPlayerScore = function(){
    var playerCardsTotalValue = 0;

    for (var i = 0; i < totalPlayerCardsArray.length; i++) {
      playerCardsTotalValue = parseInt(playerCardsTotalValue + totalPlayerCardsArray[i]);
      displayTotal.innerHTML = playerCardsTotalValue;
    }
    return playerCardsTotalValue;
  }

cardButton.addEventListener('click',generatePlayerCards);
genDealerCards1.addEventListener('click',genDealerCards);
playerHitButton.addEventListener('click',playerHit);
//universalHit.addEventListener('click',universalHit);

}//////////END OF WINDOW.ONLOAD

//document.body.onload = addElement;





var newDiv = document.createElement("div");
var newSpan;


function addElement () {
  // create a new div element
  // and give it some content
  var newDiv = document.createElement("div");
  // var newContent = document.createTextNode("Hi there and greetings!");
  // newDiv.appendChild(newContent); //add the text node to the newly created div.
  //
  // // add the newly created element and its content into the DOM
  // var currentDiv = document.getElementById("div1");
  // document.body.insertBefore(newDiv, currentDiv);
}

addElement();



var playerCard1Value = 0;
var playerCard2Value = 0;
var playerHit1Value = 0;
var playerHit2Value = 0;
var playerHit3Value = 0;
var totalPlayerCardsValue = 0; // rip soon?
var totalPlayerCardsArray = [];
var dealerCard1Value = 0;
var dealerCard2Value = 0;
var dealerHit1Value = 0;
var dealerHit2Value = 0;
var dealerHit3Value = 0;
var totalDealerCardsValue = 0;
var playerScore = 0;
var dealerScore = 0;
var cardMin = 1;
var cardMax = 14;

var player = {
  card1: randCard(),
  card2: randCard(),
  // card3: randCard(),
  // card4: randCard(),
  // card5: randCard(),
  // card6: randCard(),
  // card7: randCard()
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
    ui.updateCardValue(player.card1);  //cardValue.innerHTML = player.card1;
    ui.updateCardTwoValue(player.card2);  //cardValue2.innerHTML = player.card2;
    totalPlayerCardsArray.push(player.card1, player.card2);
    ui.genTotalPlayerScore();
    if(totalPlayerCardsValue > 21){
      alert('over 21, you lose');
      //dealerScore ++;
    }
}
//when click hit button, have single function create a div given the player/dealer, asign the card value and update the total

function playerHit(){
    //assign div and add value to array,
    console.log(player);
    var newCard = randCard();
    totalPlayerCardsArray.push(newCard);
    console.log(totalPlayerCardsArray);
    ui.genTotalPlayerScore();

    // if(playerHit1Value<1){
    //   playerHit1Value = player.card3;
    //   ui.updatePlayerHit1Value(player.card3);//playerHit1Div.innerHTML = player.card3;
    //   totalPlayerCardsArray.push(player.card3);
    // }
    // else if(playerHit2Value<1){
    //   playerHit2Value = player.card4;
    //   ui.updatePlayerHit2Value(player.card4);//playerHit2Div.innerHTML = player.card4;
    //   totalPlayerCardsArray.push(player.card4);
    // }
    // else if(playerHit3Value<1){
    //   playerHit3Value = player.card5;
    //   ui.updatePlayerHit3Value(player.card5)//playerHit3Div.innerHTML = player.card5;
    // }
    // ui.genTotalPlayerScore();
}

function genDealerCards(){
  ui.updateDealerCardOneValue(dealer.card1);//cardValue3.innerHTML = dealer.card1;
  ui.updateDealerCardTwoValue(dealer.card2);//cardValue4.innerHTML = dealer.card2;
  totalDealerCardsValue = dealer.card1 + dealer.card2;
  displayDealerTotal.innerHTML = dealer.card1 + dealer.card2;
  if(totalDealerCardsValue>21){
    alert('player wins2');
  }
  else if(totalDealerCardsValue > totalPlayerCardsValue){
    alert('dealer wins1');
  }
  else {
    dealerHit();
  }
}

function dealerHit(){
  dealerHit1Value = randCard();
  ui.updateDealerHitOne(dealerHit1Value);//dealerHit1Div.innerHTML = dealerHit1Value;
  totalDealerCardsValue = dealer.card1 + dealer.card2 + dealer.card3;
  displayDealerTotal.innerHTML = totalDealerCardsValue;
  if(totalDealerCardsValue > totalPlayerCardsValue && totalDealerCardsValue < 22){
    alert('dealer wins');
  }
  else if(totalDealerCardsValue>21){
    alert('player wins');
  }
  else if(totalDealerCardsValue <= totalPlayerCardsValue){
    dealerHit2();
  }
}

function dealerHit2(){
  dealerHit2Value = randCard();
  ui.updateDealerHitTwo(dealerHit2Value);//dealerHit2Div.innerHTML = dealerHit2Value;
  totalDealerCardsValue = dealer.card1 + dealer.card2 + dealer.card3 + dealer.card4;
  displayDealerTotal.innerHTML = totalDealerCardsValue;
  if(totalDealerCardsValue > totalPlayerCardsValue && totalDealerCardsValue < 22){
    alert('dealer wins');
  }
}

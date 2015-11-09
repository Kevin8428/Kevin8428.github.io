window.onload = function() {


//var context = canvas.getContext('2d');
// var draw1 = document.getElementById('draw');
// draw1.addEventListener('click',draw);
//
//   function draw(x,y){
//     alert('working');
//     var canvas = document.getElementById('draw');
//     var ctx = canvas.getContext('2d');
//     ctx.save();//save the cavas state if required
//     ctx.clearRect(0,0,100,100)//clear canvas for redrawing
//     ctx.fillStyle = 'rgba(0,200,0,1)';//style a green box
//     ctx.fillRect (x, 20, 50, 50);//draw the rectangle
//     ctx.restore();//restore the canvas state if saved
//     x += 5;//increment the x position by some numeric value
//     var loopTimer = setTimeout('draw('+x+','+y+')',200);
//   }

//////////////////////////////////////////////////
 var draw1 = document.getElementById('draw');
 draw1.addEventListener('click',draw);

    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    var x = 0;
    var y = 0;

function draw(aaa,bbb){
      ctx.save();//save the cavas state if required
      ctx.clearRect(0,0,100,100)//clear canvas for redrawing
      ctx.fillStyle = 'rgba(0,200,0,1)';//style a green box
      ctx.fillRect (x, 20, 50, 50);//draw the rectangle
      ctx.restore();//restore the canvas state if saved
      x += 5;//increment the x position by some numeric value
      //var loopTimer = setTimeout(function(){  -----THIS WAY WORKS---------
      //  draw(x,0);
      //},200);

      var loopTimer = setTimeout(draw, 200); //////THIS WAY IS SHORTER------
    }

//setInterval(function() {
//  format()
//}, 1000);
///////////////////////////////








  var cardButton = document.getElementById('getPlayerCards');
  //var cardButton2 = document.getElementById('cardButton2');
  var playerHitButton = document.getElementById('hitButton');
  var genDealerCards1 = document.getElementById('dealerCardButton1');
  //var cardButton4 = document.getElementById('dealerCardButton2');
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
  //var cardTotalButton = document.getElementById('cardTotalButton');
  //var cardTotal = document.getElementById('displayTotal');
  var dealerCardTotal = document.getElementById('displayDealerTotal');

  var playerCard1Value = 0;
  var playerCard2Value = 0;
  var playerHit1Value = 0;
  var playerHit2Value = 0;
  var playerHit3Value = 0;
  var dealerHit1Value = 0;
  var dealerHit2Value = 0;
  var dealerHit3Value = 0;
  var dealerCard1Value = 0;
  var dealerCard2Value = 0;
  var totalPlayerCardsValue = 0;
  var cardMin = 1;
  var cardMax = 14;
  var totalDealerCardsValue = 0;
  var playerScore = 0;
  var dealerScore = 0;

  function generatePlayerCards(){
    playerCard1Value = randCard();
    playerCard2Value = randCard();
    cardValue.innerHTML = playerCard1Value;
    cardValue2.innerHTML = playerCard2Value;
    totalPlayerCardsValue = playerCard1Value + playerCard2Value;
    displayTotal.innerHTML = totalPlayerCardsValue;
    if(totalPlayerCardsValue > 21){
      alert('over 21, you lose');
      dealerScore ++;
    }
  }

  function playerHit(){
    if(playerHit1Value<1){
    playerHit1Value = randCard();
    playerHit1Div.innerHTML = playerHit1Value;
    }
    else if(playerHit2Value<1){
    playerHit2Value = randCard();
    playerHit2Div.innerHTML = playerHit2Value;
    }
    else if(playerHit3Value<1){
    playerHit3Value = randCard();
    playerHit3Div.innerHTML = playerHit3Value;
    }
    totalPlayerCardsValue = playerCard1Value + playerCard2Value +playerHit1Value + playerHit2Value + playerHit3Value;
    displayTotal.innerHTML = totalPlayerCardsValue;
    if(totalPlayerCardsValue > 21){
      alert('over 21, you lose');
      dealerScore ++;
    }
  }

    function dealerHit(){
      dealerHit1Value = randCard();
      dealerHit1Div.innerHTML = dealerHit1Value;
      totalDealerCardsValue = dealerCard1Value + dealerCard2Value + dealerHit1Value;
      displayDealerTotal.innerHTML = totalDealerCardsValue;
      if(totalDealerCardsValue > totalPlayerCardsValue && totalDealerCardsValue < 22){
        alert('dealer wins');
        dealerScore ++;
      }
      else if(totalDealerCardsValue>21){
        alert('player wins');
        playerScore ++;
      }
      else if(totalDealerCardsValue <= totalPlayerCardsValue){
        dealerHit2();
      }
    }

    function dealerHit2(){
      dealerHit2Value = randCard();
      dealerHit2Div.innerHTML = dealerHit2Value;
      totalDealerCardsValue = dealerCard1Value + dealerCard2Value + dealerHit1Value + dealerHit2Value;
      displayDealerTotal.innerHTML = totalDealerCardsValue;
    }

cardButton.addEventListener('click',generatePlayerCards);
genDealerCards1.addEventListener('click',genDealerCards);
playerHitButton.addEventListener('click',playerHit);

  function randCard(){
  var genRandCard = Math.floor(Math.random()*cardMax)+1;
  return genRandCard;
  }

  function genDealerCards(){
    dealerCard1Value = randCard();
    dealerCard2Value = randCard();
    cardValue3.innerHTML = dealerCard1Value;
    cardValue4.innerHTML = dealerCard2Value;
    totalDealerCardsValue = dealerCard1Value + dealerCard2Value;
    displayDealerTotal.innerHTML = totalDealerCardsValue;
    if(totalDealerCardsValue > totalPlayerCardsValue && totalDealerCardsValue < 22){
      alert('dealer wins');
      dealerScore ++;
    }
    else if(totalDealerCardsValue>21){
      alert('player wins');
      dealerScore ++;
    }
    else if(totalDealerCardsValue<22 && totalDealerCardsValue<totalPlayerCardsValue){
      //alert('dealer must hit');
      dealerHit();
    }
    //updateDealerScore();
  }









}

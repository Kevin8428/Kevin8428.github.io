// 1. Detecting Types-----------------------------------------------------

var a = "kevin";
function typeID(a) {
  return typeof a;
}

// running typeID(a) returns "string". running typeID(1) returns "number".

// 2. Carousel-------------------------------------------------------------

var peopleOff = ['john', 'dave', 'kevin', 'matt', 'emily', 'kayla', 'nicole'];

for (var i = 0; peopleOff.length > 0; i++ ) {
  console.log(peopleOff.length);
  console.log('incrementor: ' + i);
  console.log(peopleOff[i]);
  console.log('remaining people ' + peopleOff);
    if( i % 2 == 0) {
      var removed = peopleOff.pop();
    }
}

// 3. You are an object...-------------------------------------------------

var kevin = {
  age: 27,
  hairColor: 'brown',
  male: true,
  nationality: 'caucasian',
  residence: 'chicago',
  mothersName: 'julia',
  fathersName: 'klaus',
  birthMonth: 3,
  birthDay: 8,
  birthYear: 1988
};


for (var prop in kevin) {
  console.log(prop + ' : '+ kevin[prop]);
}


// 4. Elementary School----------------------------------------------------

var a = 10;
var b = 4;

function school(a, b) {

  console.log ("result is: " + a / b);
  console.log ("remainder is: " + (a % b));
}

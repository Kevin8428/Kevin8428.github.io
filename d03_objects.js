// objects



//eye color is a key, blue is a value
//eye color is key in the object 'james'

var james = {
  eyeColor: 'blue',
  hairColor: 'brown',
  42: 'secret',
  height: 72
};


//can only pull '42' using james['42']
// last line of section SHOULD NOT HAVE COMMA

//james['eyeColor']] -- this will access the property
//james.eyeColor -- this will access the property

//----------------

for (var prop in james) {
  console.log('the value for ' + prop + ' is '+ james[prop]);
}


// ------------------- put array in object

var inception = {
  friends: ['clooney', 'Rhianna', 'Lebowski'],//array and property
  health: { //object and property
    hearRate: 'bad',
    calories: 'dude',
    advice: 'sleep less'
  }
}

//for each promises to cycle thru everything no matter what
//for in loop allows for more control of loop

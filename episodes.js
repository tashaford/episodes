// Episode 1

//Expected: printName(); in the console will give 'Hi! My name is Slim Shady'.
// Explaination: This is due to name being a global value and it is accessibly for the method printName() to use.

// var name = 'Slim Shady';

// var printName = function() {
//   console.log('Hi! My name is', name);
// };

// printName();


// Episode 2

// Expected: console.log(result()); will give a result of '3'. 
// Explaination: This is due to the local variable (var score = 3;) having priority over the global variable with the same name.

// score = 5;

// var result = function() {
//   var score = 3;
//   return score;
// };

// console.log(result());


// Episode 3

// Expected: Console will display a list: 0: ducks, 1: dogs, 2: lions.
// Explaination: The local variable (myAnimals) within listAnimals replaces var myAnimals = ['chickens', 'cats', 'rabbits']; as the global variable due to the lack of 'var'. This only occurs after the listAnimals method is first called.

// var myAnimals = ['chickens', 'cats', 'rabbits'];

// var listAnimals = function() {
//   myAnimals = ['ducks', 'dogs', 'lions'];
//   for(var i=0; i<myAnimals.length; i++){
//     console.log(i + ": " + myAnimals[i]);
//   }
// }

// listAnimals();


// Episode 4

//Exepcted: Console will display 'Suspects include: Alan Steve John Ally' and 'Suspect three is: John'.
// Explaination: Within allSuspects, var suspectThree = 'Adam' is not complete. If there was a ';' at the end then 'Adam' would replace 'John' above.


// var suspectOne = 'Alan';
// var suspectTwo = 'Steve';
// var suspectThree = 'John';
// var suspectFour = 'Ally';

// var allSuspects = function() {
//   var suspectThree = 'Adam'
//   console.log('Suspects include:', suspectOne, suspectTwo, suspectThree, suspectFour);
// };

// allSuspects();
// console.log( 'Suspect three is:' + suspectThree );


// Episode 5

//Exepcted: Console will display 'Poirot'.
// Explaination: When detectiveInfo is called name in detective, 'Ace Ventura', is replaced by 'Poirot'. Then when printName calls on name is returns the new name.

// var detective = {
//   name : 'Ace Ventura',
//   pet : 'monkey'
// };

// var printName = function(detective) {
//   return detective.name
// };

// var detectiveInfo = function() {
//   detective['name'] = 'Poirot'
//   return printName(detective);
// };

// console.log(detectiveInfo());


// Episode 6

//Exepcted: Console will display 'The murderer is Ally'.
//Wrong: 'The murderer is John';
// Explaination: When innerFunction is called 'Steve' replaces 'Ally' as the local variable of outFunction. However, murderer remains the global variable 'John' as the local variable 'Steve' in outerFunction is var murderer and therefore doesn't replace the global variable.

// var murderer = 'John';

// var outerFunction = function() {
//   var murderer = 'Ally';

//   var innerFunction = function() {
//     murderer = 'Steve';
//   }

//   innerFunction();
// }

// outerFunction();
// console.log('The murderer is', murderer);


// Episode 7
var thief = "Natasha";

var firstFunction = function(){
  thief = 'Colin';

  var secondFunction = function(){
    thief = 'Chris'
    var thief = 'Craw'

    var thirdFunction = function(){
      var thief = 'Graham';
      thief = "Jia"
    }

    thirdFunction();
  }

  secondFunction();
}

firstFunction();
console.log('The thief is ', thief);


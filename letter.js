// The Letter constructor is responsible for displaying either an underscore or the underlying character for each letter in the word

function Letter(char)
{
  this.char = char;
  this.isGuessed = false;
};

Letter.prototype = {

  charReturn: function() {
    console.log('In charReturn:');
    switch (this.isGuessed) {
      case false:
        console.log('Is false. Return: _');
        return ' _ ';
        break;
      default:
        console.log('Is true. Return: ' + this.char);
        return this.char;
    }
  },
  charGuess: function() {
    console.log('In charCheck:');
    switch (letterInput) {
      case this.char:
        console.log('Match');
        this.isGuessed = true;
        this.charReturn();
        break;
      case ' ':
        console.log('A blank');
        this.isGuessed = true;
        return ' ';
        break;
      default:
        console.log('No Match');
    }
  }

}

//Test Data
  //change the values to create a match/nonmatch
  var letterInput = 'a'
  var char1 = new Letter('a');

  // verifying char1 object created with properties
  console.log("From exported Letter Obj: " + char1.char);
  console.log("From exported Letter Obj: " + char1.isGuessed);
  char1.charGuess();

module.exports = Letter;

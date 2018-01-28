var Letter = require('./Letter.js');

function Word(word){
    this.word = word;
    this.letters = [];
    this.makeAndPushLettersIntoWord = function(){
        for (var i=0; i< this.word.length; i++){
            var lett = new Letter(this.word[i]);
            this.letters.push(lett);
        }
    },
    this.display = function(){
        var str = "";
        for (var i=0; i < this.letters.length; i++){
            str = str + this.letters[i].display();
        }

        return str;
    }
    this.updateLetter = function(guess){
      
        for (var i=0; i<this.letters.length; i++){
            if (this.letters[i].letter === guess) this.letters[i].found = true;
        }
    }
}

module.exports = Word;
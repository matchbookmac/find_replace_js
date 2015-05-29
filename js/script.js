"use strict";


//jQuery
$( document ).ready(function() {
    console.log( "jQuery Ready" );

    $("#jqtest").text('jQuery Ready')
});

//raw js
var findReplaceWord = function(word, newWord, string) {
  var cleanString = cleanSentence(string);
  var splitStrig = string.split(" ");
  for (var i = 0; i < cleanString.length; i++) {
    if (cleanString[i] === word) {
      cleanString[i] = newWord;
    }
  };
  return cleanString;
};


var cleanPunctuation = function(string) {
  var punctuationRegex = new RegExp('[^\\w\\s]','g');
  string = string.replace(punctuationRegex, '').toLowerCase();
  var words = string.split(" ");
  return words;
};

var cleanWhitespace = function(string) {
  var regex = new RegExp('[^\\n\\r\\s]+', 'g');
  var words = string.match(regex);
  return words;
};

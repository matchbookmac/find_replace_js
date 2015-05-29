"use strict";


//jQuery
$( document ).ready(function() {
    console.log( "jQuery Ready" );

    $("#jqtest").text('jQuery Ready')
});

//raw js
var findWord = function(word, string) {
  var cleanString = cleanSentence(string);
  var found = 0;
  for (var i = 0; i < cleanString.length; i++) {
    if (cleanString[i] === word) {
      found++;
    }
  };
  return found;
};


var cleanSentence = function(string) {
  var punctuationRegex = new RegExp('[^\\w\\s]','g');
  string = string.replace(punctuationRegex, '').toLowerCase();

  var regex = new RegExp('(\\w+)', 'g');
  var words = string.match(regex);
  return words;
};

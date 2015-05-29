"use strict";


//jQuery
$( document ).ready(function() {
    console.log( "jQuery Ready" );

    $("#jqtest").text('jQuery Ready')
});

//raw js
var findReplaceWord = function(word, newWord, string) {
  var splitString = splitEverything(string);
  var cleanString = cleanPunctuation(string);

  for (var i = 0; i < cleanString.length; i++) {
    if (cleanString[i] === word) {
      splitString[i] = newWord;
    }
  };

  return splitString.join("");
};

var cleanPunctuation = function(input) {
  var string = input;
  var punctuationRegex = new RegExp('[^\\w\\s]','g');
  string = string.replace(punctuationRegex, '').toLowerCase();
  var words = splitEverything(string);
  return words;
};

var splitEverything = function(input) {
  var string = input;
  var regex = new RegExp('[^\\s]+|[\\s]+', 'g');
  var words = string.match(regex);
  return words;
};

"use strict";


//jQuery
$( document ).ready(function() {
    console.log( "jQuery Ready" );

    $("#jqtest").text('jQuery Ready')
});

//raw js
var findReplaceWord = function(word, newWord, string) {
  var splitString = cleanWhitespace(string);
  var cleanString = cleanPunctuation(splitString);

  for (var i = 0; i < cleanString.length; i++) {
    if (cleanString[i] === word) {
      splitString[i] = newWord;
    }
  };

  return splitString.join(" ");
};

var cleanPunctuation = function(input) {
  var string = inputToString(input);
  var punctuationRegex = new RegExp('[^\\w\\s]','g');
  string = string.replace(punctuationRegex, '').toLowerCase();
  var words = string.split(" ");
  return words;
};

var cleanWhitespace = function(input) {
  var string = inputToString(input);
  // var regex = new RegExp('[^\\n\\r\\s]+', 'g');
  var regex = new RegExp('([^\\s]+)|[\\r\\n]', 'g');

  // ([^\s]+)|[\r\n]
  var words = string.match(regex);
  return words;
};

var inputToString = function (input) {
  var string = "";
  if (Array.isArray(input)) {
    string = input.join(" ");
  } else if (typeof input !== "string") {
    return "Please input a string or an array."
  } else {
    string = input;
  }
  return string;
};

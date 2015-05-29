"use strict";


//jQuery
$( document ).ready(function() {
    console.log( "jQuery Ready" );

    $("#jqtest").text('jQuery Ready')
});

//raw js
var findReplaceWord = function(word, newWord, string) {
  var splitString = splitEverything(string);
  var cleanString = cleanPunctuation(splitString);

  for (var i = 0; i < cleanString.length; i++) {
    if (cleanString[i] === word) {
      splitString[i] = newWord;
    }
  };

  return joinWithNewLines(splitString);
};

var cleanPunctuation = function(input) {
  var string = inputToString(input);
  var punctuationRegex = new RegExp('[^\\w\\s]','g');
  string = string.replace(punctuationRegex, '').toLowerCase();
  var words = splitEverything(string);
  return words;
};

var splitEverything = function(input) {
  var string = inputToString(input);
  var regex = new RegExp('[^\\s]+|[\\s]+', 'g');
  var words = string.match(regex);
  return words;
};

var inputToString = function (input) {
  var string = "";
  if (Array.isArray(input)) {
    string = input.join("");
  } else if (typeof input !== "string") {
    return "Please input a string or an array."
  } else {
    string = input;
  }
  return string;
};

var joinWithNewLines = function (input) {
  var string = inputToString(input);
  var regex = new RegExp('\\s[\\r\\n]+\\s', 'g');
  string = string.replace(regex, '\n');
  return string;
};

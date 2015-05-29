"use strict";


//jQuery
$(document).ready(function() {
  $("form#user_input").submit(function(event) {

    $(".replaced").empty();

    var word = $("#word").val();
    var newWord = $("#new_word").val();
    var text = $("#text_input").val();
    var newText = findReplaceWord(word, newWord, text)

    $(".word-found").text(word);
    $(".replaced-with").text(newWord);
    $(".original-text").text(text);
    $(".new-text").text(newText);

    $(".results").show();
    event.preventDefault();
  });
});

//raw js
var findReplaceWord = function(word, newWord, string) {
  var splitString = splitEverything(string);
  var cleanString = cleanPunctuation(string);
  word = word.toLowerCase();

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

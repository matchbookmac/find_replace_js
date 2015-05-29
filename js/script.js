"use strict";


//jQuery
$( document ).ready(function() {
    console.log( "jQuery Ready" );

    $("#jqtest").text('jQuery Ready')
});

//raw js
var cleanSentence = function(string) {
  var punctuationRegex = new RegExp('[^\\w\\s]','g');
  string = string.replace(punctuationRegex, '').toLowerCase();

  var regex = new RegExp('(\\w+)', 'g');
  var words = string.match(regex);
  return words;
};

describe('cleanPunctuation', function() {
  it("removes punctuation from a string, and returns an array of downcased words", function() {
    var testSentence = 'It\'s my watch at eight o\'clock'
    expect(cleanPunctuation(testSentence)).to.eql(['its', 'my', 'watch', 'at', 'eight', 'oclock']);
  });
});

describe('cleanWhitespace', function() {
  it("removes extraneous spaces, and returns an array of words, maintaining new lines or returs  as separate words", function() {
    var testSentence = 'It\'s my\n    watch\nat eight o\'clock   '
    expect(cleanWhitespace(testSentence)).to.eql(['It\'s', 'my', '\n', 'watch', '\n', 'at', 'eight', 'o\'clock']);
  });
});

describe('cleanWhitespace & cleanPunctuation', function() {
  it("When used in concert (whitespace then punctuation), these methods remove extraneous spaces, as well as punctuation and returns an array of downcased words , maintaining new lines or returs  as separate words", function() {
    var testSentence = 'It\'s my\n    watch\nat eight o\'clock   '
    expect(cleanPunctuation(cleanWhitespace(testSentence))).to.eql(['its', 'my', '\n', 'watch', '\n', 'at', 'eight', 'oclock']);
  });

  it("When used in concert (punctuation then whitespace), these methods remove extraneous spaces, as well as punctuation and returns an array of downcased words , maintaining new lines or returs  as separate words", function() {
    var testSentence = 'It\'s my\n    watch\nat eight o\'clock   '
    expect(cleanWhitespace(cleanPunctuation(testSentence))).to.eql(['its', 'my', '\n', 'watch', '\n', 'at', 'eight', 'oclock']);
  });
});

describe('inputToString', function() {
  it("returns the input if the input is a string", function() {
    var testSentence = 'It\'s my watch at eight o\'clock'
    expect(inputToString(testSentence)).to.eql('It\'s my watch at eight o\'clock');
  });

  it("returns the input as a string if the input is an array", function() {
    var testArray = ['It\'s', 'my', 'watch', 'at', 'eight', 'o\'clock']
    expect(inputToString(testArray)).to.eql('It\'s my watch at eight o\'clock');
  });

  it("returns an error message if the input is neither a string or an array", function() {
    var testObject = { name: 'Ian', ocupation: 'BAMF' }
    expect(inputToString(testObject)).to.eql("Please input a string or an array.");
  });
});

describe('findReplaceWord', function () {
  it("returns the original string with the word searched for replaced by the new word provided.", function() {
    var testSentence = 'My watch says It\'s my watch\nat eight o\'clock'
    expect(findReplaceWord('watch', 'sextant', testSentence)).to.equal('My sextant says It\'s my sextant at eight o\'clock');
  });
});

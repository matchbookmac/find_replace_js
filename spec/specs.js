describe('cleanPunctuation', function() {
  it("removes punctuation from a string, and returns an array of downcased words", function() {
    var testSentence = 'It\'s my watch at eight o\'clock'
    expect(cleanPunctuation(testSentence)).to.eql(['its', 'my', 'watch', 'at', 'eight', 'oclock']);
  });
});

describe('cleanWhitespace', function() {
  it("removes extraneous spaces, and new line or return characters, and returns an array of words", function() {
    var testSentence = 'It\'s my\n    watch\nat eight o\'clock   '
    expect(cleanWhitespace(testSentence)).to.eql(['It\'s', 'my', 'watch', 'at', 'eight', 'o\'clock']);
  });
});


describe('findReplaceWord', function () {
  it("returns the original string with the word searched for replaced by the new word provided.", function() {
    var testSentence = 'My watch says It\'s my watch\nat eight o\'clock'
    expect(findReplaceWord('watch', 'sextant', testSentence)).to.equal('My watch says It\'s my watch\nat eight o\'clock');
  });
});

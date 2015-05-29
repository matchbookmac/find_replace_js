describe('cleanSentence', function() {
  it("removes punctuation, spaces, and new line or return characters, and returns an array of words", function() {
    var testSentence = 'It\'s my watch\nat eight o\'clock'
    expect(cleanSentence(testSentence)).to.eql(['its', 'my', 'watch', 'at', 'eight', 'oclock']);
  });
});

describe('findWord', function () {
  it("returns the number of times a word provided is found in the string provided", function() {
    var testSentence = 'My watch says It\'s my watch\nat eight o\'clock'
    expect(findWord('my', testSentence)).to.equal(2);
  });

  it("returns the number of times a word provided is found in the string provided", function() {
    var testSentence = 'My watch says It\'s my watch\nat eight o\'clock'
    expect(findWord('watch', testSentence)).to.equal(2);
  });
});

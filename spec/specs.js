describe('cleanSentence', function() {
  it("removes punctuation, spaces, and new line or return characters, and returns an array of words", function() {
    var testSentence = 'It\'s my watch\nat eight o\'clock'
    expect(cleanSentence(testSentence)).to.eql(['its', 'my', 'watch', 'at', 'eight', 'oclock']);
  });
});

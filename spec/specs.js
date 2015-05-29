describe('splitEverything', function() {
  it("splits separates words from spaces, and puts both into an array", function() {
    var testSentence = 'It\'s my\n    watch\nat eight o\'clock   ';
    expect(splitEverything(testSentence)).to.eql(['It\'s', " ", 'my', '\n    ', 'watch', '\n', 'at', " ", 'eight', " ", 'o\'clock', "   "]);
  });
});

describe('cleanPunctuation', function() {
  it("removes punctuation from a string, and returns an array of downcased words", function() {
    var testSentence = 'It\'s my watch at eight o\'clock';
    expect(cleanPunctuation(testSentence)).to.eql(['its', " ", 'my', " ", 'watch', " ", 'at', " ", 'eight', " ", 'oclock']);
  });
});

describe('findReplaceWord', function () {
  it("returns the original string with the word searched for replaced by the new word provided.", function() {
    var testSentence = 'My \nwatch \n says It\'s my watch\n   at    eight o\'clock';
    expect(findReplaceWord('watch', 'sextant', testSentence)).to.equal('My \nsextant \n says It\'s my sextant\n   at    eight o\'clock');
  });
});

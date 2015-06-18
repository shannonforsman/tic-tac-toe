var myCode = require('./../app.js');

describe('#letterGrader', function() {
  it('takes a test score and returns the equivalent letter grade', function() {
    expect(myCode.letterGrader(85)).toEqual("B");
    expect(myCode.letterGrader(75)).toEqual("C");
  });

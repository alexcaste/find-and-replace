describe('sentenceSplit', function(){
  it("will split a sentence into a rray of words ", function(){
    expect(sentenceSplit("the box")).to.eql(["the", "box"])
  });
});

describe('replacer', function(){
  it("take a sentence and 2 ords and return a sentence with one of the words replaced ", function(){
    expect(replacer("How now brown cow you are a big and brown cow you big stupid cow cow cow", "cow", "thing")).to.equal("How now brown thing you are a big and brown thing you big stupid thing thing thing")
  });

  it("will find words in multiple sentences", function(){
    expect(replacer("The red car is red.  A rosy red.  Not a dark red or ugly red.", "red", "blue")).to.equal("The blue car is blue.  A rosy blue.  Not a dark blue or ugly blue.")

  });
});

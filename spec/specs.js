describe('replacer', function(){
  it("returns error is nothing is changed ", function(){
    expect(replacer("How now brown cow you are a big and brown cow you big stupid cow cow cow", "cow", "cow")).to.equal("You did not change anything")
  });

  it("returns error is word is not in sentence ", function(){
    expect(replacer("the end is near", "beer", "foul")).to.equal("beer is not in the end is near")
  });


  it("take a sentence and 2 ords and return a sentence with one of the words replaced ", function(){
    expect(replacer("How now brown cow you are a big and brown cow you big stupid cow cow cow", "cow", "thing")).to.equal("How now brown thing you are a big and brown thing you big stupid thing thing thing")
  });

  it("will find words in multiple sentences", function(){
    expect(replacer("The red car is red.  A rosy red.  Not a dark red or ugly red.", "red", "blue")).to.equal("The blue car is blue.  A rosy blue.  Not a dark blue or ugly blue.")
  });

  it("will not search non alpha numeric characters", function(){
    expect(replacer("The red car is red.  A rosy red.  Not a dark red or ugly red.", "re.d", "blue")).to.equal("The blue car is blue.  A rosy blue.  Not a dark blue or ugly blue.")
  });

});

describe('nonCharacter', function(){
  it("will find and remove any non-alphanumeric characters from a word", function(){
    expect(nonCharacter("!t h.e")).to.equal("the")
  });
});

var replacer = function(sentence, wordFind, wordReplace) {
  var findCheck = inputChecker(wordFind)
  var replaceCheck = inputChecker(wordReplace)
  var wordFind = nonCharacter(wordFind)
  var wordReplace = nonCharacter(wordReplace)
  if (findCheck === false &&  replaceCheck === false ) {
    var searchWord = "\\b(" + wordFind + ")\\b";
    var finder = new RegExp(searchWord, "gi");
    var newSentence = sentence.replace(finder, wordReplace);
  } else {
    return "We can only search or replace whole words.";
  };

  return newSentence;
};

var inputChecker = function(wordFind) {
  var wordArray = wordFind.split("");
  if (wordArray.length === 1) {
    return true;
  } else {
    return false;
  };
};

var nonCharacter = function(word) {
  var notLetterNumber = /[^a-z0-9]|\s+|\r?\n|\r/gi
  var newWord = word.replace(notLetterNumber, "");
  return newWord;
};


$(document).ready(function() {
  $("form#findform").submit(function(event) {
    $(".sentence").empty();
    $(".wordFind").empty();
    $(".wordReplace").empty();
    var sentence = $("input#sentence").val();
    var wordFind = $("input#wordFind").val();
    var wordReplace = $("input#wordReplace").val();

    var result = replacer(sentence, wordFind, wordReplace);

    $(".result").text(result);
    $("#result").show();

    event.preventDefault();
  });
});

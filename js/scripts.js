var replacer = function(sentence, wordFind, wordReplace) {
  var finder = new RegExp(wordFind, "gi");
  var newSentence = sentence.replace(finder, wordReplace);
return newSentence;
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


var sentenceSplit = function(sentence) {
  var lowersentence = sentence.toLowerCase();
  var splitSentence = lowersentence.split(/\W/g);
  return splitSentence;
};


// $(document).ready(function() {
//   $("form#findform").submit(function(event) {
//     $(".sentence").empty();
//     var sentence = $("input#sentence").val();
//     var wordFind = $("input#wordFind").val();
//     var wordReplace = $("input#wordReplace").val();
//
//     var result = wordCounter(sentence, wordFind, wordReplace);
//
//     $(".result").text(result);
//     $("#result").show();
//
//     event.preventDefault();
//   });
// });

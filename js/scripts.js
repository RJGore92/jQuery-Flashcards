var currentCard = 1;

$(document).ready(function () {
  $(".clickableTitleOne, .clickableAnswerOne").click(function() {
    $(".questionOne").toggle();
    $(".answerOneOn").toggle();
    $(".answerOneOff").toggle();
  });

  $(".clickableTitleTwo, .clickableAnswerTwo").click(function() {
    $(".questionTwo").toggle();
    $(".answerTwoOn").toggle();
    $(".answerTwoOff").toggle();
  });

  $(".clickableTitleThree, .clickableAnswerThree").click(function() {
    $(".questionThree").toggle();
    $(".answerThreeOn").toggle();
    $(".answerThreeOff").toggle();
  });

  $(".clickableTitleFour, .clickableAnswerFour").click(function() {
    $(".questionFour").toggle();
    $(".answerFourOn").toggle();
    $(".answerFourOff").toggle();
  });
});

//Each of these variables are used to check which language has more "similar points" to the person who's taking the quiz
let javascript = 0;
let python = 0;
let java = 0;
let cpp = 0;
let binary = 0;
//These arrays are for quick grabbing of answer buttons per each question.
let buttonsQ1=[document.getElementsByClassName("answer1-button")[0], document.getElementsByClassName("answer2-button")[0], document.getElementsByClassName("answer3-button")[0], document.getElementsByClassName("answer4-button")[0], document.getElementsByClassName("answer5-button")[0], document.getElementsByClassName("answer6-button")[0]];
buttonsQ1[0].addEventListener("click", function() {
    var header = document.getElementById("nav");
    var btns = header.getElementsByClassName("btn");
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function() {
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
      });

});
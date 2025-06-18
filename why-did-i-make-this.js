//Each of these variables are used to check which language has more "similar points" to the person who's taking the quiz
let javascript = 0;
let python = 0;
let java = 0;
let cpp = 0;
let binary = 0;
//These arrays are for quick grabbing of answer buttons per each question.
let buttonsQ1=[document.getElementsByClassName("answer1")[0], document.getElementsByClassName("answer2")[0], document.getElementsByClassName("answer3")[0], document.getElementsByClassName("answer4")[0], document.getElementsByClassName("answer5")[0], document.getElementsByClassName("answer6")[0]];
let buttonsQ2=[document.getElementsByClassName("answer1")[1], document.getElementsByClassName("answer2")[1], document.getElementsByClassName("answer3")[1], document.getElementsByClassName("answer4")[1], document.getElementsByClassName("answer5")[1], document.getElementsByClassName("answer6")[1]];
let buttonsQ3=[document.getElementsByClassName("answer1")[2], document.getElementsByClassName("answer2")[2], document.getElementsByClassName("answer3")[2], document.getElementsByClassName("answer4")[2], document.getElementsByClassName("answer5")[2], document.getElementsByClassName("answer6")[2]];
let buttonsQ4=[document.getElementsByClassName("answer1")[3], document.getElementsByClassName("answer2")[3], document.getElementsByClassName("answer3")[3], document.getElementsByClassName("answer4")[3], document.getElementsByClassName("answer5")[3], document.getElementsByClassName("answer6")[3]];
let buttonsQ5=[document.getElementsByClassName("answer1")[4], document.getElementsByClassName("answer2")[4], document.getElementsByClassName("answer3")[4], document.getElementsByClassName("answer4")[4], document.getElementsByClassName("answer5")[4], document.getElementsByClassName("answer6")[4]];
let buttonsQ6=[document.getElementsByClassName("answer1")[5], document.getElementsByClassName("answer2")[5], document.getElementsByClassName("answer3")[5], document.getElementsByClassName("answer4")[5], document.getElementsByClassName("answer5")[5], document.getElementsByClassName("answer6")[5]];
/*let buttonsQ7=[document.getElementsByClassName("answer1-button")[6], document.getElementsByClassName("answer2-button")[6], document.getElementsByClassName("answer3-button")[6], document.getElementsByClassName("answer4-button")[6], document.getElementsByClassName("answer5-button")[6], document.getElementsByClassName("answer6-button")[6]];
let buttonsQ8=[document.getElementsByClassName("answer1-button")[7], document.getElementsByClassName("answer2-button")[7], document.getElementsByClassName("answer3-button")[7], document.getElementsByClassName("answer4-button")[7], document.getElementsByClassName("answer5-button")[7], document.getElementsByClassName("answer6-button")[7]];
let buttonsQ9=[document.getElementsByClassName("answer1-button")[8], document.getElementsByClassName("answer2-button")[8], document.getElementsByClassName("answer3-button")[8], document.getElementsByClassName("answer4-button")[8], document.getElementsByClassName("answer5-button")[8], document.getElementsByClassName("answer6-button")[8]];
let buttonsQ10=[document.getElementsByClassName("answer1-button")[9], document.getElementsByClassName("answer2-button")[9], document.getElementsByClassName("answer3-button")[9], document.getElementsByClassName("answer4-button")[9], document.getElementsByClassName("answer5-button")[9], document.getElementsByClassName("answer6-button")[9]];
*/
buttonsQ1[0].addEventListener("click", function() {
  cpp+=1;
  binary+=1;
});
buttonsQ1[1].addEventListener("click", function() {
  javascript=1;
  python+=1;
});
buttonsQ1[2].addEventListener("click", function() {
  python+=1;
  cpp+=1;
});
buttonsQ1[3].addEventListener("click", function() {
  javascript+=1;
  cpp+=1;
});
buttonsQ1[4].addEventListener("click", function() {
  javascript+=1;
  java+=1;
});
buttonsQ1[5].addEventListener("click", function() {
  python+=1;
  binary+=1;
});

buttonsQ2[0].addEventListener("click", function() {
  binary+=1;
  cpp+=1;
});
buttonsQ2[1].addEventListener("click", function() {
  cpp+=1;
  python+=1;
});
buttonsQ2[2].addEventListener("click", function() {
  binary+=1;
  java+=1;
});
buttonsQ2[3].addEventListener("click", function() {
  javascript+=1;
  java+=1;
});
buttonsQ2[4].addEventListener("click", function() {
  python+=1;
  java+=1;
});
buttonsQ2[5].addEventListener("click", function() {
  python+=1;
  cpp+=1;
});

buttonsQ3[0].addEventListener("click", function() {
  javascript+=1;
  binary+=1;
});
buttonsQ3[1].addEventListener("click", function() {
  cpp+=1;
  binary+=1;
});
buttonsQ3[2].addEventListener("click", function() {
  javascript+=1;
  python+=1;
});
buttonsQ3[3].addEventListener("click", function() {
  java+=1;
});
buttonsQ3[4].addEventListener("click", function() {
  javascript+=1;
});
buttonsQ3[5].addEventListener("click", function() {
  cpp+=1;
});

buttonsQ4[0].addEventListener("click", function() {
  binary+=1;
});
buttonsQ4[1].addEventListener("click", function() {
  python+=1;
});
buttonsQ4[2].addEventListener("click", function() {
  cpp+=1;
});
buttonsQ4[3].addEventListener("click", function() {
  javascript+=1;
});
buttonsQ4[4].addEventListener("click", function() {
  java+=1;
});
buttonsQ4[5].addEventListener("click", function() {

});

buttonsQ5[0].addEventListener("click", function() {
  java+=1;
  binary+=1;
});
buttonsQ5[1].addEventListener("click", function() {
  cpp+=1;
});
buttonsQ5[2].addEventListener("click", function() {
  python+=1;
  javascript+=1;
});
buttonsQ5[3].addEventListener("click", function() {
  binary+=1;
  javascript+=1;
});
buttonsQ5[4].addEventListener("click", function() {
  python+=1;
  cpp+=1;
});
buttonsQ5[5].addEventListener("click", function() {
  java+=1;
  javascript+=1;
});

buttonsQ6[0].addEventListener("click", function() {
  binary+=1;
  java+=1;
  if(javascript>=python&&javascript>=java&&javascript>=cpp&&javascript>=binary){
    document.getElementsByClassName("javascript-c")[0].style.display="block";
    document.getElementsByClassName("javascript-c")[1].style.display="block";
  }else if(python>=javascript&&python>=java&&python>=cpp&&python>=binary){
    document.getElementsByClassName("python-c")[0].style.display="block";
    document.getElementsByClassName("python-c")[1].style.display="block";
  }else if(java>=javascript&&java>=python&&java>=cpp&&java>=binary){
    document.getElementsByClassName("java-c")[0].style.display="block";
    document.getElementsByClassName("java-c")[1].style.display="block";
  }else if(cpp>=javascript&&cpp>=python&&cpp>=java&&cpp>=binary){
    document.getElementsByClassName("cpp-c")[0].style.display="block";
    document.getElementsByClassName("cpp-c")[1].style.display="block";
  }else if(binary>=javascript&&binary>=python&&binary>=java&&binary>=cpp){
    document.getElementsByClassName("binary-c")[0].style.display="block";
    document.getElementsByClassName("binary-c")[1].style.display="block";
  };
});
buttonsQ6[1].addEventListener("click", function() {
  binary+=1;
  javascript+=1;
  if(javascript>=python&&javascript>=java&&javascript>=cpp&&javascript>=binary){
    document.getElementsByClassName("javascript-c")[0].style.display="block";
    document.getElementsByClassName("javascript-c")[1].style.display="block";
  }else if(python>=javascript&&python>=java&&python>=cpp&&python>=binary){
    document.getElementsByClassName("python-c")[0].style.display="block";
    document.getElementsByClassName("python-c")[1].style.display="block";
  }else if(java>=javascript&&java>=python&&java>=cpp&&java>=binary){
    document.getElementsByClassName("java-c")[0].style.display="block";
    document.getElementsByClassName("java-c")[1].style.display="block";
  }else if(cpp>=javascript&&cpp>=python&&cpp>=java&&cpp>=binary){
    document.getElementsByClassName("cpp-c")[0].style.display="block";
    document.getElementsByClassName("cpp-c")[1].style.display="block";
  }else if(binary>=javascript&&binary>=python&&binary>=java&&binary>=cpp){
    document.getElementsByClassName("binary-c")[0].style.display="block";
    document.getElementsByClassName("binary-c")[1].style.display="block";
  };
});
buttonsQ6[2].addEventListener("click", function() {
  python+=1;
  cpp+=1;
  if(javascript>=python&&javascript>=java&&javascript>=cpp&&javascript>=binary){
    document.getElementsByClassName("javascript-c")[0].style.display="block";
    document.getElementsByClassName("javascript-c")[1].style.display="block";
  }else if(python>=javascript&&python>=java&&python>=cpp&&python>=binary){
    document.getElementsByClassName("python-c")[0].style.display="block";
    document.getElementsByClassName("python-c")[1].style.display="block";
  }else if(java>=javascript&&java>=python&&java>=cpp&&java>=binary){
    document.getElementsByClassName("java-c")[0].style.display="block";
    document.getElementsByClassName("java-c")[1].style.display="block";
  }else if(cpp>=javascript&&cpp>=python&&cpp>=java&&cpp>=binary){
    document.getElementsByClassName("cpp-c")[0].style.display="block";
    document.getElementsByClassName("cpp-c")[1].style.display="block";
  }else if(binary>=javascript&&binary>=python&&binary>=java&&binary>=cpp){
    document.getElementsByClassName("binary-c")[0].style.display="block";
    document.getElementsByClassName("binary-c")[1].style.display="block";
  };
});
buttonsQ6[3].addEventListener("click", function() {
  cpp+=1;
  if(javascript>=python&&javascript>=java&&javascript>=cpp&&javascript>=binary){
    document.getElementsByClassName("javascript-c")[0].style.display="block";
    document.getElementsByClassName("javascript-c")[1].style.display="block";
  }else if(python>=javascript&&python>=java&&python>=cpp&&python>=binary){
    document.getElementsByClassName("python-c")[0].style.display="block";
    document.getElementsByClassName("python-c")[1].style.display="block";
  }else if(java>=javascript&&java>=python&&java>=cpp&&java>=binary){
    document.getElementsByClassName("java-c")[0].style.display="block";
    document.getElementsByClassName("java-c")[1].style.display="block";
  }else if(cpp>=javascript&&cpp>=python&&cpp>=java&&cpp>=binary){
    document.getElementsByClassName("cpp-c")[0].style.display="block";
    document.getElementsByClassName("cpp-c")[1].style.display="block";
  }else if(binary>=javascript&&binary>=python&&binary>=java&&binary>=cpp){
    document.getElementsByClassName("binary-c")[0].style.display="block";
    document.getElementsByClassName("binary-c")[1].style.display="block";
  };
});
buttonsQ6[4].addEventListener("click", function() {
  cpp+=1;
  python+=1;
  binary+=1;
  if(javascript>=python&&javascript>=java&&javascript>=cpp&&javascript>=binary){
    document.getElementsByClassName("javascript-c")[0].style.display="block";
    document.getElementsByClassName("javascript-c")[1].style.display="block";
  }else if(python>=javascript&&python>=java&&python>=cpp&&python>=binary){
    document.getElementsByClassName("python-c")[0].style.display="block";
    document.getElementsByClassName("python-c")[1].style.display="block";
  }else if(java>=javascript&&java>=python&&java>=cpp&&java>=binary){
    document.getElementsByClassName("java-c")[0].style.display="block";
    document.getElementsByClassName("java-c")[1].style.display="block";
  }else if(cpp>=javascript&&cpp>=python&&cpp>=java&&cpp>=binary){
    document.getElementsByClassName("cpp-c")[0].style.display="block";
    document.getElementsByClassName("cpp-c")[1].style.display="block";
  }else if(binary>=javascript&&binary>=python&&binary>=java&&binary>=cpp){
    document.getElementsByClassName("binary-c")[0].style.display="block";
    document.getElementsByClassName("binary-c")[1].style.display="block";
  };
});
buttonsQ6[5].addEventListener("click", function() {
  cpp+=1;
  binary+=1;
  java+=1;
  if(javascript>=python&&javascript>=java&&javascript>=cpp&&javascript>=binary){
    document.getElementsByClassName("javascript-c")[0].style.display="block";
    document.getElementsByClassName("javascript-c")[1].style.display="block";
  }else if(python>=javascript&&python>=java&&python>=cpp&&python>=binary){
    document.getElementsByClassName("python-c")[0].style.display="block";
    document.getElementsByClassName("python-c")[1].style.display="block";
  }else if(java>=javascript&&java>=python&&java>=cpp&&java>=binary){
    document.getElementsByClassName("java-c")[0].style.display="block";
    document.getElementsByClassName("java-c")[1].style.display="block";
  }else if(cpp>=javascript&&cpp>=python&&cpp>=java&&cpp>=binary){
    document.getElementsByClassName("cpp-c")[0].style.display="block";
    document.getElementsByClassName("cpp-c")[1].style.display="block";
  }else if(binary>=javascript&&binary>=python&&binary>=java&&binary>=cpp){
    document.getElementsByClassName("binary-c")[0].style.display="block";
    document.getElementsByClassName("binary-c")[1].style.display="block";
  };
});
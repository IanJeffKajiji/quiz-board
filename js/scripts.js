
$(document).ready(function() {
    $("#blanks form").submit(function(event) {
        var candidateInput = $("input#candidate").val();
        $(".candidate").append(candidateInput);
        $("#story").show();

  event.preventDefault();
});
   $("form#frm").submit(function(event) {
     event.preventDefault();
     var q1 =parseInt($("input:radio[name=quiz1]:checked").val());
     var q2 =parseInt($("input:radio[name=quiz2]:checked").val());
     var q3 =parseInt($("input:radio[name=quiz3]:checked").val());
     var q4 =parseInt($("input:radio[name=quiz4]:checked").val());
     var q5 =parseInt($("input:radio[name=quiz5]:checked").val());
     var q6 =parseInt($("input:radio[name=quiz6]:checked").val());
     var q7 =parseInt($("input:radio[name=quiz7]:checked").val());
     var q8 =parseInt($("input:radio[name=quiz8]:checked").val());
       var total =(q1+q2+q3+q4+q5+q6+q7+q8);
       var percent =((total/40)*100);
          $("#marks").text("you have scored:" +percent+"%");
});
});

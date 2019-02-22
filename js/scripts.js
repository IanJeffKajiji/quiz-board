
$(document).ready(function() {
    $("#blanks form").submit(function(event) {
        var candidateInput = $("input#candidate").val();
        $(".candidate").append(candidateInput);
        $("#story").show();

  event.preventDefault();
});

var dot = $("#date").val();

var Q1 =parseInt($("input:radio[name=quiz1]:checked").val());
var Q2 =parseInt($("input:radio[name=quiz2]:checked").val());
var Q3 =parseInt($("input:radio[name=quiz3]:checked").val());
var Q4 =parseInt($("input:radio[name=quiz4]:checked").val());
var Q5 =parseInt($("input:radio[name=quiz5]:checked").val());
var Q6 =parseInt($("input:radio[name=quiz6];checked").val());
var Q7 =parseInt($("input:radio[name=quiz7]:checked").val());
var Q8 =parseInt($("input:radio[name=quiz8]:checked").val());
});

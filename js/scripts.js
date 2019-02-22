$(document).ready(function() {
    $("#blanks form").submit(function(event) {
        var candidateInput = $("input#candidate").val();
        $("candidate").text(candidateInput);

        event.preventDefault();
    });
});
var dot = $("#date").val();

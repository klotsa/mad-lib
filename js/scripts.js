$(document).ready(function() {
  $("form#formOne").submit(function(event) {
    var personInput = $("input#person").val();
    var creatureInput= $("input#creature").val();
    var adjectiveInput = $("input#adjective").val();
    var verbInput = $("input#verb").val();
    var nounInput = $("input#noun").val();

    $(".person").text(personInput);
    $(".creature").text(creatureInput);
    $(".adjective").text(adjectiveInput);
    $(".verb").text(verbInput);
    $(".noun").text(nounInput);

    $("#story").show();

    event.preventDefault();
  });
});

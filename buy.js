// This code runs when the page loads
$(function() {

  $(".remove").on("click", function(event) {
    event.preventDefault();
    var elementThatWasClicked = $(this);
    elementThatWasClicked.parent().remove();
  })

  $(".buynow").on("click", function(event) {
    event.preventDefault();
    alert("Sorry, we're out of stock now. Please come back later!");
  })
})
$(document).ready(function () {
// Materialize function for sidebar functionality
  $('.sidenav').sidenav();


function deavtivateHome() {
  $("#start").attr("display", "none")
}

// Click Events from Home Page 
  $("#profile-btn").click(function () {
  setTimeout(deavtivateHome, 200)
  $("#start").addClass("deactivated")
  $("#navBar").removeClass("deactivated").addClass("activated")
  $("footer").removeClass("deactivated").addClass("activated")
  // TODO: Make Bio Page Slide in from the Right
});

$("button").click(function () {
  $("#start").addClass("deactivated")
  $("#navBar").removeClass("deactivated").addClass("activated")
  $("footer").removeClass("deactivated").addClass("activated")
  // TODO: Make Portfolio Page Slide in from the Right
});





});
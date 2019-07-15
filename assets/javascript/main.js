$(document).ready(function () {
// Materialize function for sidebar functionality
  $('.sidenav').sidenav();


function homeToProfile() {
  $("#start").hide()
  $("#bio-page").show().removeClass("deactivated").addClass("activated") //To Be Rplaced
}
function homeToPortfolio() {
  $("#start").hide()
  $("#portfolio").show().removeClass("deactivated").addClass("activated") //To Be Rplaced
}

// Click Events from Home Page 
  $("#profile-btn").click(function () {
  setTimeout(homeToProfile, 200)
  $("#start").addClass("deactivated")
  $("#navBar").removeClass("deactivated").addClass("activated")
  $("footer").removeClass("deactivated").addClass("activated")
  // TODO: Make Bio Page Slide in from the Right
});

$("#portfolio-btn").click(function () {
  setTimeout(homeToPortfolio, 200)
  $("#start").addClass("deactivated")
  $("#navBar").removeClass("deactivated").addClass("activated")
  $("footer").removeClass("deactivated").addClass("activated")
  // TODO: Make Portfolio Page Slide in from the Right
});





});
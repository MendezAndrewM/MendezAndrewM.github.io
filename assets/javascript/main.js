$(document).ready(function () {
// Materialize function for sidebar functionality
  $('.sidenav').sidenav();
  $(".hide-at-start").hide()
let activepage;


function homeToProfile() {
  $("#start").hide()
  $("#bio-page").show().removeClass("deactivated").addClass("activated") //To Be Rplaced
  activepage = $("#bio-page");
}
function homeToPortfolio() {
  $("#start").hide()
  $("#portfolio").show().removeClass("deactivated").addClass("activated") //To Be Rplaced
  activepage = $("#portfolio-page");
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

$("#nav-contact").click(function() {
  activepage.hide();
  $("#contact").show().removeClass("deactivated").addClass("activated")
})





});
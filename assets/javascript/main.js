$(document).ready(function () {
  // Materialize function for sidebar functionality
  $('.sidenav').sidenav();
  $(".hide-at-start").hide()
  let activePage = $("#start");


  function toProfile() {
    activePage.hide()
    $("#bio-page").show().removeClass("deactivated").addClass("activated") //To Be Rplaced
    activePage = $("#bio-page");
  }
  function toPortfolio() {
    activePage.hide()
    $("#portfolio").show().removeClass("deactivated").addClass("activated") //To Be Rplaced
    activePage = $("#portfolio-page");
  }
  function toContact() {
    activePage.hide();
    $("#contact").show().removeClass("deactivated").addClass("activated") //To Be Rplaced
    activePage = $("#contact");
  }
  function toStart() {
    $("#start").show().removeClass("deactivated").addClass("activated") //To Be Rplaced
    activePage = $("#start");
  }

  // Click Events from Home Page 
  $("#profile-btn").click(function () {
    setTimeout(toProfile, 200)
    $("#start").addClass("deactivated")
    $("#navBar").removeClass("deactivated").addClass("activated")
    $("footer").removeClass("deactivated").addClass("activated")
    // TODO: Make Bio Page Slide in from the Right
  });

  $("#portfolio-btn").click(function () {
    setTimeout(toPortfolio, 200)
    $("#start").addClass("deactivated")
    $("#navBar").removeClass("deactivated").addClass("activated")
    $("footer").removeClass("deactivated").addClass("activated")
    // TODO: Make Portfolio Page Slide in from the Right
  });



  // Nav Bar Click Events
  $(".nav-home").click(function () {
    activePage.removeClass("activated").addClass("deactivated");
    $("#navBar").removeClass("activated").addClass("deactivated")
    $("footer").removeClass("activated").addClass("deactivated")
    setTimeout(toStart, 200)
  })
  $(".nav-about").click(function () {
    activePage.removeClass("activated").addClass("deactivated");
    setTimeout(toProfile, 200)
  })
  $(".nav-portfolio").click(function () {
    activePage.removeClass("activated").addClass("deactivated");
    setTimeout(toPortfolio, 200)
  })
  $(".nav-contact").click(function () {
    activePage.removeClass("activated").addClass("deactivated");
    setTimeout(toContact, 200)
  })

  // Contact Page 

  $("#contact-submit").click(function () {
    alert("Feature Coming Soon")
  })




});
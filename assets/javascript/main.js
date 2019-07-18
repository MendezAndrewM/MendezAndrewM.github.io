$(document).ready(function () {
  // Materialize function for sidebar functionality
  const navBar = $("#navBar");
  const footer = $("#footer");
  let activePage = $("#start");
  navBar.hide();
  footer.hide();
  $(".hide-at-start").hide();
  $('.sidenav').sidenav();

  function toProfile() {
    activePage.hide();
    $("#bio-page").show().removeClass("deactivated").addClass("activated"); //To Be Rplaced
    activePage = $("#bio-page");
    console.log("reasigned", activePage);
  }
  function toPortfolio() {
    activePage.hide();
    $("#portfolio").show().removeClass("deactivated").addClass("activated"); //To Be Rplaced
    activePage = $("#portfolio");
    console.log("reasigned", activePage);
  }
  function toContact() {
    activePage.hide();
    $("#contact").show().removeClass("deactivated").addClass("activated"); //To Be Rplaced
    activePage = $("#contact");
    console.log("reasigned", activePage);
  }
  function toStart() {
    activePage.hide();
    navBar.hide();
    footer.hide();
    $("#start").show().removeClass("deactivated").addClass("activated"); //To Be Rplaced
    activePage = $("#start");
    console.log("reasigned", activePage);
  }
  function showNav() {
    navBar.show();
    footer.show();
    navBar.removeClass("deactivated").addClass("activated");
    footer.removeClass("deactivated").addClass("activated");
  }

  // Click Events from Home Page 
  $("#profile-btn").click(function () {
    setTimeout(toProfile, 200);
    setTimeout(showNav, 200);
    activePage.addClass("deactivated");
    // TODO: Make Bio Page Slide in from the Right
  });

  $("#portfolio-btn").click(function () {
    setTimeout(toPortfolio, 200);
    setTimeout(showNav, 200);
    activePage.addClass("deactivated");
    // TODO: Make Portfolio Page Slide in from the Right
  });


  // Nav Bar Click Events
  $(".nav-home").click(function () {
    activePage.removeClass("activated").addClass("deactivated");
    navBar.removeClass("activated").addClass("deactivated");
    footer.removeClass("activated").addClass("deactivated");
    setTimeout(toStart, 200);
  });
  $(".nav-about").click(function () {
    activePage.removeClass("activated").addClass("deactivated");
    setTimeout(toProfile, 200);
  });
  $(".nav-portfolio").click(function () {
    activePage.removeClass("activated").addClass("deactivated");
    setTimeout(toPortfolio, 200);
  });
  $(".nav-contact").click(function () {
    activePage.removeClass("activated").addClass("deactivated");
    setTimeout(toContact, 200);
  });

  // Contact Page 

  $("#contact-submit").click(function () {
    alert("Feature Coming Soon");
  });


});
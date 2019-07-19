$(document).ready(function () {
  // Materialize function for sidebar functionality
  $('.sidenav').sidenav();
  
  // global variables for page-transitions
  const navBar = $("#navBar");
  const footer = $("#footer");
  let activePage = $("#start");

  // hide navbar, footer, and main Content on start
  navBar.hide();
  footer.hide();
  $(".hide-at-start").hide();


  // functions to ensure the propper timing of page-transition animations
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
  });
  $("#portfolio-btn").click(function () {
    setTimeout(toPortfolio, 200);
    setTimeout(showNav, 200);
    activePage.addClass("deactivated");
  });


  // Nav Bar Evevents
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




  //////////////////////      Contact Page      \\\\\\\\\\\\\\\\\\\\\\\

  // database configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBsZfKmwLf7lLn0PNRwKGvcF445zqt7V4M",
    authDomain: "contact-from-portfolio-f69bc.firebaseapp.com",
    databaseURL: "https://contact-from-portfolio-f69bc.firebaseio.com",
    projectId: "contact-from-portfolio-f69bc",
    storageBucket: "",
    messagingSenderId: "52833875405",
    appId: "1:52833875405:web:878790c2999f6b67"
  };
  firebase.initializeApp(firebaseConfig);
  const database = firebase.database();

  // click event for submit button
  $("form").submit(function () {
    event.preventDefault();

    // Get data from user
    const name = $("#first_name").val().trim();
    const organization = $("#organization").val().trim();
    const email = $("#email").val().trim();
    const phone = $("#phoneNumber").val().trim();
    const message = $("#message").val().trim();
    const ip = location.host;
    const timeStamp = moment().get('h') + ":" + moment().get('m') + " | " + (moment().get('month') + 1) + "/" + moment().get('date') + "/" + moment().get('y');

    // Asign user data to object
    const newRequest = {
      Name: name,
      Organization: organization,
      Email: email,
      PhoneNumber: phone,
      Message: message,
      Port: ip,
      TimeSent: timeStamp
    }
    // Send data object to database
    database.ref().push(newRequest);

    // Clear input fields
    $("#first_name").val("");
    $("#organization").val("");
    $("#email").val("");
    $("#phoneNumber").val("");
    $("#message").val("")
    // Remove submit button to prevent multiple requests
    $("#contact-submit").hide();
    setTimeout($('form').append('<p>Thank you for your interest! I will be in contact with you soon</p>'), 500);
  });



});
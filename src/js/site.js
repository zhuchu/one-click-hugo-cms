const sourceSwap = function() {
  const $this = $(this);
  const newSource = $this.data("alt-src");
  $this.data("alt-src", $this.attr("src"));
  $this.attr("src", newSource);
}

$(function() {
  $("img[data-alt-src]").each(function() {
    new Image().src = $(this).data("alt-src");
  }).hover(sourceSwap, sourceSwap);
});

$(document).ready(function() {
  $(".show_hide").click(function() {
    $(".slidein").toggleClass("transition");
    $(".right-side-bar").toggleClass("text-blue");
    $(".left-side-bar").toggleClass("text-white");
    $("nav label").toggleClass("navbar-icon");
  });

  $(".scroll").click(function() {
    const heroHeight = $(".nav-bar-transition").outerHeight();
    $("html, body").animate({scrollTop: heroHeight}, 800);
  });

  $(function() {
    const heroHeight = $(".nav-bar-transition").outerHeight();
    $(document).scroll(function() {
      if ($(window).scrollTop() > heroHeight) {
        $("nav label").addClass("navbar-icon");
        $(".side-bar-container").addClass("text-blue");
      } else {
        $("nav label").removeClass("navbar-icon");
        $(".side-bar-container").removeClass("text-blue");
      }
    });
  });

  $(function() {
    const heroHeight = $(".nav-bar-transition").outerHeight();
    $(document).scroll(function() {
      if ($(window).scrollTop() > heroHeight) {
        $("#logo img").attr("src", "/img/deploy_logo_blue.svg");
      } else {
        $("#logo img").attr("src", "/img/deploy_logo_white.svg");
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const activePage = document.body.className;
  const displayCurrentPage = activePage.charAt(0).toUpperCase() + activePage.slice(1);
  let displaySideBarName;
  if (activePage === "page") {
    displaySideBarName = "We are deploy";
  } else if (activePage === "contact") {
    displaySideBarName = "We are deploy";
  } else {
    displaySideBarName = displayCurrentPage;
  }
  document.getElementById("side-bar-name").innerHTML = displaySideBarName;
});

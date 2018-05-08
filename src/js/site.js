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
  });

  $(".scroll").click(function(event) {
    event.preventDefault();
    let n = $("#section").height();
    $("html, body").animate({scrollTop: n}, 800);
  });

  $(function() {
    const heroHeight = $(".nav-bar-transition").height();
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
    const heroHeight = $(".nav-bar-transition").height();
    $(document).scroll(function() {
      if ($(window).scrollTop() > heroHeight) {
        $("#logo img").attr("src", "/img/deploy_logo_blue.svg");
      } else {
        $("#logo img").attr("src", "/img/deploy_logo_white.svg");
      }
    });
  });
});

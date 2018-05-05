import ApiAi from "./api"

function goBack() {
  document.history.back();
}

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
  });

  $(".scroll").click(function(event) {
    event.preventDefault();
    let n = $("#section").height();
    $("html, body").animate({scrollTop: n}, 800);
  });
});

const client = new ApiAi.ApiAiClient({accessToken: '9e8c9e20ba51493b81dd71fe81153214'})
.textRequest('test')
  .then((response) => {
    debugger;

  })
  .catch((error) => {
    debugger;

  })

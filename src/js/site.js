import ApiAi from "./api"

$(document).ready(function() {
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

  $(".show_hide").click(function() {
    $(".slidein").toggleClass("transition");
  });

  $(".scroll").click(function(event) {
    event.preventDefault();
    let n = $("#section").height();
    $("html, body").animate({scrollTop: n}, 800);
  });

  $("#select-option").click(function() {
    chatSelectButton();
  });

  $(".close-icon").click(function() {
    goBack();
  });

});

function goBack() {
  document.history.back();
}

const client = new ApiAi.ApiAiClient({accessToken: '9e8c9e20ba51493b81dd71fe81153214'})
.textRequest('test')
  .then((response) => {
    debugger;

  })
  .catch((error) => {
    debugger;

  })

function chatSelectButton(button) {
  debugger;
  const buttonSelections = document.getElementById("select-option").innerText;
  console.log(button.value);
  let i = 0;
  for (i = 0; i < buttonSelections.length; i++) {
    const clickedButton = buttonSelections[i];
    let conversationAnswer = "";
    if (clickedButton.selected === true) {
      return conversationAnswer = "<p>Hi," + clickedButton.textRequest(value) + "</p>"
    }
  }
  let output = document.getElementById("output");
  output.innerHTML = conversationAnswer;
}

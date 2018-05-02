function goBack() {
  window.history.back();
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

(function () {
  function hideFonts() {
    document.body.classList.add("hide-fonts");
  }

  function showFonts() {
    document.body.classList.remove("hide-fonts");
  }


  hideFonts();
  document.fonts.ready.finally(showFonts);

})();
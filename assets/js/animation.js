(function () {
  var text = [
    "I will help you to start business",
    "Your personal business consultant in UAE",
  ];
  var counter = 0;
  var elem = $("#greeting");
  setInterval(change, 3000);
  function change() {
    elem.fadeOut(function () {
      elem.html(text[counter]);
      counter++;
      if (counter >= text.length) {
        counter = 0;
      }
      elem.fadeIn();
    });
  }
})();

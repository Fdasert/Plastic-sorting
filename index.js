window.onscroll = function() {
    var scroll = window.scrollY;
    if (scroll > 50) {
      document.body.style.backgroundColor = "red";
    } else {
      document.body.style.backgroundColor = "white";
    }
  };
  
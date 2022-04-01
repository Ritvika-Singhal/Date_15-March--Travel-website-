function myFunction() {
    var x = document.getElementById("See");
    var y = document.getElementById("Do");
    if (x.style.display === "none" || x.style.display === "") {
      x.style.display = "block";
      y.style.display = "none";
    } else {
      x.style.display = "none";
    }
  }
  function myFunction2() {
    var x = document.getElementById("See");
    var y = document.getElementById("Do");
    if (y.style.display === "" || y.style.display === "none") {
      y.style.display = "block";
      x.style.display = "none";
    } else {
      y.style.display = "none";
    }
  }
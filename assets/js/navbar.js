window.onload = function() {
    const menuButton = document.getElementById("menu");
    const navbar = document.querySelector(".navbar-ass");
  
    menuButton.addEventListener("click", function() {
      menuButton.classList.toggle("fa-times");
      navbar.classList.toggle("nav-toggle");
    });
  
    window.addEventListener("scroll", function() {
      menuButton.classList.remove("fa-times");
      navbar.classList.remove("nav-toggle");
  
      if (window.scrollY > 60) {
        document.querySelector("#scroll-top").classList.add("active");
      } else {
        document.querySelector("#scroll-top").classList.remove("active");
      }
    });
  };

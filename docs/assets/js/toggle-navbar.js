//Make navbar disappear when clicking outside the menu
document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector(".navbar");
  const navbarNav = document.querySelector("#navbarSupportedContent");
  const toggler = document.querySelector(".navbar-toggler");

  document.addEventListener("click", function (event) {
    if (
      !navbar.contains(event.target) &&
      navbarNav.classList.contains("show")
    ) {
      navbarNav.classList.remove("show");
    }
  });

  navbar.addEventListener("click", function (event) {
    event.stopPropagation();
  });
});

// Close the navbar when a nav link is clicked
const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    const navbarCollapse = document.getElementById("navbarSupportedContent");

    if (navbarCollapse.classList.contains("show")) {
      navbarCollapse.classList.remove("show");
    }
  });
});

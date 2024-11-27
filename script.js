document.addEventListener("DOMContentLoaded", () => {
  // Highlight active navigation link
  const navLinks = document.querySelectorAll("nav ul li a");
  const currentPage = window.location.pathname.split("/").pop();

  navLinks.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });

  // Back-to-Top Button Functionality
  const backToTopButton = document.getElementById("back-to-top");

  if (backToTopButton) { // Check if the button exists
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        backToTopButton.style.display = "block";
      } else {
        backToTopButton.style.display = "none";
      }
    });

    backToTopButton.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
});

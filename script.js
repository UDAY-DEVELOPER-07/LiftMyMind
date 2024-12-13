document.getElementById("getStartedButton").addEventListener("click", function () {
    alert("You will be redirected soon");
  });
  
// navbar section code
  // JavaScript for handling redirections and adding animations
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".nav-links a");

  // Add click event listeners to each navigation link
  links.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault(); // Prevent default action for demonstration

      // Add active class to clicked link and remove from others
      links.forEach((el) => el.classList.remove("active"));
      link.classList.add("active");

      // Redirect logic
      const sectionId = link.id;
      if (sectionId === "home") {
        window.location.href = "FIRST.html";
      } else if (sectionId === "feedbackForm") {
        window.location.href = "dipression.html";
      } else if (sectionId === "aboutUs") {
        window.location.href = "aboutus.html";
      }
    });
  });
});
document.getElementById('submitButton').addEventListener('click', function () {
    const form = document.getElementById('depressionForm');
    const formData = new FormData(form);
    let score = 0;
  
    for (let value of formData.values()) {
      score += parseInt(value);
    }
  
    const result = document.getElementById('result');
    const result1 = document.getElementById('submitButton2');
    if (score <= 5) {
      result.textContent = `Your score is ${score}. Low depression level.`;
      result.style.color = 'green';
    } else if (score <= 10) {
      result.textContent = `Your score is ${score}. Moderate depression level.`;
      result.style.color = 'orange';
    } else {
      result.textContent = `Your score is ${score}. High depression level. Consider seeking professional help.`;
      result.style.color = 'red';
    }
  });
  
  document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll(".button1 button");
  
    // Add click event listeners to each navigation link
    links.forEach((link) => {
      link.addEventListener("click", (event) => {
        event.preventDefault(); // Prevent default action for demonstration
  
        // Add active class to clicked link and remove from others
        links.forEach((el) => el.classList.remove("active"));
        link.classList.add("active");
  
        // Redirect logic
        const sectionId = link.id;
        if (sectionId === "submitButton1") {
          window.location.href = "NAV_DATA.html";
        }
      });
    });
  });
  
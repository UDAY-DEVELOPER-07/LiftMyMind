let score = 0;
document.getElementById('submitButton').addEventListener('click', function () {
    const form = document.getElementById('depressionForm');
    const formData = new FormData(form);
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
        event.preventDefault();
        links.forEach((el) => el.classList.remove("active"));
        link.classList.add("active");

        // Redirect logic
        const sectionId = link.id;
        if (sectionId === "submitButton1") {
          window.location.href = "NAV_DATA.html";
          // my code end here
        }
      });
    });
  });

        const songs = [
            { mood: 'low', url: 'https://youtu.be/YaEG2aWJnZ8?si=f8xDFjeZxQ24RYlD', title: 'Unstoppable - Sia' },
            { mood: 'medium', url: 'https://www.youtube.com/watch?v=2Vv-BfVoq4g', title: 'Perfect - Ed Sheeran' },
            { mood: 'high', url: 'https://youtu.be/kPa7bsKwL-c?si=iqJmrvpZfbubrQxo', title: 'Lady Gaga - Bruno Marss' }
        ];

document.getElementById('Get-suggestion').addEventListener("click",()=>{
            const moodScore = score;
            const songContainer = document.getElementById('song-Container');
            songContainer.innerHTML = '';

            if (!moodScore || moodScore < 1 || moodScore > 10) {
                songContainer.innerHTML = '<p>Please Submit your score</p>';
                return;
            }

            let suggestion;

            if (moodScore <= 3) {
                suggestion = songs.find(song => song.mood === 'low');
            } else if (moodScore <= 7) {
                suggestion = songs.find(song => song.mood === 'medium');
            } else {
                suggestion = songs.find(song => song.mood === 'high');
            }

            if (suggestion) {
                songContainer.innerHTML = `
                    <h3>Suggested Song</h3>
                    <h5> &darr; Click on the text given below &darr;<h5>
                    <p><a href="${suggestion.url}" target="_blank">${suggestion.title}</a></p>
                `;
            }
        });


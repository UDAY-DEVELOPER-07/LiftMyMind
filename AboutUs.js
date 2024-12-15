// Toggle visibility of extra information
const learnMoreBtn = document.getElementById('learnMoreBtn');
const extraInfo = document.getElementById('extraInfo');

learnMoreBtn.addEventListener('click', () => {
    if (extraInfo.classList.contains('hidden')) {
        extraInfo.classList.remove('hidden');
        learnMoreBtn.textContent = 'Show Less';
    } else {
        extraInfo.classList.add('hidden');
        learnMoreBtn.textContent = 'Learn More';
    }
});

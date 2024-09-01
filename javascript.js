document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggleButton');
    const aboutUsContent = document.getElementById('aboutUsContent');

    toggleButton.addEventListener('click', () => {
        if (aboutUsContent.classList.contains('hidden')) {
            aboutUsContent.classList.remove('hidden');
            aboutUsContent.classList.add('visible');
            toggleButton.textContent = 'Hide About Us';
        } else {
            aboutUsContent.classList.remove('visible');
            aboutUsContent.classList.add('hidden');
            toggleButton.textContent = 'Show About Us';
        }
    });
});

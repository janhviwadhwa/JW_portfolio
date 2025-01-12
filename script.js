// Add interaction (Optional)
document.querySelector('.cta-button').addEventListener('click', () => {
    window.scrollTo({
        top: document.getElementById('projects').offsetTop,
        behavior: 'smooth',
    });
});

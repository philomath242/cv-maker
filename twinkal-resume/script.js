document.addEventListener('DOMContentLoaded', () => {
    const printButton = document.getElementById('print');

    if (printButton) {
        printButton.addEventListener('click', () => {
            window.print();
        });
    }

    document.addEventListener('keydown', (event) => {
        // Check for Ctrl + 1 keypress
        if (event.ctrlKey && event.key === '1') {
            // Prevent the default browser action (e.g., switching to the first tab)
            event.preventDefault();

            const resumePage = document.querySelector('.resume-page-1');
            if (resumePage) {
                // Toggle visibility
                if (resumePage.style.display === 'none') {
                    resumePage.style.display = ''; // Reset to default display style
                } else {
                    resumePage.style.display = 'none';
                }
            }
        }
    });
});
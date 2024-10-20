// JavaScript to automatically change pages like a slideshow
document.addEventListener('DOMContentLoaded', function() {
    let currentPageIndex = 0;
    const pages = document.querySelectorAll('.page');
    const totalPages = pages.length;

    // Function to show a page
    function showPage(index) {
        // Hide all pages
        pages.forEach(page => page.classList.remove('active'));

        // Show the current page
        pages[index].classList.add('active');
    }

    // Initial display
    showPage(currentPageIndex);

    // Set interval to change pages every 5 seconds
    setInterval(() => {
        // Increment the page index
        currentPageIndex = (currentPageIndex + 1) % totalPages;

        // Show the next page
        showPage(currentPageIndex);
    }, 2300);  // 5000ms = 5 seconds
});
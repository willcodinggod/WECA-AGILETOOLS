$(document).ready(function() {
    // Get the current page's URL
    var currentPage = window.location.pathname;

    // Remove 'active' class from all navigation links
    $('.nav-link').removeClass('active');

    // Check if the current page is the home page
    if (currentPage === '/' || currentPage === '/index.html') {
        // Add 'active' class to the Home link
        $('.nav-link[href="index.html"]').addClass('active');
    } else {
        // Loop through each navigation link except Home
        $('.nav-link').not('[href="index.html"]').each(function() {
            // Get the URL from the href attribute
            var linkUrl = $(this).attr('href');

            // Check if the current page URL contains the link URL
            if (currentPage.includes(linkUrl)) {
                // Add 'active' class to the matching link
                $(this).addClass('active');
            }
        });
    }
});
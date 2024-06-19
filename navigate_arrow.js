document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.worklist');
    const totalItems = container.querySelectorAll('.worklist-item').length;
    const itemWidth = container.querySelector('.worklist-item').offsetWidth;
    const prevButton = document.querySelector('.arrow-prev');
    const nextButton = document.querySelector('.arrow-next');

    function scrollWork(direction) {
        container.scrollBy({ left: direction * itemWidth, behavior: 'smooth' });

        // Adjust the visibility of the arrows based on the new scroll position
        setTimeout(updateArrowVisibility, 300); // Update after scrolling
    }

    function updateArrowVisibility() {
        const scrollLeft = container.scrollLeft;
        const scrollWidth = container.scrollWidth;
        const clientWidth = container.clientWidth;

        if (scrollLeft > 0) {
            prevButton.style.display = 'block';
        } else {
            prevButton.style.display = 'none';
        }

        if (scrollLeft + clientWidth < scrollWidth) {
            nextButton.style.display = 'block';
        } else {
            nextButton.style.display = 'none';
        }

        if (scrollWidth <= clientWidth) {
            prevButton.style.display = 'none';
            nextButton.style.display = 'none';
        }
    }

    // Initial check to set the visibility of arrows
    updateArrowVisibility();

    // Update arrow visibility on window resize
    window.addEventListener('resize', updateArrowVisibility);
});

function scrollWork(direction) {
    const container = document.querySelector('.worklist-container');
    const scrollAmount = direction === -1 ? -200 : 200; // Adjust scroll amount as needed
    container.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
    });
}

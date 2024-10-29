document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('ul li a');
    links.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.parentElement.style.backgroundColor = '#d5aa73'; /* Hover color */
            link.style.color = '#6a4420'; /* Text color */
        });

        link.addEventListener('mouseout', () => {
            link.parentElement.style.backgroundColor = '#ffeed5'; /* Unselected button color */
            link.style.color = '#6a4420'; /* Text color */
        });

        link.addEventListener('mousedown', () => {
            link.parentElement.style.backgroundColor = '#6a4420'; /* Selected color */
            link.style.color = '#ffeed5'; /* Text color on selected background */
        });

        link.addEventListener('mouseup', () => {
            link.parentElement.style.backgroundColor = '#d5aa73'; /* Hover color */
            link.style.color = '#6a4420'; /* Text color */
        });
    });
});

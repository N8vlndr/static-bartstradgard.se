let body = document.querySelector('body');
const navbarMenu = document.querySelector('#navigation');
const menuToggleButton = document.querySelector('#navigation .toggle');
const ul = document.querySelector('#expanded');
const ulExpanded = ul.getAttribute('aria-expanded');

const toggleExpandedAria = () => {
    if (ulExpanded === 'false') {
        ul.setAttribute('aria-expanded', 'true');
    } else {
        ul.setAttribute('aria-expanded', 'false');
    }
};

const toggleDropdownMenu = () => {
    menuToggleButton.classList.toggle('active');
    navbarMenu.classList.toggle('active');
    body.classList.toggle('open');
    toggleExpandedAria();
};

menuToggleButton.addEventListener('click', () => {
    toggleDropdownMenu();
});

const navLinks = Array.from(document.querySelectorAll('#expanded .li-link'));
for (const item of navLinks) {
    const onClick = () => {
        menuToggleButton.classList.contains('active') &&
        toggleDropdownMenu();
    };
    item.addEventListener('click', onClick);
}

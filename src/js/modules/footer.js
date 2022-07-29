export function footer() {
    let title = document.createElement('div');
    title.classList.add('footer__menu-title');
    let footerMenu = document.querySelector('.footer__menu');
    var texts = CC_DATA.options;
    title.innerText = texts.footer.menu_title;
    footerMenu.insertAdjacentElement('afterbegin', title);
}
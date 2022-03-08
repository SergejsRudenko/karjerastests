export function secondSlides() {
    let wrapper = document.querySelectorAll('.wrapper');
    wrapper.forEach(el => {
        el.classList.add('none');
    })
    wrapper[0].classList.remove('none');
}
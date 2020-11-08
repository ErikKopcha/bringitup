export default class ShowInfo {
    constructor(triggers) {
        this.btns = document.querySelectorAll(triggers);
    }

    init() {
        this.btns.forEach(el => {
            el.addEventListener('click', () => {
                const sibling = el.closest('.module__info-show').nextElementSibling;

                sibling.classList.toggle('msg');
                sibling.style.marginTop = '20px';
            });
        });
    }
}
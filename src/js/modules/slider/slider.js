export default class Slider {
    constructor({page = '', buttons = '', next = '', prev = ''} = {}) {
        this.page = document.querySelector(page);
        this.btns = document.querySelectorAll(buttons);
        this.slides = this.page.children;
        this.slideIndex = 1;
    }
}
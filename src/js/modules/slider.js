export default class Slider {
    constructor(page, btns, logo) {
        this.page = document.querySelector(page);
        this.logo = document.getElementById(logo);
        this.btns = document.querySelectorAll(btns);
        this.slides = this.page.children;
        this.slideIndex = 1;
    }

    showSlides(n) {
        if (n > this.slides.length) {
            this.slideIndex = 1;
        }

        this.slides.forEach(slide => {
           slide.style.display = `none`;
        });

        this.slides[this.slideIndex - 1].style.display = `block`;
    }

    plusSlides(n) {
        this.showSlides(this.slideIndex += n);
    }

    render() {
        this.btns.forEach(btn => {
           btn.addEventListener('click', () => {
              this.plusSlides(1);
           });

           btn.parentNode.previousElementSibling.addEventListener('click', (e) => {
               e.preventDefault();

               this.slideIndex = 1;
               this.showSlides(this.slideIndex);
           });
        });

        this.showSlides(this.slideIndex);
    }
}
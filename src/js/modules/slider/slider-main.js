import Slider from './slider';

export default class MainSlider extends Slider {
    constructor(buttons) {
        super(buttons);
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

        this.hanson = document.querySelector('.hanson');

        if (this.slideIndex === 3) {
            setTimeout(() => {
                try {
                    this.hanson.style.transform = 'translateY(0)';
                } catch (e) {
                    console.warn(e);
                }
            },500);
        } else {
            try {
                this.hanson.style.transform = 'translateY(100%)';
            } catch (e) {
                console.warn(e);
            }
        }
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
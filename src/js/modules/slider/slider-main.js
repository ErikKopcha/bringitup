import Slider from './slider';

export default class MainSlider extends Slider {
    constructor(buttons) {
        super(buttons);

        this.prevModules = document.querySelectorAll('.prevmodule');
        this.nextModules = document.querySelectorAll('.nextmodule');
    }

    showSlides(n) {
        try {
            if (n > this.slides.length) {
                this.slideIndex = 1;
            }
    
            this.slides.forEach(slide => {
                slide.style.display = `none`;
            });
    
            this.slides[this.slideIndex - 1].style.display = `block`;
        } catch (err) {
            console.warn(err);
        }
    }

    plusSlides(n) {
        this.showSlides(this.slideIndex += n);

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

    bindTriggers() {
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

        this.prevModules.forEach(item => {
            item.addEventListener('click', (e) => {
                e.stopPropagation();
                e.preventDefault();

                this.plusSlides(-1);
            });
        });

        this.nextModules.forEach(item => {
            item.addEventListener('click', (e) => {
                e.stopPropagation();
                e.preventDefault();

                this.plusSlides(1);
            });
        });
    }

    render() {
        if (this.container) {
            try {
                try {
                    this.hanson = document.querySelector('.hanson');
                } catch (err) {};
            } catch (err) {}
    
            this.showSlides(this.slideIndex);
            this.bindTriggers();
        }
    }
}
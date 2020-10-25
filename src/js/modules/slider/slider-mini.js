import Slider from './slider';

export default class MiniSlider extends Slider {
    constructor(container, next, prev, activeClass, animate, autoplay) {
        super(container, next, prev, activeClass, animate, autoplay);
    }

    bindTriggers() {
        this.next.addEventListener('click', () => {
            if (this.slides[1].tagName === 'BUTTON' && this.slides[2].tagName === 'BUTTON') {
                this.container.appendChild(this.slides[0]) // slide
                this.container.appendChild(this.slides[1]) // btn
                this.container.appendChild(this.slides[2]) // btn
                this.decorizeSlides();
            } else if (this.slides[1].tagName === 'BUTTON') {
                this.container.appendChild(this.slides[0])
                this.container.appendChild(this.slides[1])
                this.decorizeSlides();
            } else {
                this.container.appendChild(this.slides[0])
                this.decorizeSlides();
            }
        });

        this.prev.addEventListener('click', () => {
            for(let i = this.slides.length - 1; i > 0; i--) {
                if (this.slides[1].tagName !== 'BUTTON') {
                    let active = this.slides[this.slides.length - 1];
                    this.container.insertBefore(active, this.slides[0]);
                    this.decorizeSlides();
                    break;
                }
            }
        });
    }

    decorizeSlides() {
        this.slides.forEach(slide => {
            slide.classList.remove(this.activeClass);

            if (this.animate) {
                slide.querySelector('.card__title').style.opacity = `0.4`;
                slide.querySelector('.card__controls-arrow').style.opacity = `0`;
            }
        });

        if (!this.slides[0].closest('button')) {
            this.slides[0].classList.add(this.activeClass);
        }

        if (this.animate) {
            this.slides[0].querySelector('.card__title').style.opacity = `1`;
            this.slides[0].querySelector('.card__controls-arrow').style.opacity = `1`;
        }
    }

    init() {
        this.container.style.cssText = `
            display: flex;
            flex-wrap: wrap;
            overflow: hidden;
            align-items: flex-start;
        `;

        this.bindTriggers();
        this.decorizeSlides();
    }
}
import MainSlider from './modules/slider/slider-main';
import MiniSlider from './modules/slider/slider-mini';
import VideoPlayer from './modules/playVideo';
import Form from './modules/form';

window.addEventListener('DOMContentLoaded', () => {
   const slider = new MainSlider({container: '.page', buttons: '.next', page: '.page'});
   slider.render();

   const modulePageSlider = new MainSlider({container: '.moduleapp', buttons: '.next'});
   modulePageSlider.render();

   const showUpSlider = new MiniSlider({
      container: '.showup__content-slider',
      prev: '.showup__prev',
      next: '.showup__next',
      activeClass: 'card-active',
      animate: true
   });

   showUpSlider.init();

   const modulesSlider = new MiniSlider({
      container: '.modules__content-slider',
      prev: '.modules__info-btns .slick-prev',
      next: '.modules__info-btns .slick-next',
      activeClass: 'card-active',
      animate: true,
      autoplay: true
   });

   modulesSlider.init();

   const feedSlider = new MiniSlider({
      container: '.feed__slider',
      prev: '.feed__slider .slick-prev',
      next: '.feed__slider .slick-next',
      activeClass: 'feed__item-active'
   });

   feedSlider.init();

   const player = new VideoPlayer('.showup .play', '.overlay');
   player.init();

   const form = new Form('form').init();
});
import MainSlider from './modules/slider/slider-main';
import VideoPlayer from './modules/playVideo';

window.addEventListener('DOMContentLoaded', () => {
   const slider = new MainSlider({buttons: '.next', page: '.page'});
   slider.render();

   const player = new VideoPlayer('.showup .play', '.overlay');
   player.init();
});
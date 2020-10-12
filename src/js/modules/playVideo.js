export default class VideoPlayer {
    constructor (triggers, overlay) {
        this.btns = document.querySelectorAll(triggers);
        this.overlay = document.querySelector(overlay);
        this.close = this.overlay.querySelector('.close');
        this.player = null;
    }

    createPlayer(url) {
        if (this.player == null) {
            this.player = new YT.Player('frame', {
                height: '100%',
                width: '100%',
                videoId: `${url}`
            });
        }

        this.overlay.style.display = 'flex';
    }

    bindTriggers() {
        let self = this;

        this.btns.forEach(btn => {
            btn.addEventListener('click', () => {
                const path = btn.getAttribute('data-url');

                self.createPlayer(path);
            });
        });
    }

    bindClose() {
        this.close.addEventListener('click', () => {
            this.overlay.style.display = 'none';
            this.player.stopVideo();
        });
    }

    init() {
        let tag = document.createElement('script');
        tag.src = "https://www.youtube.com/iframe_api";

        let firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

        this.bindTriggers();
        this.bindClose();
    }
}
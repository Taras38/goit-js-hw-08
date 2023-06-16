import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const LOCAL_STORAGE_KEY = 'videoplayer-current-time';


player.on('timeupdate', throttle(event => {
    localStorage.setItem(LOCAL_STORAGE_KEY, event.seconds);
}, 1000));


window.onload = () => {
    const savedTime = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (savedTime !== null) {
        player.setCurrentTime(savedTime).catch(error => console.error(error));
    }
};

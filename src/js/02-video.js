import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const iframePlayer = new Player(iframe);

playerCurrentTime();

iframePlayer.on('timeupdate', throttle(saveTime, 1000));

function saveTime(time) { 
  localStorage.setItem('videoplayer-current-time', time.seconds);
}

function playerCurrentTime() { 
  const currentTime = localStorage.getItem('videoplayer-current-time');
  if (currentTime) iframePlayer.setCurrentTime(currentTime);
}  
  


var throttle = require('lodash.throttle');
  import Player from '@vimeo/player';

   const iframe = document.querySelector('iframe');
    const player = new Player(iframe);


// Відновлення часу відтворення
player.setCurrentTime(Number(localStorage.getItem(`videoplayer-current-time`))).then(function(seconds) {
})

// слухач // Відновлення часу відтворення
player.on('timeupdate', throttle((data) => {
     localStorage.setItem(`videoplayer-current-time`, data.seconds)
       console.log(Number(localStorage.getItem(`videoplayer-current-time`)))
  }, 1000));


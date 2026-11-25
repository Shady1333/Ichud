function mountLessonPlayer(container, status, id, title) {
  const player = document.createElement('iframe');
  player.title = title;
  player.allow = 'autoplay; encrypted-media; picture-in-picture; fullscreen';
  player.allowFullscreen = true;
  player.referrerPolicy = 'strict-origin-when-cross-origin';

  const embed = new URL(`https://www.youtube.com/embed/${id}`);
  embed.search = new URLSearchParams({ playsinline: '1', rel: '0', enablejsapi: '1', origin: location.origin });
  player.src = embed.href;
  container.append(player);

  const playHint = 'Tap Play to start the lesson.';
  const slowHint = 'The Academy player is taking a while to load. You can watch this lesson on YouTube.';
  const bufferHint = 'Playback is buffering. You can watch this lesson on YouTube if it stays stuck.';
  const errorHint = 'This lesson could not play in the Academy player. Try Watch on YouTube.';
  status.textContent = 'Loading the Academy player…';
  let timeout = setTimeout(() => { status.textContent = slowHint; }, 8000);

  window.onYouTubeIframeAPIReady = () => {
    new YT.Player(player, {
      events: {
        onReady() {
          clearTimeout(timeout);
          status.textContent = playHint;
        },
        onStateChange({ data }) {
          if (data === YT.PlayerState.UNSTARTED || data === YT.PlayerState.CUED) return;
          clearTimeout(timeout);
          if (data === YT.PlayerState.BUFFERING) {
            timeout = setTimeout(() => { status.textContent = bufferHint; }, 8000);
          } else {
            status.textContent = '';
          }
        },
        onError() {
          clearTimeout(timeout);
          status.textContent = errorHint;
        }
      }
    });
  };

  const api = document.createElement('script');
  api.src = 'https://www.youtube.com/iframe_api';
  api.async = true;
  api.addEventListener('error', () => {
    clearTimeout(timeout);
    status.textContent = 'If the player stalls, use Watch on YouTube to open the lesson directly.';
  });
  document.head.append(api);
}

const params = new URLSearchParams(location.search);
const id = params.get('v') || '';
const title = (params.get('title') || 'EMT video').slice(0, 200);
const hint = document.getElementById('hint');
if (/^[A-Za-z0-9_-]{11}$/.test(id)) {
  document.title = title + ' · Ichud EMT Academy';
  document.getElementById('title').textContent = title;
  const link = document.getElementById('publisher-link');
  link.href = 'https://www.youtube.com/watch?v=' + id;
  const videoUrl = document.getElementById('video-url');
  videoUrl.value = link.href;
  videoUrl.addEventListener('focus', () => videoUrl.select());
  document.getElementById('video-actions').hidden = false;
  mountLessonPlayer(document.getElementById('player'), hint, id, title);
} else {
  hint.textContent = 'Choose a lesson from the video library.';
}

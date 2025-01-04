document.addEventListener('DOMContentLoaded', function() {
  window.addEventListener('message', function(event) {
    if (event.data.height) {
      document.getElementById('waitlist-8EYx').style.height = event.data.height + 'px';
    }
  });

  const urlParams = new URLSearchParams(window.location.search);
  const r = urlParams.get('r');
  if (r) {
    const iframe = document.getElementById('waitlist-8EYx');
    if (iframe) {
      const src = new URL(iframe.src);
      src.searchParams.set('r', r);
      iframe.src = src.toString();
    }
  }
}); 

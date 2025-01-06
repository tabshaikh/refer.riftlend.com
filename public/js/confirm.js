document.addEventListener('DOMContentLoaded', function() {
  // Handle iframe height adjustments from postMessage
  window.addEventListener('message', function(event) {
    if (event.data.height) {
      document.getElementById('waitlist-pUYM').style.height = event.data.height + 'px';
    }
  });

  // Handle URL parameters
  const urlParams = new URLSearchParams(window.parent.location.search);
  const m = urlParams.get('m');
  const verify = urlParams.get('verify');

  const iframe = document.getElementById('waitlist-pUYM');
  if (iframe) {
    const src = new URL(iframe.src);
    
    // Add 'm' parameter if present
    if (m) {
      src.searchParams.set('m', m);
    }
    
    // Add 'verify' parameter if present
    if (verify) {
      src.searchParams.set('verify', verify);
    }

    // Update iframe src if any parameters were added
    if (m || verify) {
      iframe.src = src.toString();
    }
  }
}); 

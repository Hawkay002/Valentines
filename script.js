window.onload = function() {
    var iframe = document.createElement('iframe');
    iframe.setAttribute('src', 'https://valentine.mewtru.com/');
    iframe.setAttribute('frameborder', '0');
    iframe.setAttribute('allowfullscreen', '');
    document.getElementById('embeddedContent').appendChild(iframe);
  };
document.addEventListener('copy', function(e) {
  // e.clipboardData is initially empty, but we can set it to the
  // data that we want copied onto the clipboard.
  e.clipboardData.setData('text/plain', 'Hello, world!');
  e.clipboardData.setData('text/html', '<b>Hello, world!</b>');

  // This is necessary to prevent the current document selection from
  // being written to the clipboard.
  e.preventDefault();
});

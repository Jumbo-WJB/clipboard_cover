var copy = function(elementId) {

var input = document.getElementById(elementId);
var isiOSDevice = navigator.userAgent.match(/iPad|iPhone|Android|BlackBerry|Windows Phone|webOS/i);

if (isiOSDevice) {
  
    var editable = input.contentEditable;
    var readOnly = input.readOnly;

    input.contentEditable = true;
    input.readOnly = false;

    var range = document.createRange();
    range.selectNodeContents(input);

    var selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);

    input.setSelectionRange(0, 999999);
    input.contentEditable = editable;
    input.readOnly = readOnly;

} else {
    input.select();
}

document.execCommand('copy');
}

//https://www.w3schools.com/howto/howto_js_copy_clipboard.asp
function myFunction() {
  var copyText = document.getElementById("input");
  copyText.select();
  document.execCommand("copy"); document.getElementById("clipboard").innerHTML= copyText.value;
}

function cipher() {
  checkInput();

  var fr = new FileReader();

  consoleLog_fileName = input.files[0].name;
  fileName = (input.files[0].name).replace(/ /g, "_");
  fileType = input.files[0].type;
  fileSize = input.files[0].size;

  fr.readAsArrayBuffer(input.files[0]);

  document.getElementById("output").innerHTML = "<br><img src=\"./assets/images/Ripple-2s-200px.gif\">";

  var inputKey = document.getElementById("key").value.toString();

  setTimeout(function() {

    console.log("Name: " + consoleLog_fileName + ", Type: " + fileType + ", Size: " + (fileSize / Math.pow(1024, 2)).toFixed(2) + "MB");

    txt = new Uint8Array(fr.result); //works for Vernam Cipher
    key = inputKey;

    if (document.getElementById("vernam").checked == true) {
      vernamCipher();
    } else if (document.getElementById("columnar").checked == true) {
      columnarCipher();
    } else if (document.getElementById("mono").checked == true) {
      document.getElementById("output").innerHTML = "Mono-Alphabetic is a work in progress, choose something else."
    }
  }, 1000);
}


function deCipher() {
  checkInput();

  var fr = new FileReader();

  consoleLog_fileName = input.files[0].name;
  fileName = (input.files[0].name).replace(/ /g, "_");
  fileType = input.files[0].type;
  fileSize = input.files[0].size;

  fr.readAsArrayBuffer(input.files[0]);

  document.getElementById("output").innerHTML = "<br><img src=\"./assets/images/Ripple-2s-200px.gif\">";

  var inputKey = document.getElementById("key").value.toString();

  setTimeout(function() {

    console.log("Name: " + consoleLog_fileName + ", Type: " + fileType + ", Size: " + (fileSize / Math.pow(1024, 2)).toFixed(2) + "MB");

    txt = new Uint8Array(fr.result); //works for Vernam Cipher
    key = inputKey;

    if (document.getElementById("vernam").checked == true) {
      vernamCipher();
    } else if (document.getElementById("columnar").checked == true) {
      columnarCipher();
    } else if (document.getElementById("mono").checked == true) {
      document.getElementById("output").innerHTML = "Mono-Alphabetic is a work in progress, choose something else."
    }
  }, 1000);
}

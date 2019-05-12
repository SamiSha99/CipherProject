function cipher() {
  encryptIsPressed = true;
  checkInput();
  document.getElementById("output").innerHTML = "<br><img src=\"./assets/images/Ripple-2s-200px.gif\">";
  var inputKey = document.getElementById("key").value.toString();

  var fr = [];
  file = [], fileName = [], fileTitle = [], fileType = [], fileSize = [];

  for (f = 0; f < input.files.length; f++) {

    fr[f] = new FileReader(file);
    fr[f].readAsArrayBuffer(input.files[f]);

    fileName[f] = (input.files[f].name).replace(/ /g, "_");
    fileTitle[f] = (input.files[f].name).replace(/\.[^/.]+$/, "");
    fileType[f] = input.files[f].type;
    fileSize[f] = (input.files[f].size / Math.pow(1024, 2)).toFixed(2).toString() + "MB";

    setTimeout(1000);
  }

  setTimeout(function() {
    for (f = 0; f < input.files.length; f++) {
      data = new Uint8Array(fr[f].result);
      key = inputKey;

      if (document.getElementById("vernam").checked == true) {
        vernamCipher();
      } else if (document.getElementById("columnar").checked == true) {
        columnarCipher();
      } else if (document.getElementById("mono").checked == true) {
        monoCipher();
      }
    }
  }, 1000);
}

function deCipher() {
  encryptIsPressed = false;
  checkInput();
  document.getElementById("output").innerHTML = "<br><img src=\"./assets/images/Ripple-2s-200px.gif\">";
  var inputKey = document.getElementById("key").value.toString();

  var fr = [];
  file = [], fileName = [], fileTitle = [], fileType = [], fileSize = [];

  for (f = 0; f < input.files.length; f++) {

    fr[f] = new FileReader(file);
    fr[f].readAsArrayBuffer(input.files[f]);

    fileName[f] = (input.files[f].name).replace(/ /g, "_");
    fileTitle[f] = (input.files[f].name).replace(/\.[^/.]+$/, "");
    fileType[f] = input.files[f].type;
    fileSize[f] = (input.files[f].size / Math.pow(1024, 2)).toFixed(2).toString() + "MB";

    setTimeout(1000);
  }
  setTimeout(function() {
    for (f = 0; f < input.files.length; f++) {
      data = new Uint8Array(fr[f].result);
      key = inputKey;

      if (document.getElementById("vernam").checked == true) {
        vernamCipher();
      } else if (document.getElementById("columnar").checked == true) {
        columnarDecipher();
      } else if (document.getElementById("mono").checked == true) {
        monoCipher();
      }
    }
  }, 1000);
}

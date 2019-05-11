function cipher() {
  checkInput();
  document.getElementById("output").innerHTML = "<br><img src=\"./assets/images/Ripple-2s-200px.gif\">";
  var inputKey = document.getElementById("key").value.toString();
  encryptIsPressed = true;
  
  var fr = [];
  file = [];
  fileName = [];
  fileType = [];
  fileSize = [];

  for (f = 0; f < input.files.length; f++) {

    fr[f] = new FileReader(file);
    fr[f].readAsArrayBuffer(input.files[f]);

    consoleLog_fileName = input.files[f].name;
    fileName[f] = (input.files[f].name).replace(/ /g, "_");
    fileType[f] = input.files[f].type;
    fileSize[f] = input.files[f].size;

    console.log("Name: " + consoleLog_fileName + ", Type: " + fileType[f] + ", Size: " + (fileSize[f] / Math.pow(1024, 2)).toFixed(2) + "MB");
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
  checkInput();
  document.getElementById("output").innerHTML = "<br><img src=\"./assets/images/Ripple-2s-200px.gif\">";
  var inputKey = document.getElementById("key").value.toString();
  encryptIsPressed = false;

  var fr = [];
  file = [];
  fileName = [];
  fileType = [];
  fileSize = [];

  for (f = 0; f < input.files.length; f++) {

    fr[f] = new FileReader(file);
    fr[f].readAsArrayBuffer(input.files[f]);

    consoleLog_fileName = input.files[f].name;
    fileName[f] = (input.files[f].name).replace(/ /g, "_");
    fileType[f] = input.files[f].type;
    fileSize[f] = input.files[f].size;

    console.log("Name: " + consoleLog_fileName + ", Type: " + fileType[f] + ", Size: " + (fileSize[f] / Math.pow(1024, 2)).toFixed(2) + "MB");
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

function cipher() {
  encryptIsPressed = true;
  checkInput();
  document.getElementById("output").innerHTML = "<br><img src=\"./assets/images/Ripple-2s-200px.gif\">";
  var inputKey = document.getElementById("key").value.toString();

  var fr = [];
  file = [];

  for (f = 0; f < input.files.length; f++) {

    fr[f] = new FileReader(file);
    fr[f].readAsArrayBuffer(input.files[f]);

  }

  readFileProp();

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
  file = [];

  for (f = 0; f < input.files.length; f++) {

    fr[f] = new FileReader(file);
    fr[f].readAsArrayBuffer(input.files[f]);

  }

  readFileProp();

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

function readFileProp() {

  fileProp = [];

  for (f = 0; f < input.files.length; f++) {

    fileName = (input.files[f].name).replace(/ /g, "_");
    fileTitle = (input.files[f].name).replace(/\.[^/.]+$/, "");
    if (input.files[f].name.substr(input.files[f].name.length - 4, input.files[f].name.length) != ".enc") {
      fileType = input.files[f].type;
    } else {
      fileType = "N/A"
    }
    fileSize = (input.files[f].size / Math.pow(1024, 2)).toFixed(2).toString() + "MB";

    fileProp.push({
      name: fileName,
      title: fileTitle,
      type: fileType,
      size: fileSize
    });

    setTimeout(1000);
  }
}

// function downloadAll(input){
//   for (i = 0; i < f; i++) {
//     url = window.URL.createObjectURL(file[i])
//     input.href = url;
//     input.target = '_blank';
//
//   	// target filename
//     input.download = file[i].name
//
//   }
// }

function cipher(btn) {

  encryptIsPressed = btn.id == "encrypt";

  // Inputs are invalid, don't run.
  if(!checkInput()) return;

  document.getElementById("log").innerHTML = "<div class='img'><img src=\"./assets/images/Ripple-2s-200px.gif\"></div>";
  var inputKey = document.getElementById("key").value.toString();

  var fr = [];
  file = [];

  for (f = 0; f < input.files.length; f++) {
    fr[f] = new FileReader(file);
    fr[f].onloadend = function () {
      for(i = 0; i < input.files.length; i++)
        if(fr[i] == undefined || fr[i].readyState != 2) return; // make sure all of them are ready!!!

      for (f = 0; f < input.files.length; f++) {
        data = new Uint8Array(fr[f].result);
        key = inputKey;
  
        if (document.getElementById("vernam").checked)
          vernam();
        else if (encryptIsPressed && document.getElementById("columnar").checked)
          columnarCipher();
        else if (!encryptIsPressed && document.getElementById("columnar").checked)
          columnarDecipher();
        else if (document.getElementById("mono").checked)
          mono();
  
      }
    }
    fr[f].readAsArrayBuffer(input.files[f]);
  }

  readFileProp();
  
}

function readFileProp() {

  fileProp = [];

  for (f = 0; f < input.files.length; f++) {

    fileName = (input.files[f].name).replace(/ /g, "_");
    fileTitle = (fileName).replace(/\.[^/.]+$/, "");
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
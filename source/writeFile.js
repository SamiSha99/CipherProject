function writeFileVernam() {
  parts = [
    new Blob([], {
      type: fileType[f]
    }),
    new Uint8Array(v[2])
  ];

  writeFileData();
  innerHTMLResult();
}

function writeFileColumnarEncrypt() {
  parts = [
    new Blob([], {
      type: fileType[f]
    }),
    new Uint8Array(c[3])
  ];

  writeFileData();
  innerHTMLResult();
}

function writeFileColumnarDecrypt() {
  parts = [
    new Blob([], {
      type: fileType[f]
    }),
    new Uint8Array(c[4])
  ];

  writeFileData();
  innerHTMLResult();
}

function writeFileMono() {
  parts = [
    new Blob([], {
      type: fileType[f]
    }),
    new Uint8Array(m[3])
  ];

  writeFileData();
  innerHTMLResult();
}

function writeFileData() {
  if (encryptIsPressed == true) {
    file[f] = new File(parts, fileName[f] + '.enc');
  } else {
    file[f] = new File(parts, fileName[f].substr(0, fileName[f].length - 4));
  }

  fr = new FileReader();
  fr.readAsArrayBuffer(file[f]);
}

function innerHTMLResult() {
  // if (f === 0) {
  //   document.getElementById("output").innerHTML = "<br>Download <a href=" + URL.createObjectURL(file[f]) + " download=" + file[f].name + ">" + file[f].name + "</a>"
  // } else {
  //   document.getElementById("output").innerHTML += ", <a href=" + URL.createObjectURL(file[f]) + " download=" + file[f].name + ">" + file[f].name + "</a>"
  // }
  if (f === 0) {
    document.getElementById("output").innerHTML = "<table><tr><th>Name</th><th>Type</th><th>Size</th><th>Download</th></tr><tbody id=" + "result-rows" + "><tr><td>" + fileName[f] + "</td><td>" + fileType[f] + "</td><td>" + fileSize[f] + "</td><td>" + "<a href=" + URL.createObjectURL(file[f]) + " download=" + file[f].name + ">" + "Link" + "</a>" + "</td></tr></tbody>"
  } else if (f > 0) {
    document.getElementById("result-rows").innerHTML += "<tr><td>" + fileName[f] + "</td><td>" + fileType[f] + "</td><td>" + fileSize[f] + "</td><td>" + "<a href=" + URL.createObjectURL(file[f]) + " download=" + file[f].name + ">" + "Link" + "</a>" + "</td></tr></table>"
  } else if (f == input.files.length - 1) {
    document.getElementById("result-rows").innerHTML += "<table><tr><td>" + fileName[f] + "</td><td>" + fileType[f] + "</td><td>" + fileSize[f] + "</td><td>" + "<a href=" + URL.createObjectURL(file[f]) + " download=" + file[f].name + ">" + "Link" + "</a>" + "</td></tr></table>"
  }
}

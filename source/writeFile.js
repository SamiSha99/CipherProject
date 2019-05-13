function writeFileVernam() {
  parts = [
    new Blob([], {
      type: fileProp[f].type
    }),
    new Uint8Array(v[2])
  ];

  writeFileData();
  innerHTMLResult();
}

function writeFileColumnarEncrypt() {
  parts = [
    new Blob([], {
      type: fileProp[f].type
    }),
    new Uint8Array(c[3])
  ];

  writeFileData();
  innerHTMLResult();
}

function writeFileColumnarDecrypt() {
  parts = [
    new Blob([], {
      type: fileProp[f].type
    }),
    new Uint8Array(c[4])
  ];

  writeFileData();
  innerHTMLResult();
}

function writeFileMono() {
  parts = [
    new Blob([], {
      type: fileProp[f].type
    }),
    new Uint8Array(m[4])
  ];

  writeFileData();
  innerHTMLResult();
}

function writeFileData() {
  if (encryptIsPressed == true) {
    file[f] = new File(parts, fileProp[f].name + '.enc');
  } else {
    file[f] = new File(parts, fileProp[f].name.substr(0, fileProp[f].name.length - 4));
  }

  fr = new FileReader();
  fr.readAsArrayBuffer(file[f]);
}

function innerHTMLResult() {
  if (f === 0) {
    document.getElementById("output").innerHTML = "<table><tr><th>Name</th><th>Type</th><th>Size</th><th>Download</th></tr><tbody id='result-rows'><tr><td>" + fileProp[f].title + "</td><td>" + fileProp[f].type + "</td><td>" + fileProp[f].size + "</td><td>" + "<a href=" + URL.createObjectURL(file[f]) + " download=" + file[f].name + ">" + "Link" + "</a>" + "</td></tr></tbody>"
  } else if (0 < f < input.files.length - 1) {
    document.getElementById("result-rows").innerHTML += "<tr><td>" + fileProp[f].title + "</td><td>" + fileProp[f].type + "</td><td>" + fileProp[f].size + "</td><td>" + "<a href=" + URL.createObjectURL(file[f]) + " download=" + file[f].name + ">" + "Link" + "</a>" + "</td></tr>"
  } else if (f == input.files.length - 1) {
    document.getElementById("result-rows").innerHTML += "<tr><td>" + fileProp[f].title + "</td><td>" + fileProp[f].type + "</td><td>" + fileProp[f].size + "</td><td>" + "<a href=" + URL.createObjectURL(file[f]) + " download=" + file[f].name + ">" + "Link" + "</a>" + "</td></tr></tbody></table>"
  }
}

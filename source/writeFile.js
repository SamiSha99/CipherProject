var tmpStr = "";

function writeFile() {
  parts = [
    new Blob([], {
      type: fileProp[f].type
    }),
    new Uint8Array(bits)
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
  document.getElementById("log").innerHTML = "";

  if (f === 0) {
    document.getElementById("output").innerHTML = "<table><tr><th>Name</th><th>Type</th><th>Size</th><th>Download</th></tr><tbody id='result-rows'><tr><td title='" + fileProp[f].title + "'>" + fileProp[f].title + "</td><td title='" + fileProp[f].type + "'>" + fileProp[f].type + "</td><td title='" + fileProp[f].size + "'>" + fileProp[f].size + "</td><td>" + "<a href=" + URL.createObjectURL(file[f]) + " download=" + file[f].name + ">" + "Link" + "</a>" + "</td></tr></tbody>"
  } else if (0 < f && f < input.files.length - 1) {
    document.getElementById("result-rows").innerHTML += "<tr><td title='" + fileProp[f].title + "'>" + fileProp[f].title + "</td><td title='" + fileProp[f].type + "'>" + fileProp[f].type + "</td><td title='" + fileProp[f].size + "'>" + fileProp[f].size + "</td><td>" + "<a href=" + URL.createObjectURL(file[f]) + " download=" + file[f].name + ">" + "Link" + "</a>" + "</td></tr>"
  } else if (f == input.files.length - 1) {
    document.getElementById("result-rows").innerHTML += "<tr><td title='" + fileProp[f].title + "'>" + fileProp[f].title + "</td><td title='" + fileProp[f].type + "'>" + fileProp[f].type + "</td><td title='" + fileProp[f].size + "'>" + fileProp[f].size + "</td><td>" + "<a href=" + URL.createObjectURL(file[f]) + " download=" + file[f].name + ">" + "Link" + "</a>" + "</td></tr></tbody></table>"
  }
}

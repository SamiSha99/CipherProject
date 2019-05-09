function writeFileVernam() {
  var parts = [
    new Blob([], {
      type: fileType[f]
    }),
    new Uint8Array(v[2])
  ];

  if (fileName[f].substr(fileName[f].length - 4, fileName[f].length) === ".enc") {
    file[f] = new File(parts, fileName[f].substr(0, fileName[f].length - 4));
  } else {
    file[f] = new File(parts, fileName[f] + '.enc');
  }

  fr = new FileReader();
  fr.readAsArrayBuffer(file[f]);

  console.log(parts);
  if (f === 0) {
    document.getElementById("output").innerHTML = "<br>Download <a href=" + URL.createObjectURL(file[f]) + " download=" + file[f].name + ">" + file[f].name + "</a>"
  } else {
    document.getElementById("output").innerHTML += ", <a href=" + URL.createObjectURL(file[f]) + " download=" + file[f].name + ">" + file[f].name + "</a>"
  }

}

function writeFileColumnarEncrypt() {
  var parts = [
    new Blob([], {
      type: fileType[f]
    }),
    new Uint8Array(c[3])
  ];

  if (fileName[f].substr(fileName[f].length - 4, fileName[f].length) === ".enc") {
    file[f] = new File(parts, fileName[f].substr(0, fileName[f].length - 4));
  } else {
    file[f] = new File(parts, fileName[f] + '.enc');
  }

  fr = new FileReader();
  fr.readAsArrayBuffer(file[f]);

  console.log(parts);
  if (f === 0) {
    document.getElementById("output").innerHTML = "<br>Download <a href=" + URL.createObjectURL(file[f]) + " download=" + file[f].name + ">" + file[f].name + "</a>"
  } else {
    document.getElementById("output").innerHTML += ", <a href=" + URL.createObjectURL(file[f]) + " download=" + file[f].name + ">" + file[f].name + "</a>"
  }

}

function writeFileColumnarDecrypt() {
  var parts = [
    new Blob([], {
      type: fileType[f]
    }),
    new Uint8Array(c[4])
  ];

  if (fileName[f].substr(fileName[f].length - 4, fileName[f].length) === ".enc") {
    file[f] = new File(parts, fileName[f].substr(0, fileName[f].length - 4));
  } else {
    file[f] = new File(parts, fileName[f] + '.enc');
  }

  fr = new FileReader();
  fr.readAsArrayBuffer(file[f]);

  console.log(parts);
  if (f === 0) {
    document.getElementById("output").innerHTML = "<br>Download <a href=" + URL.createObjectURL(file[f]) + " download=" + file[f].name + ">" + file[f].name + "</a>"
  } else {
    document.getElementById("output").innerHTML += ", <a href=" + URL.createObjectURL(file[f]) + " download=" + file[f].name + ">" + file[f].name + "</a>"
  }

}

function writeFileMono() {
  var parts = [
    new Blob([], {
      type: fileType[f]
    }),
    new Uint8Array(m[3])
  ];

  if (fileName[f].substr(fileName[f].length - 4, fileName[f].length) === ".enc") {
    file[f] = new File(parts, fileName[f].substr(0, fileName[f].length - 4));
  } else {
    file[f] = new File(parts, fileName[f] + '.enc');
  }

  fr = new FileReader();
  fr.readAsArrayBuffer(file[f]);

  console.log(parts);
  if (f === 0) {
    document.getElementById("output").innerHTML = "<br>Download <a href=" + URL.createObjectURL(file[f]) + " download=" + file[f].name + ">" + file[f].name + "</a>"
  } else {
    document.getElementById("output").innerHTML += ", <a href=" + URL.createObjectURL(file[f]) + " download=" + file[f].name + ">" + file[f].name + "</a>"
  }

}

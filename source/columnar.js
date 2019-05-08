function columnarCipher() {

  c = {

    0: [], //Uint8Array as chars
    1: [], //Arrays every nth based on Key Length
    2: [], //Horizontal Ordering Result
    3: [] //Uint8Array of the Cipher
  }

  for (i = 0; i < txt.length; i++) c[0] += String.fromCharCode(txt[i]);

  c[1] = c[0].match(new RegExp('[\\s\\S]{1,' + key.length + '}', 'g') || []);

  for (i = 0; i < c[2].length; i++) console.log(c[1][i] + ' Length of ' + c[1][i].length);

  for (i = 0; i < key.length; i++) {
    for (u = 0; u < c[1].length; u++) c[2] += c[1][u].charAt(i);

  }

  for (i = 0; i < c[2].length; i++) c[3] += c[2].charCodeAt(i) + " ";

  c[3] = c[3].split(" ").map(Number).slice(0, -1);

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

  console.log("ENCRYPTION WAS SUCCESSFUL");
}


function columnarDecipher() {

  c = {
    0: [], //Unint8Array to charCode String.
    1: [], //Array sizes.
    2: [], //Array of strings based on each size.
    3: [], //Horizontal Aligment.
    4: [], //Uint8Array of the Decipher.
  }

  for (i = 0; i < txt.length; i++) c[0] += String.fromCharCode(txt[i]);

  arraySize = Math.trunc(txt.length / key.length);
  leftOvers = txt.length % key.length;

  for (i = 0; i < key.length; i++) c[1][i] = arraySize;
  for (i = 0; i < leftOvers; i++) c[1][i] += 1;

  for (i = 0; i < key.length; i++) {
    c[2][i] = "";
    c[2][i] += c[0].slice(0, c[1][i]);
    c[0] = c[0].substring(c[1][i], c[0].length);
  }

  for (i = 0; i < c[1][0]; i++) {
    for (u = 0; u < key.length; u++) {
      c[3] += c[2][u].charCodeAt(i) + " ";
    }
  }

  c[4] = c[3].split(" ").map(Number).slice(0, -2);

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

  console.log("ENCRYPTION WAS SUCCESSFUL");
}

function vernamCipher() {

  v = {
    0: [], // Uint8Array
    1: [], // Encoded Key
    2: [] // XOR Result
  }

  v[0] += txt;

  newKey = key.repeat(txt.length / key.length);
  leftOvers = txt.length % key.length;

  for (i = 0; i < leftOvers; i++) newKey += key[i];
  for (i = 0; i < txt.length; i++) v[1] += newKey[i].charCodeAt() + " ";


  // console.log("charCodeAt Passed...")

  v[0] = v[0].split(",").map(Number);
  v[1] = v[1].split(" ").map(Number).slice(0, -1);

  for (i = 0; i < v[0].length; i++) v[2].push(v[0][i] ^ v[1][i]);

  var parts = [
    new Blob([], {
      type: fileType
    }),
    new Uint8Array(v[2])
  ];

  if (fileName.substr(fileName.length - 4, fileName.length) === ".enc") {
    var file = new File(parts, fileName.substr(0, fileName.length - 4));
  } else {
    var file = new File(parts, fileName + '.enc');
  }

  var fr = new FileReader();
  fr.readAsArrayBuffer(file);

  console.log(parts);

  document.getElementById("output").innerHTML = "<br>Download <a href=" + URL.createObjectURL(file) + " download=" + file.name + ">" + file.name + "</a>"


  console.log("ENCRYPTION WAS SUCCESSFUL")
}

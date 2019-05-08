var file = [];

function vernamCipher() {

  v = {
    0: [], // Uint8Array
    1: [], // Encoded Key
    2: [] // XOR Result
  }

  v[0] += data;

  newKey = key.repeat(data.length / key.length);
  leftOvers = data.length % key.length;

  for (i = 0; i < leftOvers; i++) newKey += key[i];
  for (i = 0; i < data.length; i++) v[1] += newKey[i].charCodeAt() + " ";


  // console.log("charCodeAt Passed...")

  v[0] = v[0].split(",").map(Number);
  v[1] = v[1].split(" ").map(Number).slice(0, -1);

  for (i = 0; i < v[0].length; i++) v[2].push(v[0][i] ^ v[1][i]);
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
  if(f === 0){
  document.getElementById("output").innerHTML = "<br>Download <a href=" + URL.createObjectURL(file[f]) + " download=" + file[f].name + ">" + file[f].name + "</a>"
  } else {
  document.getElementById("output").innerHTML += ", <a href=" + URL.createObjectURL(file[f]) + " download=" + file[f].name + ">" + file[f].name + "</a>"
  }

  console.log("ENCRYPTION WAS SUCCESSFUL");
}

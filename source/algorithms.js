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

  v[0] = v[0].split(",").map(Number);
  v[1] = v[1].split(" ").map(Number).slice(0, -1);

  for (i = 0; i < v[0].length; i++) v[2].push(v[0][i] ^ v[1][i]);

  bits = v[2];

  // writeFileVernam();
  writeFile();
}

function columnarCipher() {

  c = {

    0: [], //Uint8Array as chars
    1: [], //Arrays every nth based on Key Length
    2: [], //Horizontal Ordering Result
    3: [] //Uint8Array of the Cipher
  }

  for (i = 0; i < data.length; i++) c[0] += String.fromCharCode(data[i]);

  c[1] = c[0].match(new RegExp('[\\s\\S]{1,' + key.length + '}', 'g') || []);

  for (i = 0; i < c[2].length; i++) console.log(c[1][i] + ' Length of ' + c[1][i].length);

  for (i = 0; i < key.length; i++) {
    for (u = 0; u < c[1].length; u++) c[2] += c[1][u].charAt(i);

  }

  for (i = 0; i < c[2].length; i++) c[3] += c[2].charCodeAt(i) + " ";

  c[3] = c[3].split(" ").map(Number).slice(0, -1);

  bits = c[3];

  // writeFileColumnarEncrypt();
  writeFile();
}


function columnarDecipher() {

  c = {
    0: [], //Unint8Array to charCode String.
    1: [], //Array sizes.
    2: [], //Array of strings based on each size.
    3: [], //Horizontal Aligment.
    4: [], //Uint8Array of the Decipher.
  }

  for (i = 0; i < data.length; i++) c[0] += String.fromCharCode(data[i]);

  arraySize = Math.trunc(data.length / key.length);
  leftOvers = data.length % key.length;

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

  bits = c[4];

  // writeFileColumnarDecrypt();
  writeFile();
}

function monoCipher() {

  newKey = "";

  m = {
    0: [], //Old file data as a String
    1: [], //Uint8Array Characters Map
    2: [], //Character Map that will be modified
    3: [], //New data
    4: []  //New data in Uint8Array
  }

  for (i = 0; i < data.length; i++) m[0] += String.fromCharCode(data[i]);

  for (i = 0; i < key.length; i++)
    if (newKey.includes(key[i]) != true) newKey += key[i];

  for (i = 0; i < 256; i++) {
    m[1] += String.fromCharCode(i);
    m[2] += String.fromCharCode(i);
  }

  for (i = 0; i < newKey.length; i++) m[2] = m[2].split(newKey[i]).join("");

  m[2] = newKey + m[2];

  if (encryptIsPressed == true) {
    for (i = 0; i < data.length; i++) m[3] += m[2].charAt(m[1].indexOf(m[0][i]));
  } else {
    for (i = 0; i < data.length; i++) m[3] += m[1].charAt(m[2].indexOf(m[0][i]));
  }

  for (i = 0; i < m[3].length; i++) m[4] += m[3].charCodeAt(i) + " ";

  m[4] = m[4].split(" ").map(Number).slice(0, -1);

  bits = m[4];

  // writeFileMono();
  writeFile();
}

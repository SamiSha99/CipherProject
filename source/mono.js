function monoCipher() {

  newKey = "";

  m = {
    0: [], //Uint8Array Characters Map
    1: [], //Character Map that will be modified
    2: [], //New data
    3: [], //New data in Uint8Array
    4: [] //Old file data as a String
  }

  for (i = 0; i < data.length; i++) m[4] += String.fromCharCode(data[i]);

  for (i = 0; i < key.length; i++)
    if (newKey.includes(key[i]) != true) newKey += key[i];

  for (i = 0; i < 256; i++) {
    m[0] += String.fromCharCode(i);
    m[1] += String.fromCharCode(i);
  }

  for (i = 0; i < newKey.length; i++) m[1] = m[1].split(newKey[i]).join("");

  m[1] = newKey + m[1];

  if (encryptIsPressed == true) {
    for (i = 0; i < data.length; i++) m[2] += m[1].charAt(m[0].indexOf(m[4][i]));
  } else {
    for (i = 0; i < data.length; i++) m[2] += m[0].charAt(m[1].indexOf(m[4][i]));
  }

  for (i = 0; i < m[2].length; i++) m[3] += m[2].charCodeAt(i) + " ";

  m[3] = m[3].split(" ").map(Number).slice(0, -1);

  writeFileMono();
}

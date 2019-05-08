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

  writeFileVernam();
}

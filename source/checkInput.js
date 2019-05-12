function checkInput() {

  hasFile = hasKey = checkRadio = errFile = errKey = errRadio = "";

  if (document.getElementById("input").value === "") {
    hasFile = "<br/> A File";
    errFile = "* A File\n";
  } else {
    hasFile = "";
  }

  if (!document.getElementById("key").value) {
    hasKey = "<br/> A Key";
    errKey = "* A Key\n"
  } else {
    hasKey = "";
  }

  if (document.getElementById("vernam").checked == false &&
    document.getElementById("columnar").checked == false &&
    document.getElementById("mono").checked == false) {
    checkRadio = "<br/> A Cipher Option";
    errRadio = "* A Cipher Option"
  } else {
    checkRadio = "";
  }

  if (document.getElementById("columnar").checked == true && document.getElementById("key").value.length == 1) {
    throw document.getElementById("output").innerHTML = "Columnar Cipher cannot work with 1 length Key!"
  }

  for (i = 0; i < input.files.length; i++) {
    if (encryptIsPressed == false && input.files[i].name.substr(input.files[i].name.length - 4, input.files[i].name.length) != ".enc") {
      throw document.getElementById("output").innerHTML = "The following file(s) that were added are not Encrypted!"
    }
  }

  if (hasFile || hasKey || checkRadio != "") {
    document.getElementById("output").innerHTML = "Sorry but we cannot operate, it looks like you missed:" + hasFile + hasKey + checkRadio;
    throw "Error: The following are missing:\n" + errFile + errKey + errRadio;
  } else {
    return document.getElementById("output").innerHTML = "";
  }

}

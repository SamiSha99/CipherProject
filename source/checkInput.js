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

  if (hasFile || hasKey || checkRadio != "") {
    document.getElementById("output").innerHTML = "Sorry but we cannot operate, it looks like you missed:" + hasFile + hasKey + checkRadio;
    throw "Error, the following are missing:\n" + errFile + errKey + errRadio;
  } else {
    return document.getElementById("output").innerHTML = "";
  }

}

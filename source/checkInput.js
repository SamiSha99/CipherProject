function fileInput() {

  title = "";

  if (input.files.length == 0) {
    document.getElementById("fileInput").innerHTML = 'Choose a file...';
  } else if (input.files.length == 1) {
    title = input.files[0].name;
    document.getElementById("fileInput").innerHTML = "<span title='" + title + "'>" + input.files[0].name + "</span>";
  } else {
    for (i = 0; i < input.files.length; i++) {
      if (i < input.files.length - 1) {
        title += (i + 1) + ") " + input.files[i].name + "\n";
      } else {
        title += (i + 1) + ") " + input.files[i].name;
      }
    }
    document.getElementById("fileInput").innerHTML = "<span title='" + title + "'>" + input.files.length + " Files</span>";
  }
}

function checkInput() {

  hasFile = hasKey = checkRadio = errFile = errKey = errRadio = "";

  if (document.getElementById("input").value === "") {
    hasFile = "<li>File</li>";
    errFile = "* File\n";
  } else {
    hasFile = "";
  }

  if (!document.getElementById("key").value) {
    hasKey = "<li>Key</li>";
    errKey = "* Key\n"
  } else {
    hasKey = "";
  }

  if (document.getElementById("vernam").checked == false &&
    document.getElementById("columnar").checked == false &&
    document.getElementById("mono").checked == false) {
    checkRadio = "<li>Cipher Option</li>";
    errRadio = "* Cipher Option"
  } else {
    checkRadio = "";
  }

  if (document.getElementById("columnar").checked == true && document.getElementById("key").value.length == 1) {
    throw document.getElementById("log").innerHTML = "Columnar Cipher cannot work with 1 length Key!"
  }

  for (i = 0; i < input.files.length; i++) {
    if (encryptIsPressed && input.files[i].name.substr(input.files[i].name.length - 4, input.files[i].name.length) == ".enc") {
      throw document.getElementById("log").innerHTML = "You cannot encrypt a file that is already encrypted!"
    }
  }

  for (i = 0; i < input.files.length; i++) {
    if (!encryptIsPressed && input.files[i].name.substr(input.files[i].name.length - 4, input.files[i].name.length) != ".enc") {
      throw document.getElementById("log").innerHTML = "The following file(s) that were added are not Encrypted!"
    }
  }

  if (hasFile || hasKey || checkRadio != "") {
    document.getElementById("log").innerHTML = "<span style='color:red'>Sorry but we cannot operate, it looks like you missed: <ul>" + hasFile + hasKey + checkRadio + "</ul></span>";
    throw "Error: The following are missing:\n" + errFile + errKey + errRadio;
  } else {
    return document.getElementById("log").innerHTML = "";
  }

}

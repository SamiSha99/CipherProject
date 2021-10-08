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

  let strHTML = "", log = document.getElementById("log");

  log.innerHTML = "";

  for (i = 0; i < input.files.length; i++)
    if (encryptIsPressed && input.files[i].name.substr(input.files[i].name.length - 4, input.files[i].name.length) == ".enc") {
      log.innerHTML = "You cannot encrypt a file that is already encrypted!";
      return false;
    }

  for (i = 0; i < input.files.length; i++)
    if (!encryptIsPressed && input.files[i].name.substr(input.files[i].name.length - 4, input.files[i].name.length) != ".enc") {
      log.innerHTML = "The following file(s) that were added are not Encrypted!";
      return false;
    }

  if (document.getElementById("columnar").checked && document.getElementById("key").value.length == 1) {
    log.innerHTML = "Columnar Cipher cannot work with 1 length Key!";
    return false;
  }

  if (document.getElementById("input").value === "")
    strHTML += "<li>File</li>";

  if (!document.getElementById("key").value)
    strHTML += "<li>Key</li>";

  if (!document.getElementById("vernam").checked && !document.getElementById("columnar").checked && !document.getElementById("mono").checked)
    strHTML += "<li>Cipher Option</li>";

  if (strHTML != "") {
    log.innerHTML = "<span style='color:red'>Sorry but we cannot operate, it looks like you missed: <ul>" + strHTML + "</ul></span>";
    return false;
  }

  return true;
}

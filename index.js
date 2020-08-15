function validate() {
  var firstname = document.getElementById("firstname").value;
  var email = document.getElementById("Email").value;

  if (!firstname) {
    document.getElementById("errMsgFirstname").style.display = "block";
    document.getElementById("errMsgFirstname").innerHTML =
      "Please enter first name";
    document.getElementById("errMsgFirstname").style.color = "red";
  }

  if (!email) {
    document.getElementById("errMsgEmail").style.display = "block";
    document.getElementById("errMsgEmail").innerHTML = "Please enter Email";
    document.getElementById("errMsgEmail").style.color = "red";
  } else if (!ValidateEmail(email)) {
    document.getElementById("errMsgEmail").style.display = "block";
    document.getElementById("errMsgEmail").innerHTML =
      "Please enter a valid email Email";
    document.getElementById("errMsgEmail").style.color = "red";
  }
}

function hidevalidationMsg(val) {
  document.getElementById(val).style.display = "none";
}

function ValidateEmail(email) {
  var emailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
    String(email).toLowerCase()
  );
  if (email.match(emailformat)) {
    return true;
  }
  return false;
}

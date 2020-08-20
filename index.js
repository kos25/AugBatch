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

  var parms = {
    FirstName: firstname,
    LastName: "demo",
    Email: email,
    Phone: 9988418218,
  };

  console.log(parms);

  const Url = "http://localhost:5000/contact";
  axios
    .post(Url, parms)
    .then((res) => {
      alert(res);
    })
    .catch((err) => alert(err));
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

function Showdata() {
  tablebody = document.getElementById("tabledata");
  const Url = "http://localhost:5000/contact";
  axios
    .get(Url)
    .then((res) => {
      console.log(res);
      for (var i = 0; i < res.data.contactlist.length; i++) {
        var tr = document.createElement("tr");

        var FirstName = document.createElement("td");
        var LastName = document.createElement("td");
        var Email = document.createElement("td");
        var PhoneNumber = document.createElement("td");

        FirstName.innerHTML = res.data.contactlist[i].FirstName;
        LastName.innerHTML = res.data.contactlist[i].LastName;
        Email.innerHTML = res.data.contactlist[i].Email;
        PhoneNumber.innerHTML = res.data.contactlist[i].Phone;

        tr.appendChild(FirstName);
        tr.appendChild(LastName);
        tr.appendChild(Email);
        tr.appendChild(PhoneNumber);

        tablebody.appendChild(tr);
      }
    })
    .catch((err) => {
      alert(err);
    });
}

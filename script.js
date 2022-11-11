
const uid = document.getElementById("custId");
const pass = document.getElementById("pwd");
const b1 = document.getElementById("b1");

function getFromServer(e) {
  e.preventDefault();
  var querryStr =
    "https://nusstore.glitch.me/login?custId=" + uid.value + "&pwd=" + pass.value;
  console.log(querryStr);

  fetch(querryStr)
    .then((response) => response.json())
    .then((data) => renderhtml(data));
}

function renderhtml(data) {
  console.log(data.success);
  if (data.success == true) {
    window.location.href = "product.html";
  } else {
    var text = "<p>Invalid Credentials</p>";
    document.querySelector(".mypanel").innerHTML = text;
  }
}

b1.addEventListener("click", getFromServer);

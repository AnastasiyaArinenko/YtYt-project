var modalWrapper = document.getElementById("modalWrapper");

var openButton = document.getElementById("openButton");

var closeButton = document.getElementsByClassName("closeButton");

openButton.onclick = function() {
  modalWrapper.style.display = "block";
}

closeButton.onclick = function() {
  modalWrapper.style.display = "none";
}

const buttonElem = document.getElementById("openButton");
const modalElem = document.getElementById("modalWrapper");
const closeButton = document.getElementById("closeButton");

const openModal = () => {
  modalElem.style.display = "block" 
};

buttonElem.addEventListener("click", openModal);

const closeModal = () => {
  modalElem.style.display = "none" 
};

closeButton.addEventListener("click", closeModal);
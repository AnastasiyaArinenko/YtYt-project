const buttonElem = document.getElementById("openButton");
const modalElem = document.getElementById("modalWrapper");
const closeButton = document.getElementById("closeButton");

const openModal = () => {
  modalElem.style.dislay = "block" 
};

buttonElem.addEventListener("click", openModal);

const closeModal = () => {
  modalElem.style.dislay = "none" 
};

closeButton.addEventListener("click", closeModal);
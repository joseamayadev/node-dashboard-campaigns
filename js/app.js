const contenedorPopUp = document.querySelector('.contenedorPopUp');
const closeOpen = document.querySelector('#closeOpen');
const pencil = document.querySelector('.pencil');



closeOpen.addEventListener('click', () => {
    contenedorPopUp.style.display = "none";
})

pencil.addEventListener('click', () => {
    contenedorPopUp.style.display = "grid";
})
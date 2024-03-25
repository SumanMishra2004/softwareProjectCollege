let modalArea = false; // Changed var to let
// Load preloader HTML file dynamically
window.addEventListener('DOMContentLoaded', () => {
    
    // mainContainer.style.display = "none"
    fetch('preloader.html')
        .then(response => response.text())
        .then(html => {
            // Insert the preloader HTML into the document
            document.body.insertAdjacentHTML('afterbegin', html);
            
            // Hide the preloader once the page is loaded
            window.addEventListener('load', () => {
                const preloader = document.getElementById('preloader');
                preloader.style.display = 'none';
                
            });
        })
        .catch(error => {
            console.error('Error loading preloader:', error);
        });
});

function toggleModal(modalOpen) { // Changed parameter name
    if (modalOpen === true) {
        modal.style.display = "block";
    } else {
        modal.style.display = "none";
    }
}
const card = document.querySelectorAll(".card");

for (let i = 0; i <card.length;i++){
    card[i].addEventListener("mouseenter", () => {card[i].style.backgroundImage=`url(${card[i].id})`});
    card[i].addEventListener("mouseleave", () => {
        card[i].style.backgroundImage = ""; // Clear background image on mouse leave
    });
}

const diagram = document.querySelector(".diagramImage");
const modal = document.querySelector(".modalContainer"); // Changed getElementsByClassName to querySelector
const list = document.querySelectorAll(".navigation li");
const listmodal = document.querySelectorAll(".ModalNavElement li");

const photo = document.querySelector(".photo");
function activelinkmodal() {
  listmodal.forEach((item) => item.classList.remove("activeNavEle"));
  this.classList.add("activeNavEle");
  
 if (this.id == "id1") {
  diagram.style.backgroundImage = 'url("./assets/class.jpg")';
 } else if(this.id == "id0"){
  diagram.style.backgroundImage = 'url("./assets/dfd.jpg")';
 }
  else if(this.id == "id2"){
  diagram.style.backgroundImage = 'url("./assets/sequence.jpg")';
 }
  else if(this.id == "id3"){
  diagram.style.backgroundImage = 'url("./assets/activity diagram.jpg")';
 }
  else if(this.id == "id4"){
  diagram.style.backgroundImage = 'url("./assets/something.jpg")';
 }
}
function activelink() {
    list.forEach((item) => item.classList.remove("active"));
    this.classList.add("active");
   
}
photo.addEventListener("click",()=>{
  toggleModal(true);
})

list.forEach((item) => item.addEventListener("click", activelink));
listmodal.forEach((item) => item.addEventListener("click", activelinkmodal));

const hideBarModal = document.querySelector(".hideBar"); // Changed getElementsByClassName to querySelector
hideBarModal.addEventListener("click", () => {
    toggleModal(false);
});



// Nav icons
const hamburgerMenuIcon = "<i class=\"fa fa-bars\"></i>";
const xIcon = "<i class=\"fas fa-times\"></i>";

// Get nav elements
const menuButton = document.getElementById("menu");
const nav = document.getElementById("myTopnav");
const navOptions = document.getElementsByClassName("navOption");

// Open nav and change nav button
function responsiveNav() {
    if (nav.className !== "topnav responsive") {
      nav.className += " responsive";
      menuButton.innerHTML = xIcon;
    } else {
      nav.className = "topnav";
      menuButton.innerHTML = hamburgerMenuIcon;
    }
  }

menuButton.addEventListener("click", responsiveNav);

// Close the nav when user clicks on an option
function closeNav() {
    if (nav.className === "topnav responsive") {
      nav.className = "topnav";
      menuButton.innerHTML = hamburgerMenuIcon;
    }
  }

// Add event listeners to all nav options
for (let i = 0; i < navOptions.length; i++) {
  navOptions[i].addEventListener('click', closeNav);
}

// Get all elements with service class
const services = document.getElementsByClassName("service");

function addStyling(event) {
  // Get the element to which the event handler has been attached
  let element = event.currentTarget;
  // Get the child elements
  let elementChildren = element.children;
  // Add shadow styling
  element.style.boxShadow = "0 4px 8px 0 rgba(0, 0, 0, 0.25), 0 6px 20px 0 rgba(0, 0, 0, 0.20)";
  // Add heading color styling
  elementChildren[1].style.color = "rgb(141, 95, 215)";
}

function removeStyling(event) {
  // Get the element to which the event handler has been attached
  let element = event.currentTarget;
  // Get the child elements
  let elementChildren = element.children;
  // Remove shadow styling
  element.style.boxShadow = "none";
  // Remove heading color styling
  elementChildren[1].style.color = "";
}

// Add event listeners to all elements with class service
for (let i = 0; i < services.length; i++) {
  services[i].addEventListener("mouseover", addStyling);
  services[i].addEventListener("mouseout", removeStyling);
}

// Get the modal
const modal = document.getElementById("myModal");
// Get the image and insert it inside the modal - use its "alt" text as a caption
const dogPhotos = document.querySelectorAll(".dog-photos img");
const modalImg = document.getElementById("img01");
const captionText = document.getElementById("caption");

function openImage(event) {
  if(window.innerWidth > 700) {
    // Get the element to which the event handler has been attached
    let img = event.currentTarget;
    // Style modal
    modal.style.display = "block";
    // Add image
    modalImg.src = img.src;
    // Add caption
    captionText.innerHTML = img.alt;
    // Remove navbar
    nav.style.display = 'none';
  }
}

// Add event listeners to all dog photos
for (let i = 0; i < dogPhotos.length; i++) {
  dogPhotos[i].addEventListener("click", openImage);
}

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

function closeModal() {
  modal.style.display = "none";
  nav.style.display = "block";
}

span.addEventListener("click", closeModal);

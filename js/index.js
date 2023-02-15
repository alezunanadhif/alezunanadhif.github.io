// Get Navbar toggle Button
const toggleButton = document.getElementsByClassName("toggle")[0];

// Get Navbar item
const navbarItems = document.getElementsByClassName("navbar-item");

// event toggle button is clicked
toggleButton.addEventListener("click", () => {
  // transition navbar items
  for (let i = 0; i < navbarItems.length; i++) {
    navbarItems[i].classList.toggle("active");
  }
});

/* Toggle between adding and removing the "responsive" class to top-nav when the user clicks on the icon */
function toggleMenu() {
    let menu = document.getElementById("my-top-nav");
    if (menu.className === "top-nav") {
      menu.className += " clicked";
      document.querySelector(".main-title").textContent = "Menu";
    } else {
      menu.className = "top-nav";
      document.querySelector(".main-title").textContent = "I am Groot";

    }

    let header = document.getElementById("my-header");
    if (header.className === "header-nav") {
      header.className += " clicked";
    } else {
      header.className = "header-nav";
    }
  }
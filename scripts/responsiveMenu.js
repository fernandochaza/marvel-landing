/* Toggle between adding and removing the "responsive" class to top-nav when the user clicks on the icon */
function toggleMenu() {
    let menu = document.getElementById("my-top-nav");
    if (menu.className === "top-nav") {
      menu.className += " clicked";
      document.querySelector(".menu-title").textContent = "Menu";
    } else {
      menu.className = "top-nav";
      document.querySelector(".menu-title").textContent = "";

    }
  }
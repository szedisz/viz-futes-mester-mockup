const menuButton = document.querySelector(".menu-toggle");
const siteMenu = document.querySelector("#site-menu");

if (menuButton && siteMenu) {
  menuButton.addEventListener("click", () => {
    const isOpen = siteMenu.classList.toggle("is-open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });

  siteMenu.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      siteMenu.classList.remove("is-open");
      menuButton.setAttribute("aria-expanded", "false");
    }
  });
}

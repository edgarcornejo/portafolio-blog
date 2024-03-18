document.addEventListener('astro:page-load', () => {

  const navLinks = document.querySelectorAll(".nav-li");
  navLinks.forEach((link) => {
    if (link.getAttribute("href") === window.location.pathname) {
      link.setAttribute("class", "li-current");
    }
  })

});
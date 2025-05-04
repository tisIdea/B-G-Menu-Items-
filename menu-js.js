function setActive(clickedLink) {
    const links = document.querySelectorAll(".nav-links a");
    links.forEach((link) => link.classList.remove("active"));
    clickedLink.classList.add("active");
  }

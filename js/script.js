
  const $ = s => document.querySelectorAll(s),
        id = i => document.getElementById(i),
        norm = h => (a = document.createElement('a'), a.href = h, a.pathname + a.hash);

  // Toggle mobile menu
  id('menu-toggle')?.addEventListener('click', () => {
    id('menu-toggle').classList.toggle('open');
    id('mobile-menu')?.classList.toggle('show');
  });

 // Run when the DOM is fully loaded
  document.addEventListener("DOMContentLoaded", function () {
    const currentPath = window.location.pathname.split("/").pop() || "index.html";
    const currentHash = window.location.hash;

    // Select all nav links in both desktop and mobile nav
    const navLinks = document.querySelectorAll(".header-center a, .mobile-menu nav a, footer nav a");

    let matchFound = false;

    navLinks.forEach(link => {
      const linkHref = link.getAttribute("href");

      if (linkHref === currentPath || (currentPath === "index.html" && linkHref.includes(currentHash))) {
        link.classList.add("active");
        matchFound = true;
      } else {
        link.classList.remove("active"); // Remove if previously active
      }
    });

    // If no match found (e.g., direct URL with hash only), set Home active by default
    if (!matchFound) {
      navLinks.forEach(link => {
        if (link.getAttribute("href") === "index.html") {
          link.classList.add("active");
        }
      });
    }
  });

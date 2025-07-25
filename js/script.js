
  const $ = s => document.querySelectorAll(s),
        id = i => document.getElementById(i),
        norm = h => (a = document.createElement('a'), a.href = h, a.pathname + a.hash);

  // Toggle mobile menu
  id('menu-toggle')?.addEventListener('click', () => {
    id('menu-toggle').classList.toggle('open');
    id('mobile-menu')?.classList.toggle('show');
  });

 document.addEventListener("DOMContentLoaded", function () {
    const path = window.location.pathname.split("/").pop() || "index.html";
    const hash = window.location.hash;

    // Collect all navigation links
    const navLinks = document.querySelectorAll(".header-center a, .mobile-menu nav a, footer nav a");

    // Clean all previous active classes
    navLinks.forEach(link => link.classList.remove("active"));

    let found = false;

    // Step 1: Try to match full path + hash (for in-page sections)
    navLinks.forEach(link => {
      const href = link.getAttribute("href");
      if (href === path + hash) {
        link.classList.add("active");
        found = true;
      }
    });

    // Step 2: If no match, try to match just the path (e.g., index.html)
    if (!found) {
      navLinks.forEach(link => {
        const href = link.getAttribute("href").split("#")[0];
        if (href === path) {
          link.classList.add("active");
          found = true;
        }
      });
    }

    // Step 3: If still no match, default to home
    if (!found) {
      navLinks.forEach(link => {
        if (link.getAttribute("href").split("#")[0] === "index.html") {
          link.classList.add("active");
        }
      });
    }
  });

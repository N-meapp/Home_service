const navbar = document.getElementById("navbar");
  const links = document.querySelectorAll(".nav-link");
  const menuBtn = document.getElementById("mobile-menu-button");
  const menuIcon = document.getElementById("menu-icon");
  const mobileMenu = document.getElementById("mobile-menu");

  // Scroll behavior
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.remove("bg-transparent", "text-white");
      navbar.classList.add("bg-white", "text-black", "shadow-md");

      links.forEach(link => {
        link.classList.remove("text-white");
        link.classList.add("text-black");
      });

      // Change menu icon color to black
      menuIcon.classList.remove("text-white");
      menuIcon.classList.add("text-black");
    } else {
      navbar.classList.remove("bg-white", "text-black", "shadow-md");
      navbar.classList.add("bg-transparent", "text-black");

      links.forEach(link => {
        link.classList.remove("text-black");
        link.classList.add("text-black");
      });

      // Change menu icon back to white
      menuIcon.classList.remove("text-black");
      menuIcon.classList.add("text-black");
    }
  });

  // Toggle mobile menu
  menuBtn.addEventListener("click", (e) => {
    e.stopPropagation(); // Prevent immediate close on click
    mobileMenu.classList.toggle("hidden");
  });

  // Close mobile menu when clicking outside
  document.addEventListener("click", (e) => {
    if (!mobileMenu.contains(e.target) && !menuBtn.contains(e.target)) {
      mobileMenu.classList.add("hidden");
    }
  });









  function countUp(el, target, duration = 2000, suffix = "+") {
    let start = 0;
    const increment = target / (duration / 20);
    const interval = setInterval(() => {
      start += increment;
      if (start >= target) {
        el.textContent = target.toLocaleString() + suffix;
        clearInterval(interval);
      } else {
        el.textContent = Math.floor(start).toLocaleString();
      }
    }, 20);
  }

  window.addEventListener("DOMContentLoaded", () => {
    countUp(document.getElementById("count1"), 5, 2000, "+");        // 5 Years
    countUp(document.getElementById("count2"), 2500, 2000, "+");     // 2500 Clients
    countUp(document.getElementById("count3"), 10000, 2000, "+");    // 10K Homes
    countUp(document.getElementById("count4"), 75, 2000, "+");       // 75 Staff
  });
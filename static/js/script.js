const navbar = document.getElementById("navbar");
  const links = document.querySelectorAll(".nav-link");
  const menuBtn = document.getElementById("mobile-menu-button");
  const menuIcon = document.getElementById("menu-icon");
  const mobileMenu = document.getElementById("mobile-menu");


  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.remove("bg-transparent", "text-white");
      navbar.classList.add("bg-white", "text-black", "shadow-sm");

      links.forEach(link => {
        link.classList.remove("text-white");
        link.classList.add("text-black");
      });

     
      menuIcon.classList.remove("text-white");
      menuIcon.classList.add("text-black");
    } else {
      navbar.classList.remove("bg-white", "text-black", "shadow-md");
      navbar.classList.add("bg-transparent", "text-black");

      links.forEach(link => {
        link.classList.remove("text-black");
        link.classList.add("text-black");
      });

      
      menuIcon.classList.remove("text-black");
      menuIcon.classList.add("text-black");
    }
  });

  
  menuBtn.addEventListener("click", (e) => {
    e.stopPropagation(); 
    mobileMenu.classList.toggle("hidden");
  });


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
    countUp(document.getElementById("count1"), 5, 2000, "+");        
    countUp(document.getElementById("count2"), 2500, 2000, "+");     
    countUp(document.getElementById("count3"), 10000, 2000, "+");    
    countUp(document.getElementById("count4"), 75, 2000, "+");       
  });













  const addDateBtn = document.getElementById("addDateBtn");
    const date2 = document.getElementById("date2");
    let secondDateShown = false;
  
    addDateBtn.addEventListener("click", () => {
      if (!secondDateShown) {
        date2.classList.remove("hidden");
        secondDateShown = true;
        addDateBtn.classList.add("pointer-events-none", "text-gray-400");
      }
    });
  
    const timeButtons = document.querySelectorAll(".slot");
    let selectedTime = "";
  
    timeButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        timeButtons.forEach(b => b.classList.remove("bg-[#003393]", "text-white"));
        btn.classList.add("bg-[#003393]", "text-white");
        selectedTime = btn.innerText;
      });
    });
  
    const confirmBtn = document.getElementById("confirmBtn");
    const successMsg = document.getElementById("successMsg");
    const confirmedDates = document.getElementById("confirmedDates");
    const confirmedTime = document.getElementById("confirmedTime");
  
    confirmBtn.addEventListener("click", () => {
      const d1 = document.getElementById("date1").value;
      const d2 = secondDateShown ? document.getElementById("date2").value : null;
  
      if (!d1 || !selectedTime) {
        alert("Please select at least one date and a time slot.");
        return;
      }
  
      confirmBtn.disabled = true;
      confirmBtn.textContent = "Confirmed!";
      successMsg.classList.remove("hidden");
      confirmedDates.innerText = d2 ? `${d1} & ${d2}` : d1;
      confirmedTime.innerText = `Time: ${selectedTime}`;
    });














  
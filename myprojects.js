// JavaScript for Hamburger Menu
const hamburgerMenu = document.getElementById('hamburger-menu');
const mobileMenu = document.getElementById('mobile-menu');

hamburgerMenu.addEventListener('click', () => {
    hamburgerMenu.classList.toggle('open');
    mobileMenu.classList.toggle('open');
});

// Close mobile menu when a link is clicked
mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        hamburgerMenu.classList.remove('open');
        mobileMenu.classList.remove('open');
    });
});

// Javascript for Toast message function
document.addEventListener("DOMContentLoaded", () => {
    // Toast message function
    function showToast(message) {
      let toast = document.createElement("div");
      toast.className = "toast-message";
      toast.textContent = message;
      document.body.appendChild(toast);
  
      setTimeout(() => toast.classList.add("show"), 100);
      setTimeout(() => toast.classList.remove("show"), 2500);
      setTimeout(() => toast.remove(), 3000);
    }
  
    // Say Hello button
    document.querySelector(".say-hello-btn").addEventListener("click", () => {
      showToast("Thank you for reaching out! It's wonderful to connect with you. So first things first, I am Alibu Ajisa.");
    });
  
    // Newsletter form
    const newsletterForm = document.querySelector(".newsletter-card form");
    newsletterForm.addEventListener("submit", (e) => {
      e.preventDefault();
      showToast("Thanks for subscribing to my newsletter!");
      newsletterForm.reset();
    });
  });
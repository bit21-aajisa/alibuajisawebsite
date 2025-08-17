
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

   // Function to parse the target value from the data-target attribute
   function parseTargetValue(targetString) {
    // Converts string to number
    return parseInt(targetString, 10);
}

// Function to format the number back with 'k', 'M', '+'
function formatNumber(num, originalTargetString) {
    if (num >= 1000000) { // Millions
        return (num / 1000000).toFixed(1) + 'M+';
    } else if (num >= 1000) { // Thousands
        return (num / 1000).toFixed(0) + 'k+';
    }
    return num.toString() + '+'; // Fallback, though not expected for these numbers
}

// Function to animate the counting
function animateCount(element, start, end, duration) {
    let startTime = null;

    // Define the unit/suffix based on the original data-target
    const originalTargetString = element.dataset.target;
    const suffix = originalTargetString.includes('M') ? 'M+' : (originalTargetString.includes('k') ? 'k+' : '+');

    function easeOutQuad(t) {
        return t * (2 - t);
    }

    function frame(currentTime) {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        const easedProgress = easeOutQuad(progress); // Apply easing function

        const currentValue = Math.floor(start + (end - start) * easedProgress);

        // Update the text content of the element
        if (end >= 1000000) {
            element.textContent = (currentValue / 1000000).toFixed(1) + 'M+';
        } else if (end >= 1000) {
            element.textContent = (currentValue / 1000).toFixed(0) + 'k+';
        } else {
            element.textContent = currentValue.toString() + '+';
        }

        if (progress < 1) {
            requestAnimationFrame(frame);
        } else {
            // Ensure the final value is exactly the target value with its original format
            if (end >= 1000000) {
                element.textContent = (end / 1000000).toFixed(1) + 'M+';
            } else if (end >= 1000) {
                element.textContent = (end / 1000).toFixed(0) + 'k+';
            } else {
                element.textContent = end.toString() + '+';
            }
        }
    }
    requestAnimationFrame(frame);
}

// Select all h3 elements within stat-item
const statNumbers = document.querySelectorAll('.stat-item h3');

// Options for the Intersection Observer
const observerOptions = {
    root: null, // Use the viewport as the root
    rootMargin: '0px',
    threshold: 0.5 // Trigger when 50% of the element is visible
};

// Create a new Intersection Observer
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const element = entry.target;
            const targetValue = parseTargetValue(element.dataset.target);
            const duration = 2000; // 2 seconds animation
            animateCount(element, 0, targetValue, duration);

            // Stop observing once the animation has started
            observer.unobserve(element);
        }
    });
}, observerOptions);

// Observe each stat number element
statNumbers.forEach(number => {
    observer.observe(number);
});

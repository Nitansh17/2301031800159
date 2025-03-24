// This script contains additional functionality for the Artisan Profile Editor
// Most of the interactive functionality is handled by Alpine.js directly in the HTML

document.addEventListener("DOMContentLoaded", function () {
    // Add any additional functionality here that's not covered by Alpine.js
  
    // Example: Add keyboard navigation for the tabs
    const tabButtons = document.querySelectorAll(".tab-button");
  
    tabButtons.forEach((button, index) => {
      button.addEventListener("keydown", (e) => {
        // Arrow right or down: move to next tab
        if (e.key === "ArrowRight" || e.key === "ArrowDown") {
          e.preventDefault();
          const nextIndex = (index + 1) % tabButtons.length;
          tabButtons[nextIndex].focus();
          tabButtons[nextIndex].click();
        }
  
        // Arrow left or up: move to previous tab
        if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
          e.preventDefault();
          const prevIndex = (index - 1 + tabButtons.length) % tabButtons.length;
          tabButtons[prevIndex].focus();
          tabButtons[prevIndex].click();
        }
      });
    });
  
    // Example: Form validation function (to be integrated with Alpine.js)
    window.validateForm = function (formData) {
      let isValid = true;
      let errors = {};
  
      // Validate name
      if (!formData.name.trim()) {
        errors.name = "Name is required";
        isValid = false;
      }
  
      // Validate email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        errors.email = "Valid email is required";
        isValid = false;
      }
  
      return { isValid, errors };
    };
  });
  
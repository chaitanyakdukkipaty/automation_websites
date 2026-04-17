// script.js
document.addEventListener("DOMContentLoaded", function() {
  // Inject navbar into all pages
  fetch('nav.html')
      .then(response => response.text())
      .then(data => {
          document.getElementById('navbar').innerHTML = data;
          addNavToggle();
      });

  function addNavToggle() {
      const navToggle = document.getElementById('navToggle');
      const navMenu = document.getElementById('navMenu');
      
      navToggle.addEventListener('click', function() {
          navMenu.classList.toggle('active');
      });
  }

  // Dropdown functionality for DOM structure change
  document.addEventListener('change', function(event) {
      if (event.target.id === 'domDropdown') {
          let value = event.target.value;
          if (value === 'original') {
              // Change to original DOM structure
          } else if (value === 'modified') {
              // Change to modified DOM structure
          } else if (value === 'healing') {
              // Change for AI Healing DOM structure
          }
      }
  });
});


// Single Select Menu
const singleSelectBox = document.getElementById('singleSelectBox');
const singleOptionsContainer = document.getElementById('singleOptionsContainer');

singleSelectBox.addEventListener('click', () => {
  singleOptionsContainer.style.display = singleOptionsContainer.style.display === 'block' ? 'none' : 'block';
});

singleOptionsContainer.querySelectorAll('.option').forEach(option => {
  option.addEventListener('click', () => {
    singleSelectBox.textContent = option.textContent;
    singleOptionsContainer.style.display = 'none';
  });
});

// Multi-Select Menu
const multiSelectBox = document.getElementById('multiSelectBox');
const multiOptionsContainer = document.getElementById('multiOptionsContainer');
const multiSelectDisplay = document.getElementById('multiSelectDisplay');

multiSelectBox.addEventListener('click', () => {
  multiOptionsContainer.style.display = multiOptionsContainer.style.display === 'block' ? 'none' : 'block';
});

multiOptionsContainer.querySelectorAll('.option').forEach(option => {
  option.addEventListener('click', () => {
    const value = option.dataset.value;
    const selected = document.createElement('div');
    selected.className = 'selected-option';
    selected.textContent = option.textContent;

    const removeBtn = document.createElement('span');
    removeBtn.textContent = 'x';
    removeBtn.addEventListener('click', () => {
      multiSelectDisplay.removeChild(selected);
    });

    selected.appendChild(removeBtn);
    multiSelectDisplay.appendChild(selected);

    multiOptionsContainer.style.display = 'none';
  });
});


// script.js
function toggleField2() {
  const field1 = document.getElementById('field1');
  const field2 = document.getElementById('field2');
  const field2Label = document.getElementById('field2-label');

  if (field1.value.trim() !== '') {
      field2.style.display = 'block';
      field2Label.style.display = 'block';
  } else {
      field2.style.display = 'none';
      field2Label.style.display = 'none';
  }
}

function showNotification(type) {
  const container = document.getElementById('notification-container');
  
  let notificationMessage;
  if (type === 'success') {
      notificationMessage = 'Success! Your action was successful.';
  } else if (type === 'error') {
      notificationMessage = 'Error! Something went wrong.';
  } else if (type === 'info') {
      notificationMessage = 'Info! Here\'s some important information.';
  }

  // Create notification element
  const notification = document.createElement('div');
  notification.className = `notification ${type}`;
  notification.innerHTML = `<p>${notificationMessage}</p>`;

  // Add the notification to the container
  container.appendChild(notification);

  // Automatically remove the notification after 3 seconds
  setTimeout(() => {
      container.removeChild(notification);
  }, 1500);
}

// Pagination
function showPage(pageNumber) {
  const content = document.getElementById('page-content');
  content.innerHTML = `<p>Page ${pageNumber} Content</p>`;
}

// Progress Bar
function updateProgress(increase) {
  const progress = document.getElementById('progress');
  let width = parseInt(progress.style.width);
  if (increase && width < 100) {
      width += 10;
  } else if (!increase && width > 0) {
      width -= 10;
  }
  progress.style.width = width + '%';
  progress.textContent = width + '%';
}

function toggleProgressBarView() {
  const view = document.getElementById("progressbar-viewSelector").value;
  const progressBar = document.getElementById('progress');
  if (view === "Robust Progress Bar Moved To Skip Parent") {
    var wrapperDiv = document.createElement('div');
    wrapperDiv.classList.add('progress-wrapper'); 
    wrapperDiv.setAttribute('tabindex', '1');
    wrapperDiv.appendChild(progressBar);
    var progressContainer = document.querySelector('.progress-bar');
    progressContainer.appendChild(wrapperDiv);
  } else if (view === "Robust Progress Bar Removed") {
      progressBar.remove();
  } 
}

function toggleCommandPaletteView() {
  const view = document.getElementById("command-palette-viewSelector").value;
  const commandPalette = document.getElementById('command-palette');
  if (view === "Robust Command Palette Custom Attribute Change") {
    commandPalette.setAttribute('data-user-id', '54321');
  } else if (view === "Robust Command Palette Removed") {
    commandPalette.remove();
  } 
}

// Image
function showImage() {
  document.getElementById('imageContainer').style.display = 'block';
}

function closeImage() {
  document.getElementById('imageContainer').style.display = 'none';
}

// Modal
function openModal() {
  document.getElementById('myModal').style.display = 'block';
}

// Modal Changes
function toggleModalView() {
  const view = document.getElementById("modal-viewSelector").value;
  const modal = document.getElementById('myModal');
  if (view === "Robust Modal Less Than 50 percent Change") {
    modal.removeAttribute('id');
  } else if (view === "Robust Modal Removed") {
    modal.remove();
  } 
}

// Image Change
function toggleImageView() {
  const view = document.getElementById("image-viewSelector").value;
  const image = document.getElementById('bstacklogo');
  if (view === "Robust Image Single Attribute Change") {
    image.removeAttribute('id');
  } else if (view === "Robust Image Removed") {
    image.remove();
  } 
}

// Flyout Menu
function toggleFlyoutMenuView() {
  const view = document.getElementById("flyout-viewSelector").value;
  const submenu = document.getElementById('submenu-1');
  const sub_submenu = document.getElementById('sub-submenu-1');
  if (view === "Robust Flyout Menu Custom Attribute Changes") {
    submenu.setAttribute("data-menu-id","4");
  } else if (view === "Robust Nested Flyout Menu Custom Attribute Changes") {
    sub_submenu.setAttribute("data-submenu-id","4");
  } 
}

// Tables
function toggleTableChangeView() {
  const view = document.getElementById("table-viewSelector").value;
  const tableitem = document.getElementById('table-component');
  if (view === "Robust Table Element Moved To Parent") {
    const mainTableContainer = document.getElementById('table-container');
    mainTableContainer.appendChild(tableitem);
    const parentdiv = document.getElementById('parent-div');
    const divTable = document.createElement('div');
    divTable.setAttribute('class','parent component');
    divTable.setAttribute('id','parent-div');
    mainTableContainer.appendChild(divTable);
    parentdiv.remove();
  } else if (view === "Robust Table Multiple Attribute Change") {
    tableitem.removeAttribute('id');
  } else if (view === "Robust Table Fail Multiple Attribute Change") {
    tableitem.removeAttribute('id');
    tableitem.setAttribute("data-user-id","modified user id");
    tableitem.setAttribute('placeholder','Modified Table Content');
  } 
}

// Tabs
function toggleTabsView() {
  const view = document.getElementById("tab-viewSelector").value;
  const tabitem = document.getElementById('new-tab-id');
  if (view === "Robust Tab Multiple Attribute Change") {
    tabitem.removeAttribute('id');
    tabitem.setAttribute('placeholder','Modified Tabs Option');
    tabitem.setAttribute('aria-label','Modified Aria Label for Tabs');
  } else if (view === "Robust Tab Single Attribute Change Based on Accessibility") {
    tabitem.removeAttribute('id');
  } else if (view === "Robust Tabs Fail Multiple Attribute Change") {
    tabitem.removeAttribute('id');
    tabitem.setAttribute('placeholder','Modified Tabs Option');
    tabitem.setAttribute('aria-label','Modified Aria Label for Tabs');
    tabitem.setAttribute('class','pseudo-link');
    tabitem.setAttribute('aria-describedby','Modified Aria Described By For Accessibility');
  } 
}

// Pagination
function togglePaginationView() {
  const view = document.getElementById("pagination-viewSelector").value;
  const paginationitem = document.getElementById("pagination-2");
  if (view === "Robust Pagination Multiple Attribute Change") {
    paginationitem.removeAttribute('id');
    paginationitem.setAttribute('placeholder','Modified Pagination Option for Page No 2');
  } else if (view === "Robust Pagination Exactly 50 percent Attribute Change") {
    paginationitem.removeAttribute('id');
    paginationitem.setAttribute('placeholder','Modified Pagination Option for Page No 2');
    paginationitem.setAttribute('aria-label','Modified Aria Label for Pagination of Page No 2');
  } else if (view === "Robust Pagination Fail Multiple Attribute Change") {
    paginationitem.removeAttribute('id');
    paginationitem.setAttribute('placeholder','Modified Pagination Option for Page No 2');
    paginationitem.setAttribute('aria-label','Modified Aria Label for Pagination of Page No 2');
    paginationitem.setAttribute('aria-describedby','Modified Page Number 2');
    paginationitem.setAttribute('class','pseudo-button');
  } 
}

// Lists
function toggleListsView() {
  const view = document.getElementById("lists-viewSelector").value;
  const listitem = document.getElementById('list-1');
  if (view === "Robust Lists Element Moved To Child") {
    const newListItem = document.createElement('li');
    newListItem.setAttribute('id','list-item-1');
    newListItem.setAttribute('data-value','List Item 1');
    newListItem.setAttribute('class','active');
    newListItem.setAttribute('data-route','home');
    newListItem.setAttribute('placeholder','modified-list-item');
    const divToRemove = document.getElementById('child-div-for-lists');
    divToRemove.remove();
    const wrapperDiv = document.createElement('div');
    wrapperDiv.setAttribute('id','child-div-for-lists');
    wrapperDiv.appendChild(newListItem);
    const mainList = document.getElementById('lists-menu');
    mainList.appendChild(wrapperDiv);
    listitem.remove();
  } else if (view === "Robust Lists Multiple Attribute Change") {
    listitem.setAttribute("class","modified active");
    listitem.setAttribute("placeholder","modified list 1");
  } else if (view === "Robust Lists Fail Multiple Attribute Change") {
    listitem.removeAttribute('id');
    listitem.setAttribute("class","modified active");
    listitem.setAttribute('data-value','Modified Lists Value');
    listitem.setAttribute('role','Modified Lists Value');
  } 
}

function closeModal() {
  document.getElementById('myModal').style.display = 'none';
}

// Date Picker
function toggleDatePickerView() {
  const view = document.getElementById("datepicker-viewSelector").value;
  const datepicker = document.getElementById('date-picker');
  if (view === "Robust Date Picker Change Custom Attribute") {
    datepicker.setAttribute("data-user-id","modified-date-picker");
  } 
}

// Toggle - Checkbox
function toggleSliderView() {
  const view = document.getElementById("toggle-checkbox-viewSelector").value;
  const toggleCheckbox = document.getElementById('toggle-checkbox');
  if (view === "Robust Toggle Checkbox Single Attribute Change Based on Accessibility") {
    toggleCheckbox.setAttribute("placeholder","Modified Toggle Checkbox");
  } else if(view === "Robust Toggle Checkbox Multiple Attribute Change Based on Accessibility") {
    toggleCheckbox.removeAttribute('id');
    toggleCheckbox.setAttribute("placeholder","Modified Toggle Checkbox");

  } else if(view === "Robust Fail Toggle Checkbox Tag Change Based on Accessibility") {
    const toggleCheckbox = document.getElementById("toggle-checkbox");
    const customCheckbox = document.createElement("div");
    customCheckbox.setAttribute("role", "checkbox");
    customCheckbox.setAttribute("aria-checked", toggleCheckbox.checked);
    customCheckbox.setAttribute("tabindex", "0");
    customCheckbox.textContent = "Custom Checkbox";
    customCheckbox.style.cssText = `
        width: 20px;
        height: 20px;
        border: 2px solid #000;
        display: inline-block;
        cursor: pointer;
        background-color: ${toggleCheckbox.checked ? "#007bff" : "#fff"};
    `;
    toggleCheckbox.parentNode.replaceChild(customCheckbox, toggleCheckbox);
    customCheckbox.addEventListener("click", () => {
        const isChecked = customCheckbox.getAttribute("aria-checked") === "true";
        customCheckbox.setAttribute("aria-checked", !isChecked);
        customCheckbox.style.backgroundColor = isChecked ? "#fff" : "#007bff";
        console.log(`Custom checkbox state: ${!isChecked}`);
    });
    customCheckbox.addEventListener("keydown", (e) => {
        if (e.key === " ") {
            e.preventDefault(); 
            customCheckbox.click();
        }
    });
  } else if(view === "Robust Fail Toggle Checkbox Multiple Attribute Change Based on Accessibility") {
    toggleCheckbox.removeAttribute('id');
    toggleCheckbox.setAttribute("placeholder","Modified Toggle Checkbox");
    toggleCheckbox.setAttribute("aria-describedby","Modified Toggle Checkbox");
  } else if(view === "Robust Fail Toggle Checkbox All Attribute Change Based on Accessibility") {
    toggleCheckbox.removeAttribute('id');
    toggleCheckbox.setAttribute("placeholder","Modified Toggle Checkbox");
    toggleCheckbox.setAttribute("aria-describedby","Modified Toggle Checkbox");
    toggleCheckbox.setAttribute("aria-label","Modified Toggle Checkbox");
  } else if(view === "Robust Fail Toggle Checkbox Tag Removed Based on Accessibility") {
    toggleCheckbox.remove();
  }
}


// Toggle - Slider
function toggleSlideView() {
  const view = document.getElementById("slider-viewSelector").value;
  const toggleSlider = document.getElementById('slider');
  const sliderDiv = document.getElementById('slider-main-div');
  if (view === "Robust Toggle Slider Single Attribute Change Based on Accessibility") {
    toggleSlider.setAttribute("placeholder","Modified Toggle slider");
  } else if(view === "Robust Toggle Slider Multiple Attribute Change Based on Accessibility") {
    toggleSlider.removeAttribute('id');
    toggleSlider.setAttribute("placeholder","Modified Toggle slider");

  } else if(view === "Robust Fail Toggle Slider Tag Change Based on Accessibility") {
    toggleSlider.remove();
    const container = document.getElementById("slider-container");
    const sliderTrack = document.createElement("div");
    sliderTrack.style.cssText = `
      width: 300px;
      height: 10px;
      background: #ccc;
      position: relative;
      border-radius: 5px;
    `;
    const sliderThumb = document.createElement("div");
    sliderThumb.style.cssText = `
      width: 20px;
      height: 20px;
      background: #007bff;
      position: absolute;
      top: -5px;
      left: 50%;
      border-radius: 50%;
      cursor: pointer;
    `;
    sliderTrack.appendChild(sliderThumb);
    container.appendChild(sliderTrack);
    const sliderValueDisplay = document.getElementById("slider-value");
    let isDragging = false;
    sliderThumb.addEventListener("mousedown", () => {
      isDragging = true;
    });
    document.addEventListener("mousemove", (event) => {
      if (!isDragging) return;
      const trackRect = sliderTrack.getBoundingClientRect();
      const trackStart = trackRect.left;
      const trackEnd = trackRect.right;
      let newLeft = event.clientX - trackStart;
      newLeft = Math.max(0, Math.min(newLeft, trackRect.width));
      sliderThumb.style.left = `${newLeft}px`;
      const value = Math.round((newLeft / trackRect.width) * 100);
      sliderValueDisplay.textContent = value;
    });
    document.addEventListener("mouseup", () => {
      isDragging = false;
    });
    sliderDiv.appendChild(sliderTrack);
  } else if(view === "Robust Fail Toggle Slider Multiple Attribute Change Based on Accessibility") {
    toggleSlider.removeAttribute('id');
    toggleSlider.setAttribute("placeholder","Modified Toggle slider");
    toggleSlider.setAttribute("aria-describedby","Modified Toggle slider");
    toggleSlider.setAttribute("min","50");
    toggleSlider.setAttribute("max","200");

  } else if(view === "Robust Fail Toggle Slider All Attribute Change Based on Accessibility") {
    toggleSlider.removeAttribute('id');
    toggleSlider.setAttribute("placeholder","Modified Toggle slider");
    toggleSlider.setAttribute("aria-describedby","Modified Toggle slider");
    toggleSlider.setAttribute("aria-label","Modified Toggle slider");
    toggleSlider.setAttribute("min","50");
    toggleSlider.setAttribute("max","200");

  } else if(view === "Robust Fail Toggle Slider Tag Removed Based on Accessibility") {
    toggleSlider.remove();

  }
}

// Command Palette
const commandInput = document.getElementById('command-palette');
const suggestions = document.getElementById('suggestions');
const commands = ['Open file', 'Save file', 'Close window', 'New project', 'Exit'];

commandInput.addEventListener('input', function () {
  const input = this.value.toLowerCase();
  suggestions.innerHTML = '';
  commands.forEach(command => {
      if (command.toLowerCase().includes(input)) {
          const suggestionItem = document.createElement('div');
          suggestionItem.textContent = command;
          suggestionItem.onclick = () => {
              commandInput.value = command;
              suggestions.innerHTML = '';
          };
          suggestions.appendChild(suggestionItem);
      }
  });
});

// Slider
function updateSliderValue(value) {
  document.getElementById('slider-value').textContent = value;
}

// Function to open a new page in a new tab
function openNewPage(pageUrl) {
  window.open(pageUrl, '_blank');
}


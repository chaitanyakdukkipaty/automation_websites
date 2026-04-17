// Function to toggle sidebar (fully open or closed)
function toggleSidebar() {
    var sidebar = document.getElementById("sidebar");
    var content = document.getElementById("content");

    if (sidebar.style.left === "-250px" || sidebar.classList.contains("partial") || sidebar.classList.contains("full")) {
        sidebar.style.left = "0";
        sidebar.classList.remove("partial", "full"); 
        sidebar.style.width = "250px";  
        content.style.marginLeft = "250px"; 
    } else {
        sidebar.style.left = "-250px";
        sidebar.style.width = "250px";  
        content.style.marginLeft = "0"; 
    }
}

// Function to open sidebar partially (without shifting the content)
function openSidebarPartially() {
    var sidebar = document.getElementById("sidebar");
    var content = document.getElementById("content");

    if (!sidebar.classList.contains("partial")) {
        sidebar.classList.add("partial");
        sidebar.style.left = "0";  
        sidebar.style.width = "50vw";  
        content.style.marginLeft = "0"; 
    } else {
        sidebar.classList.remove("partial");
        sidebar.style.left = "-250px"; 
        sidebar.style.width = "250px";  
        content.style.marginLeft = "0"; 
    }
}

// Function to open sidebar fully (100% of the screen width)
function openSidebarFully() {
    var sidebar = document.getElementById("sidebar");
    var content = document.getElementById("content");

    if (!sidebar.classList.contains("full")) {
        sidebar.classList.add("full");
        sidebar.style.left = "0";  
        sidebar.style.width = "100vw";  
        content.style.marginLeft = "0"; 
    } else {
        sidebar.classList.remove("full");
        sidebar.style.left = "-250px"; 
        sidebar.style.width = "250px";  
        content.style.marginLeft = "0"; 
    }
}

// Function to open sidebar with nested options (same as toggle, but with nested hover effect)
function openSidebarNested() {
    var sidebar = document.getElementById("sidebar");
    var content = document.getElementById("content");
    sidebar.classList.add("nested");  
    sidebar.style.left = "0";
    sidebar.classList.add("full");
    sidebar.style.width = "250px"; 
    content.style.marginLeft = "250px"; 
}

// Function to load content dynamically based on sidebar option
function loadContent(option) {
    var content = document.getElementById("dynamic-content");

    if (option === 'option1') {
        content.innerHTML = '<h2>Option 1 Content</h2><p>This is the content for option 1.</p>';
    } else if (option === 'option2') {
        content.innerHTML = '<h2>Option 2 Content</h2><p>This is the content for option 2.</p>';
    } else if (option === 'option3') {
        content.innerHTML = '<h2>Option 3 Content</h2><p>This is the content for option 3.</p>';
    } else if (option === 'option4') {
        content.innerHTML = '<h2>Option 4 Content</h2><p>This is the content for option 4.</p>';
    } else if (option === 'option5') {
        content.innerHTML = '<h2>Option 5 Content</h2><p>This is the content for option 5.</p>';
    }
}

function toggleSideBarView() {
    const view = document.getElementById("sidebar-viewSelector").value;
    const sidebarOption = document.getElementById('option1');
    if (view === "Robust Hover Sidebar Single Attribute Change") {
        const hoverOption = document.getElementById('option4');
        hoverOption.removeAttribute('id');
        hoverOption.setAttribute('placeholder', 'Modified Option-4');
    } else if (view === "Robust Nested Hover Sidebar Single Attribute Change") {
        const hoverOption = document.getElementById('option6');
        hoverOption.removeAttribute('id');
        hoverOption.setAttribute('placeholder', 'Modified Option-6');
        
    } else {
        sidebarOption.removeAttribute('id');
        sidebarOption.setAttribute('placeholder', 'Modified Option-1');
    }
  }

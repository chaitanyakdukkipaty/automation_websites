// Function to move an element to the top of the stack
function moveToTop(elementId) {
  var elements = document.querySelectorAll('.stacked-element');
  elements.forEach(function(el) {
      el.classList.remove('active');
  });

  var selectedElement = document.getElementById(elementId);
  selectedElement.classList.add('active');
}

// Navigation Bar
function toggleNavBarView() {
  const view = document.getElementById("navigationbar-viewSelector").value;
  const parentTag = document.getElementById('navMenuMain');
  const nestedMenu = document.getElementById('navBasicMenu1');
  if (view === "Robust Navigation Bars more than 50 percent change for parent") {
    parentTag.setAttribute("aria-labelledby","nav-title");
    parentTag.setAttribute("data-container-type","normal");
    parentTag.setAttribute("id","modified-navStackContainer");
    parentTag.setAttribute("placeholder","Modified Navbar");
  } else if (view === "Robust Navigation Bars multiple attribute change") {
    const nestedDiv = document.getElementById('Nested-element-1');
    nestedMenu.setAttribute("aria-labelledby","modified-stackTitle");
    nestedMenu.setAttribute("id","modified-navBasicMenu1");
    nestedDiv.setAttribute("placeholder","Modified Nested Element");
  } else if (view === "Robust Navigation Bars single attribute change") {
    nestedMenu.removeAttribute("id");
    parentTag.setAttribute("placeholder","Modified Navbar");
  } 
}

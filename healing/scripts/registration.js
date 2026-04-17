// Store original attributes for each form element
const originalAttributes = {
  name: {
      placeholder: "Enter your full name",
      required: true,
      id: "name"
  },
  email: {
      placeholder: "Enter your email",
      required: true,
      id: "email"
  },
  dob: {
      required: true,
      id: "dob"
  },
  gender: {
      required: true,
      id: "gender"
  },
  phone: {
      placeholder: "Enter your phone number",
      required: true,
      pattern: "^\d{10}$",
      title: "Phone number should be 10 digits",
      maxlength: "10",
      minlength: "10",
      id: "phone"
  },
  organization: {
      placeholder: "Enter your organization",
      id: "organization"
  },
  job: {
      placeholder: "Enter your job title",
      id: "job"
  },
  linkedin: {
      placeholder: "https://linkedin.com/in/your-profile",
      id: "linkedin"
  },
  interests: [
      { id: "ai-ml", value: "AI/ML" },
      { id: "automation", value: "Automation" },
      { id: "testing", value: "Testing" },
      { id: "security", value: "Security" },
      { id: "performance", value: "Performance" }
  ]
};

// Store current attributes for restoring later
const currentAttributes = {};

// Toggle view based on dropdown selection
function toggleView() {
  const selectedValue = document.getElementById("domDropdown").value;
  const formElements = document.querySelectorAll("#registration-form [data-testid], #registration-form [name], #registration-form [data-test-id], #registration-form [data-cy], #registration-form [data-ti]");

  if (selectedValue === "modified") {
      modifyAttributes(formElements);
  } else if (selectedValue === "ai-modified") {
      applyAIHealing(formElements);
  } else {
      resetAttributes(formElements);
  }
}

// Function to modify attributes by removing them
function modifyAttributes(elements) {
  elements.forEach(el => {
      const attributes = Array.from(el.attributes);
      const numToChange = Math.floor(attributes.length * 0.30); // 45% of attributes
      const changedIndices = new Set();

      // Remove the id attribute
      el.removeAttribute("id");

      // Ensure we remove the desired number of additional attributes
      while (changedIndices.size < numToChange) {
          const index = Math.floor(Math.random() * attributes.length);
          if (!["name", "type", "placeholder"].includes(attributes[index].name)) {
              changedIndices.add(index);
          }
      }

      // Remove selected attributes
      changedIndices.forEach(index => {
          el.removeAttribute(attributes[index].name);
      });
  });
}

// Function to apply AI healing
function applyAIHealing(elements) {
  elements.forEach(el => {
      const attributes = Array.from(el.attributes);
      const numToChange = Math.floor(attributes.length * 0.70); // More than 50%
      const changedIndices = new Set();

      // Remove the id attribute
      el.removeAttribute("id");
      // el.removeAttribute("type");
      

      // Ensure we remove the desired number of additional attributes
      while (changedIndices.size < numToChange) {
          const index = Math.floor(Math.random() * attributes.length);
          if (!["type"].includes(attributes[index].name)) {
              changedIndices.add(index);
          }
      }

      // Remove selected attributes
      changedIndices.forEach(index => {
        console.log(attributes[index].name.includes('name'))
        if(attributes[index].name.includes('name') && attributes[index].value.includes('email')) {
          const textarea = document.createElement('textarea');
          textarea.type = 'text';
          textarea.name = 'ai_textarea';
          el.parentNode.replaceChild(textarea, el);
        }
          // el.setAttribute(attributes[index].name, attributes[index].value+'123');
          // el.removeAttribute(attributes[index].name);
      });

      // Simulate sending the element to an AI healing process (placeholder)
  });
}

// Reset attributes to original values
function resetAttributes(elements) {
  elements.forEach(el => {
      const originalKey = el.getAttribute("id"); // Get the original ID
      if (originalKey && originalAttributes[originalKey]) {
          const original = originalAttributes[originalKey];

          // Restore all original attributes, including id
          Object.keys(original).forEach(key => {
              el.setAttribute(key, original[key]);
          });
      }

      // Reset checkbox states
      if (el.type === "checkbox") {
          el.checked = originalAttributes[originalKey]?.checked || false; // Ensure checked state matches original if specified
      }
  });
}

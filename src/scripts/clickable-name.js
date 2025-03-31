export function setupClickableName() {
    // Find the H1 element with the class 'site-title'
    const siteTitleElement = document.querySelector('.site-title');
    
    // Check if the element was actually found
    if (siteTitleElement) {
      const firstNames = ['Riu', 'Ryu', 'Rew']; // Array of first names to cycle through
      const lastName = ' Cherdchusakulchai'; // Store the last name (with leading space)
      let currentNameIndex = 0; // Initialize index to point to 'Riu'
  
      // Optional: Change cursor to pointer on hover to indicate clickability
      siteTitleElement.style.cursor = 'pointer'; 
      // Optional: Prevent text selection when clicking rapidly
      siteTitleElement.style.userSelect = 'none'; 
  
      // Add the click event listener to the site title element
      siteTitleElement.addEventListener('click', () => {
        // Calculate the next index, wrapping around using the modulo operator
        currentNameIndex = (currentNameIndex + 1) % firstNames.length; 
        // Get the new first name from the array
        const newFirstName = firstNames[currentNameIndex];
        // Update the text content of the h1 element
        siteTitleElement.textContent = newFirstName + lastName;
      });
    } else {
        // Log an error to the console if the element wasn't found
        // This helps with debugging if the class name changes or is mistyped
        console.error("Site title element (.site-title) not found.");
    }
  }
  
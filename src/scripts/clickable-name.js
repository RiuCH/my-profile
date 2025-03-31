// src/scripts/clickable-name.js

/**
 * Finds the site title element, adds a click listener 
 * to cycle through the first names 'Riu', 'Ryu', 'Rew',
 * and persists the state across page refreshes using localStorage,
 * cycling the name on each page load.
 */
export function setupClickableName() {
    console.log("setupClickableName function CALLED"); 
    const siteTitleElement = document.querySelector('.site-title');
    console.log("Site title element found:", siteTitleElement); 
    
    if (siteTitleElement) {
      const firstNames = ['Riu', 'Ryu', 'Rew']; 
      const lastName = ' Cherdchusakulchai'; 
      const storageKey = 'siteTitleNameIndex'; // Key for localStorage
  
      // --- Logic on Page Load ---
      let currentNameIndex = 0; // Default starting index
      try {
          // 1. Get the last saved index from localStorage
          const savedIndex = localStorage.getItem(storageKey);
          console.log("Saved index from localStorage:", savedIndex);
  
          if (savedIndex !== null) {
              // 2. If found, parse it and calculate the *next* index for this load
              let lastIndex = parseInt(savedIndex, 10);
              // Check if parsing was successful
              if (!isNaN(lastIndex)) {
                  // Increment and wrap around to get the index for *this* page load
                  currentNameIndex = (lastIndex + 1) % firstNames.length; 
                  console.log("Calculated next index based on saved:", currentNameIndex);
              } else {
                  // Handle cases where saved value isn't a number
                  console.warn("Saved index was not a number, starting from 0.");
                  currentNameIndex = 0; // Fallback to 0
              }
          } else {
              // 3. If no saved index (first visit), use the default index 0
              console.log("No saved index found, starting from 0.");
              currentNameIndex = 0; 
          }
  
          // 4. Save the *current* index (for this page load) back to localStorage
          // This ensures the *next* refresh knows what came before.
          localStorage.setItem(storageKey, currentNameIndex.toString());
          console.log("Saved current index to localStorage:", currentNameIndex);
  
      } catch (error) {
          // Handle potential localStorage errors (e.g., private browsing mode)
          console.error("Error accessing localStorage:", error);
          // Fallback to default index 0 if localStorage fails
          currentNameIndex = 0; 
      }
  
      // 5. Update the text content immediately on load using the calculated index
      const initialFirstName = firstNames[currentNameIndex];
      siteTitleElement.textContent = initialFirstName + lastName;
      console.log("Initial text content set to:", siteTitleElement.textContent);
  
      // --- End Logic on Page Load ---
  
      // Set styles for clickability
      siteTitleElement.style.cursor = 'pointer'; 
      siteTitleElement.style.userSelect = 'none'; 
  
      // Add the click event listener
      siteTitleElement.addEventListener('click', () => {
        console.log("Site title CLICKED!"); 
        // Calculate the next index based on the *current* state shown on the page
        currentNameIndex = (currentNameIndex + 1) % firstNames.length; 
        console.log("New name index after click:", currentNameIndex); 
        
        const newFirstName = firstNames[currentNameIndex];
        siteTitleElement.textContent = newFirstName + lastName;
        console.log("Updated text content to:", siteTitleElement.textContent); 
  
        // *** ADDED: Save the new index to localStorage *after click* ***
        // This ensures the next refresh continues from the clicked state.
        try {
            localStorage.setItem(storageKey, currentNameIndex.toString());
            console.log("Saved index to localStorage after click:", currentNameIndex);
        } catch (error) {
            console.error("Error saving to localStorage after click:", error);
        }
      });
      console.log("Click listener ADDED to site title."); 
    } else {
        // Log an error if the element wasn't found
        console.error("Site title element (.site-title) not found.");
    }
  }
  
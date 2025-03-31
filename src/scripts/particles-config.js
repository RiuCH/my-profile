// src/config/particles-config.js (or wherever you keep it)

export const particlesConfig = {
    particles: {
      number: { 
          value: 80, // Slightly fewer particles often looks better with lines
          density: { enable: true, value_area: 800 } 
      },
      color: { value: "#ffffff" },
      shape: { type: "circle" },
      opacity: { 
          value: 0.6, // Slightly increased opacity for better visibility
          random: { enable: true, minimumValue: 0.1 } // Added random object format
      }, 
      size: { 
          value: 3, 
          random: { enable: true, minimumValue: 1 } // Added random object format
      },
      // *** ADDED: Line linking configuration ***
      line_linked: {
        enable: true,
        distance: 150, // How close particles need to be to link
        color: "#ffffff", // Line color
        opacity: 0.15, // Make lines subtle
        width: 1
      },
      // *** /ADDED ***
      move: { 
          enable: true, 
          speed: 1, 
          direction: "none", 
          random: true,
          straight: false, // Added for less direct paths
          out_mode: "out" // Added standard out mode
      }
    },
    interactivity: {
      events: {
        onhover: { enable: true, mode: "repulse" }, // Keep original interactivity
        onclick: { enable: true, mode: "push" }
      },
      modes: {
        repulse: { distance: 100, duration: 0.4 },
        push: { quantity: 4 }
      }
    },
    detectRetina: true // Changed from retina_detect based on common usage, adjust if needed
  };
  
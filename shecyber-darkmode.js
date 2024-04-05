// Check if the user has a preference for dark mode
const isDarkMode = Cookies.get('darkMode') === 'true';

// Update the CSS custom property based on the user's preference
document.documentElement.style.setProperty('--background', isDarkMode ? 'rgb(0, 0, 32)' : 'white');

// Add a click event listener to the switch to toggle the dark mode
const switchEl = document.querySelector('.mode-toggle input[type="checkbox"]');
switchEl.addEventListener('change', () => {
  // Update the cookie value
  Cookies.set('darkMode', switchEl.checked);

  // Update the CSS custom property based on the user's preference
  document.documentElement.style.setProperty('--background', switchEl.checked ? 'rgb(0, 0, 32)' : 'white');
});
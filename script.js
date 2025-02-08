// Function to display current UTC time
function displayUTCTime() {
    const timeZone = "Africa/Lagos"; // Example: Nigeria Timezone
    const options = { timeZone, hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
    
    setInterval(() => {
      document.querySelector('[data-testid="currentTimeUTC"]').textContent = new Intl.DateTimeFormat('en-US', options).format(new Date());
    }, 1000);
  }
  
  // Update UTC time on page load
  displayUTCTime();

function displayUTCTime() {
    const timeZone = "Africa/Lagos";
    const options = { timeZone, hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
    
    document.querySelector('[data-testid="currentTimeUTC"]').textContent = new Intl.DateTimeFormat('en-US', options).format(new Date());
  }
  
displayUTCTime();

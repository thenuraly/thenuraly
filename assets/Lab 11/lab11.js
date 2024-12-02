// Function to get the current time and format it
function updateClock() {
    const now = new Date(); // Get the current date and time
    const hours = String(now.getHours()).padStart(2, '0'); // Pad single-digit hours
    const minutes = String(now.getMinutes()).padStart(2, '0'); // Pad single-digit minutes
    const seconds = String(now.getSeconds()).padStart(2, '0'); // Pad single-digit seconds

    const currentTime = `${hours}:${minutes}:${seconds}`; // Format the time
    document.getElementById('clock').textContent = currentTime; // Display the time
}

  // Call the function initially to display the time right away
updateClock();

  // Use setInterval to update the clock every second
setInterval(updateClock, 1000);

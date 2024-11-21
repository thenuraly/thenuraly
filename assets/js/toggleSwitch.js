const toggleSwitch = document.getElementById('modeToggle');

// Add event listener for toggle switch
toggleSwitch.addEventListener('change', function () {
    // Toggle the 'dark-mode' class on the body
    document.body.classList.toggle('dark-mode');
});
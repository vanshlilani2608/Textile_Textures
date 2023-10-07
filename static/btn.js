// Get the checkbox element and the status text element
const switchCheckbox = document.getElementById('switch-checkbox');
const statusText = document.querySelector('.status');

// Add an event listener to the checkbox
switchCheckbox.addEventListener('change', function () {
    // Update the status text based on the checkbox state
    if (this.checked) {
        statusText.textContent = 'Seller';
    } else {
        statusText.textContent = 'Buyer';
    }
});

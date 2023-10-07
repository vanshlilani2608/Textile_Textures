document.addEventListener("DOMContentLoaded", function () {
    // Animate buyers
    gsap.from(".login", {
        opacity: 0,
        scale: 0.5,
        duration: 1,
        stagger: 0.2, // Stagger the animations for each buyer
        ease: "power2.out",
    });

    // Animate sellers
    gsap.from(".seller", {
        opacity: 0,
        scale: 0.5,
        duration: 1,
        stagger: 0.2, // Stagger the animations for each seller
        ease: "power2.out",
    });
});
const mobileNumber = document.getElementById('mobileNumber');
        const mobileError = document.getElementById('mobileError');

        mobileNumber.addEventListener('input', function () {
            const mobileValue = mobileNumber.value.trim();
            const isValid = /^[0-9]{10}$/.test(mobileValue);

            if (!isValid) {
                mobileError.textContent = 'Please enter a valid 10-digit mobile number.';
            } else {
                mobileError.textContent = '';
            }
        });

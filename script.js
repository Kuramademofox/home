document.addEventListener('DOMContentLoaded', function () {

// Store timing logic
    const header = document.querySelector('.header');
    const now = new Date();
    const currentHour = now.getHours();

    // Store timings: 6:00 AM to 12:00 AM (midnight)
    if (currentHour < 6 || currentHour >= 24) {
        header.style.backgroundColor = '#800080';

    }

});

// Rating stars logic
const ratings = document.querySelectorAll('.rating');

ratings.forEach(rating => {
    const stars = rating.querySelectorAll('.star');

    stars.forEach(star => {
        star.addEventListener('click', function () {
            const value = this.dataset.value;
            const productId = rating.dataset.productId;
            

            // Handle the rating logic for the specific product
            console.log(`Product ID: ${productId}, Rating: ${value}`);

            // Update the UI based on rating (optional)
            stars.forEach(s => {
                s.style.color = s.dataset.value <= value ? '#f5c518' : '#ccc';

                
                
            });
        });
    });
});

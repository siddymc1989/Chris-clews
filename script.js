document.addEventListener('DOMContentLoaded', () => {
    const buyButtons = document.querySelectorAll('.buy-button');
    const purchaseFormContainer = document.getElementById('purchase-form-container');
    const purchaseForm = document.getElementById('purchase-form');
    const productInput = document.getElementById('product');
    const priceInput = document.getElementById('price');

    buyButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const product = event.target.getAttribute('data-product');
            const price = event.target.getAttribute('data-price');
            productInput.value = product;
            priceInput.value = `£${price}`;
            purchaseFormContainer.classList.remove('hidden');
            window.scrollTo(0, purchaseFormContainer.offsetTop);
        });
    });

    purchaseForm.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Thank you for your purchase!');
        purchaseFormContainer.classList.add('hidden');
        purchaseForm.reset();
    });

    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Thank you for your message!');
    });
});

let slideIndex = 0;
const slides = document.querySelectorAll('#product-slider .slides img');
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
}

document.querySelector('.next').addEventListener('click', () => {
    slideIndex = (slideIndex + 1) % totalSlides;
    showSlide(slideIndex);
});

document.querySelector('.prev').addEventListener('click', () => {
    slideIndex = (slideIndex - 1 + totalSlides) % totalSlides;
    showSlide(slideIndex);
});

function loadProducts() {
    const products = [
        { id: 1, name: 'CPU Model 1', price: '$199' },
        { id: 2, name: 'CPU Model 2', price: '$249' },
        { id: 3, name: 'CPU Model 3', price: '$299' },
        { id: 4, name: 'CPU Model 4', price: '$349' },
        { id: 5, name: 'CPU Model 5', price: '$399' },
        { id: 6, name: 'CPU Model 6', price: '$449' },
        { id: 7, name: 'CPU Model 7', price: '$499' },
        { id: 8, name: 'CPU Model 8', price: '$549' },
        { id: 9, name: 'CPU Model 9', price: '$599' },
        { id: 10, name: 'CPU Model 10', price: '$649' }
    ];

    const productGrid = document.querySelector('.product-grid');
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.innerHTML = `<h3>${product.name}</h3><p>${product.price}</p>`;
        productGrid.appendChild(productDiv);
    });
}

function processPayment(method) {
    let paymentUrl;
    if (method === 'dana') {
        paymentUrl = 'https://link-to-dana-payment';  // Replace with actual Dana payment link
    } else if (method === 'ovo') {
        paymentUrl = 'https://link-to-ovo-payment';  // Replace with actual OVO payment link
    }
    
    if (paymentUrl) {
        window.location.href = paymentUrl;
        // Redirect to WhatsApp after payment
        setTimeout(() => {
            window.location.href = 'https://wa.me/yourwhatsappnumber';
        }, 5000); // Adjust delay as needed
    }
}

// Initialize the product grid and show the first slide
loadProducts();
showSlide(slideIndex);

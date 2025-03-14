[13:25, 05/03/2025] ♰: <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Turbo Tracks - Our Products</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>Our Products</h1>
        <nav>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="about.html">About Us</a></li>
                <li><a href="products.html">Products</a></li>
                <li><a href="events.html">Events</a></li>
                <li><a href="contact.html">Contact</a></li>
            </ul>
        </nav>
    </header>

    <section id="product-list">
        <h2>High-Performance RC Cars</h2>
        <div id="products-container">
            <!-- Products will be inserted here by JavaScript -->
        </div>
    </section>

    <script src="script.js"></script>

    <footer>
        <p>© 2025 Turbo Tracks | Kingston, Jamaica | (876) 555-1234 | support@turbotracks.com</p>
    </footer>
</body>
</html>
// Product Data with Local Images
const products = [
    {
        name: "Turbo Speedster 500",
        description: "A high-speed RC car designed for professional racing.",
        price: "$199",
        image: "images/product 2.jpg" // Now using a local image
    },
    {
        name: "Off-Road Beast X",
        description: "Conquer any terrain with this all-terrain monster.",
        price: "$249",
        image: "images/rc-car2.jpg"
    },
    {
        name: "Lightning Strike 700",
        description: "Super lightweight RC car with extreme acceleration.",
        price: "$299",
        image: "images/rc-car3.jpg"
    },
    {
        name: "Rock Crawler King",
        description: "Built for rocky terrain and climbing extreme surfaces.",
        price: "$279",
        image: "images/rc-car4.jpg"
    }
];

// Function to Display Products
function displayProducts() {
    const container = document.getElementById("products-container");

    products.forEach(product => {
        const productElement = document.createElement("div");
        productElement.classList.add("product");

        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p><strong>Price: ${product.price}</strong></p>
            <button>Add to Cart</button>
        `;

        container.appendChild(productElement);
    });
}

// Load Products when Page Loads
window.onload = displayProducts;
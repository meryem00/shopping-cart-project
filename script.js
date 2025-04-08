// Sample product data
const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 59.99,
      image: "Images/wirelessheadphone.jpg",
      description: "Noise-cancelling wireless headphones with long battery life."
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 99.99,
      image: "Images/smartwatch.jpg",
      description: "Stylish and easy to wear smart watch with health tracking features."
    },
    {
      id: 3,
      name: "Bluetooth Speaker",
      price: 39.99,
      image: "Images/bluetoothspeaker.jpg",
      description: "Portable and Stylish Bluetooth speaker with high-quality sound."
    }
  ];
  
  // Shopping cart state
  let cart = [];
  
  // DOM elements
  const productList = document.getElementById("productList");
  const cartItems = document.getElementById("cartItems");
  const cartTotal = document.getElementById("cartTotal");
  const cartCount = document.getElementById("cartCount");
  const cartToggle = document.getElementById("cartToggle");
  const cartPanel = document.getElementById("cart");
  const searchBar = document.getElementById("searchBar");
  
  // Render products on page
  function displayProducts(productArray) {
    productList.innerHTML = ""; // Clear previous products
    productArray.forEach(product => {
      const productCard = document.createElement("div");
      productCard.className = "product";
      productCard.innerHTML = `
        <img src="${product.image}" alt="${product.name}" />
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <strong>$${product.price.toFixed(2)}</strong>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
      `;
      productList.appendChild(productCard);
    });
  }
  
  // Add product to cart
  function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    updateCart();
  }
  
  // Remove item from cart
  function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
  }
  
  // Update cart display and total
  function updateCart() {
    cartItems.innerHTML = "";
    let total = 0;
  
    cart.forEach((item, index) => {
      const li = document.createElement("li");
      li.innerHTML = `
        ${item.name} - $${item.price.toFixed(2)}
        <button onclick="removeFromCart(${index})">Remove</button>
      `;
      cartItems.appendChild(li);
      total += item.price;
    });
  
    cartTotal.textContent = total.toFixed(2);
    cartCount.textContent = cart.length;
  }
  
  // Toggle cart visibility
  cartToggle.addEventListener("click", () => {
    cartPanel.classList.toggle("open");
  });
  
  // Handle live search
  searchBar.addEventListener("input", () => {
    const searchText = searchBar.value.toLowerCase();
    const filtered = products.filter(p => 
      p.name.toLowerCase().includes(searchText)
    );
    displayProducts(filtered);
  });
  
  // Handle checkout button
  document.getElementById("checkoutBtn").addEventListener("click", () => {
    if (cart.length === 0) {
      alert("Your cart is empty!");
    } else {
      alert("Checked out! will proceed to payment shortly!");
      cart = [];
      updateCart();
      cartPanel.classList.remove("open");
    }
  });
  
  // Initialize
  displayProducts(products);
  
# shopping-cart-project
# 🛒 Responsive E-Commerce App (Front-end only)

This is a simple responsive web-based e-commerce platform developed as part of the Azubi Productivity Program Software Development Baseline Assessment. It offers a user-friendly experience where customers can browse, view, and manage products in a shopping cart.

## 🌟 Core Features

- **Product Listing**: Displays a responsive grid of products including images, prices, and descriptions.
- **Shopping Cart**: Add/remove items, track quantities, and calculate total prices in real-time.
- **Product Detail View**: Click on any product to get more information and the option to add to cart.
- **Accessibility**: Fully navigable with a keyboard and screen reader-friendly using ARIA labels.
- **Responsive Design**: Works seamlessly across mobile phones, tablets, and desktops.

## 💡 Bonus Features

- **Search Bar**: Filter products by name or category.
- **Checkout Simulation**: Optional checkout form with basic validation for demonstration.

## 🛠 Technologies Used

- **HTML5**
- **CSS3**
- **JavaScript (Vanilla JS)**

## 🚀 Deployment Details

This application is hosted on **Azure Static Web Apps** and deployed via **GitHub integration**.

### Azure Deployment Instructions

1. Sign in to the [Azure Portal](https://portal.azure.com/).
2. Navigate to **Static Web Apps** and click **Create**.
3. On the **Deployment configuration** tab, select:
   - **Deployment authorization policy**: GitHub
4. Connect your GitHub repository and select the correct branch.
5. Use these values during setup:
   - **App location**: `/`
   - **API location**: (leave empty)
   - **Output location**: `/`
6. Click **Review + Create** → **Create**.

Azure will build and deploy your app automatically!

### 🔗 Live Site

[👉 View Deployed App](https://happy-mud-0fb00630f.6.azurestaticapps.net/)

## 🗂 Project Structure

```
ecommerce-app/
│
├── index.html
├── styles.css
├── script.js
└── images/
    ├── wirelessheadphone.jpg
    ├── smartwatch.jpg
    └── bluetoothspeaker.jpg
```

## 🧠 What I Learned
This project helped me put into practice:
- Responsive web design principles
- DOM manipulation with JavaScript
- Basic state management using arrays/objects
- Accessibility standards (ARIA, keyboard navigation)
- Clean project structure with separation of concerns (HTML/CSS/JS)
- Hosting with Azure

##   Future Improvements
- Backend integration for persistent cart and user authentication
- Advanced checkout workflow with form validation
- Payment gateway simulation


---

> 📌 Developed with dedication as part of the Azubi Africa Productivity Program.

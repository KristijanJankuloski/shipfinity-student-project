import headerContainer from "../../components/header.js";
import footerContainer from "../../components/footer.js";
import { GetById } from "../services/product_service.js";

document.getElementById("header").appendChild(headerContainer);
document.getElementById("footer").appendChild(footerContainer);

const productDetails = document.getElementById("product-details");

// Get product id from URL
const params = new URLSearchParams(window.location.search);
const id = params.get("id");

// Fetch product details
let Product = GetById(parseInt(id));
if (Product) {
  productDetails.innerHTML = `
          <h2>${Product.name}</h2>
          <img src="${Product.imageUrl}" alt="${Product.name}">
          <p>${Product.description}</p>
          <p>$${Product.price}</p>
      `;
} else {
  productDetails.innerHTML = "<p>Product not found.</p>";
}

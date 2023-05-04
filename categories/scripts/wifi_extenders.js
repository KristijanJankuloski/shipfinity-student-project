import headerContainer from '../../components/header.js';
import footerContainer from '../../components/footer.js'; import productCard from '../../components/productCard.js';

document.getElementById("header").appendChild(headerContainer);
document.getElementById("footer").appendChild(footerContainer);

const productsContainer = document.getElementById("products-container");

function getProducts() {
  return [
    {
      "id": 4,
      "name": "Smart WiFi Extender",
      "description": "Extend your WiFi coverage to every corner of your home with this smart WiFi extender.",
      "price": 49.99,
      "imageUrl": "https://example.com/images/smart-wifi-extender.jpg",
      "category": "wifi"
    },
    {
      "id": 8,
      "name": "Smart Router",
      "description": "Control your home network with this smart router, which features parental controls and easy setup.",
      "price": 99.99,
      "imageUrl": "https://example.com/images/smart-router.jpg",
      "category": "wifi"
    },
    {
      "id": 13,
      "name": "Smart Mesh WiFi System",
      "description": "Eliminate dead zones and improve your WiFi coverage with this smart mesh WiFi system.",
      "price": 249.99,
      "imageUrl": "https://example.com/images/smart-mesh-wifi-system.jpg",
      "category": "wifi"
    },
    {
      "id": 18,
      "name": "Smart Network Switch",
      "description": "This smart network switch allows you to prioritize traffic and manage your network from anywhere.",
      "price": 149.99,
      "imageUrl": "https://example.com/images/smart-network-switch.jpg",
      "category": "wifi"
    }
  ]
};

getProducts().forEach(product => {
  console.log(product);
  productsContainer.innerHTML += '';
  const newProduct = productCard(product);
  productsContainer.appendChild(newProduct);
});
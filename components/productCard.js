import { addToCart } from "../helpers/session_cart.js";

function productCard(Product) {
  function showDetails(Id) {
    window.location.href = `/product-details.html?id=${Id}`;
  }

  function Add() {
    addToCart(Product);
  }

  const cardComponent = document.createElement("div");
  cardComponent.innerHTML = `
    <div class="card" style="width: 18rem; margin-left: 20px;">
      <img src="${Product.imageUrl}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${Product.name}</h5>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Category : ${Product.category}</li>
        <li class="list-group-item">Price : ${Product.price}$</li>
      </ul>
      <div class="card-body">
        <a href="/product-details.html?id=${Product.id}" class="btn btn-primary btnDetails">Details</a>
        <a href="#" class="btn btn-primary btnAddToCard" onclick="Add()">Add To Cart</a>
      </div>
    </div>
  `;

  return cardComponent;
}

export default productCard;

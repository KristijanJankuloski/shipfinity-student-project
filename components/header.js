import { basePath } from '../helpers/constants.js';

const headerContainer = document.createElement('div');
headerContainer.className = "p-3 bg-dark text-white";
headerContainer.innerHTML = `
<div class="container">
    <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a href="${basePath}/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none pe-3">
            <h2>Shipfinity</h2>
        </a>

        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li><a href="${basePath}/" class="nav-link px-2 text-white">Home</a></li>
            <li><a href="${basePath}/sale.html" class="nav-link px-2 text-white">Sale</a></li>
            <li><a href="${basePath}/categories/categories.html" class="nav-link px-2 text-white">Categories</a></li>
            <li><a href="${basePath}/contact.html" class="nav-link px-2 text-white">Contact</a></li>
            <li><a href="${basePath}/about.html" class="nav-link px-2 text-white">About</a></li>
        </ul>

        <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3 d-flex" action="${basePath}/search.html" method="get">
            <input type="search" class="form-control form-control-dark me-2" placeholder="Search..." aria-label="Search" name="search">
            <input type="submit" class="btn btn-primary" value="Search">
        </form>
    </div>
</div>`;

export default headerContainer;
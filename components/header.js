import { basePath } from '../helpers/constants.js';

const headerContainer = document.createElement('nav');
headerContainer.className = "navbar navbar-expand-lg navbar-dark bg-dark";
headerContainer.innerHTML = `
    <div class="container-fluid">
      <a class="navbar-brand" href="${basePath}/"><h3>Shipfinity</h3></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample05" aria-controls="navbarsExample05" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarsExample05">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="${basePath}/">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="${basePath}/Sale.html">Sale</a>
          </li>
          <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="dropdown05" data-bs-toggle="dropdown" aria-expanded="false">Categories</a>
          <ul class="dropdown-menu" aria-labelledby="dropdown05">
          <li><a class="dropdown-item" href="${basePath}/categories/smart_lights.html">Smart Lights</a></li>
          <li><a class="dropdown-item" href="${basePath}/categories/smart_plugs.html">Smart Plugs</a></li>
          <li><a class="dropdown-item" href="${basePath}/categories/smart_speakers.html">Smart Speakers</a></li>
          <li><a class="dropdown-item" href="${basePath}/categories/smart_thermostats.html">Smart Thermostats</a></li>
          <li><a class="dropdown-item" href="${basePath}/categories/wifi_extenders.html">WiFi Extenders</a></li>
          </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="${basePath}/Contact.html">Contact</a>
          </li>
        </ul>
        <form class="d-flex" action="${basePath}/search.html" method="get">
          <input class="form-control me-2" type="text" placeholder="Search" aria-label="Search" name="search">
          <input class="btn btn-primary" type="submit" value="Search">
        </form>
      </div>
    </div>`;

export default headerContainer;
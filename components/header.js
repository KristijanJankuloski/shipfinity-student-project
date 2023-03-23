import { basePath } from '../helpers/constants.js';

const headerContainer = document.createElement('div');
headerContainer.innerHTML = 
`<h3>Header</h3>
<ul>
    <li><a href="${basePath}/">Home</a></li>
    <li><a href="${basePath}/sale.html">Sale</a></li>
    <li><a href="${basePath}/categories/">Categories</a></li>
    <li><a href="${basePath}/contact.html">Contact</a></li>
</ul>`;

export default headerContainer;
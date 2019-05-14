
import './product.scss';

export default class Product extends HTMLElement {
  connectedCallback() {
    let content = '<div class="product-card">';
    content += `<div class="name">${this.getAttribute('name')}</div>`;
    content += `<star-bar stars="5" total="6"></star-bar>`;
    content += '</div>';
    this.innerHTML = content;
  }
}

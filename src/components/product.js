
import './product.scss';

export default class Product extends HTMLElement {
  get stars() {
    return this.getAttribute('stars');
  }
  get name() {
    return this.getAttribute('name');
  }
  get details() {
    return this.getAttribute('details');
  }
  get imgUrl() {
    return this.getAttribute('imgUrl');
  }
  get price() {
    return this.getAttribute('price');
  }

  connectedCallback() {
    let bottom = '<div class="bottom">';
    bottom += `<star-bar stars="${this.stars}" total="6"></star-bar>`;
    bottom += `<p class="price">$${this.price}</p>`;
    bottom += '</div>';

    let content = '<div class="product-card">';
    content += `<img class="product-image" src=${this.imgUrl}/>`;
    content += `<p class="name">${this.name}</p>`;
    content += `<p class="details">${this.details}</p>`;
    content += bottom;
    content += '</div>';
    this.innerHTML = content;
  }
}

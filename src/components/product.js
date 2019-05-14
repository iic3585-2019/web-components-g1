
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

  connectedCallback() {
    let content = '<div class="product-card">';
    content += `<img class="product-image" src=${this.imgUrl}/>`;
    content += `<div class="name">${this.name}</div>`;
    content += `<div class="details">${this.details}</div>`;
    content += `<star-bar stars="${this.stars}" total="6"></star-bar>`;
    content += '</div>';
    this.innerHTML = content;
  }
}

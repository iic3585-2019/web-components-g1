
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
    content += `<p class="details pointer">Ver detalles</p>`;
    content += bottom;
    content += '</div>';
    this.innerHTML = content;
    this.querySelector('.details').addEventListener('click', () => {
      const template = document.querySelector('#modal');
      const clone = document.importNode(template.content, true);
      clone.querySelectorAll('.product-name')[0].innerHTML = this.name;
      clone.querySelectorAll('.details')[0].innerHTML = this.details;
      clone.querySelectorAll('.image')[0].innerHTML =
          `<img class="product-image" src=${this.imgUrl}/>`;
      clone.querySelectorAll('.price')[0].innerHTML =
          `<p class="price">$${this.price}</p>`;
      clone.querySelectorAll('.modal-background')[0].addEventListener('click',
          function() {
            this.remove();
          });
      clone.querySelectorAll('.modal-content')[0].addEventListener('click',
          function(e) {
            e.stopPropagation();
          });
      document.querySelector('body').appendChild(clone);
    });
  }
}

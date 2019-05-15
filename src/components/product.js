
import './product.scss';

export default class Product extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});
  }

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
    const style = `<style>
    .product-card {
      display: flex;
      flex-direction: column;
      width: 270px;
      height: 350px;
      border-radius: 2px;
      box-shadow: 0px 0px 3px 1px rgba(116, 115, 116, 0.34);
      padding: 5px;
      margin: 10px;
    }
    .product-image {
      max-height: 150px;
    }
    .name {
      font-weight: bold;
    } 
    .details {
      font-size: 14px;
      color: #616161;
    }
    .bottom {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      margin-top: auto;
    }
    </style>`;
    let bottom = '<div class="bottom">';
    bottom += `<star-bar stars="${this.stars}" total="6"></star-bar>`;
    bottom += `<p class="price">$${this.price}</p>`;
    bottom += '</div>';

    let content = style + '<div class="product-card">';
    content += `<img class="product-image" src=${this.imgUrl}/>`;
    content += `<p class="name">${this.name}</p>`;
    content += `<p class="details">${this.details}</p>`;
    content += bottom;
    content += '</div>';
    this.shadowRoot.innerHTML = content;
    this.innerHTML = '';
  }
}

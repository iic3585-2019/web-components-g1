import allProducts from '../data/products';
import {mapProps} from '../util';

const mapProductsToHTML = (products) => products.map((product) => (
  `<product-card ${mapProps(product)}"></product-card>`
)).join('');


export default class ProductsContainer extends HTMLElement {
  constructor() {
    super();
    this.products = allProducts;
    this.filterProductsByName = this.filterProductsByName.bind(this);
  }

  filterProductsByName(text) {
    const filtered = allProducts.filter(
        (product) => product.name.toLowerCase().includes(text.toLowerCase())
    );
    const containerHTML = this.firstChild.childNodes[1];
    containerHTML.innerHTML = mapProductsToHTML(filtered);
  }

  connectedCallback() {
    let content = '<div>';
    content += '<input type="text" id="product-input" />';
    content += '<div id="container">';
    content += mapProductsToHTML(this.products);
    content += '</div>';
    content += '</div>';
    this.innerHTML = content;

    const inputElement = this.firstChild.childNodes[0];
    inputElement.addEventListener('keyup', (event) => {
      const inputValue = event.target.value;
      this.filterProductsByName(inputValue);
    });
  }
}

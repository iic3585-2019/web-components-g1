import products from '../data/products';
import {mapProps} from '../util';
import './products-container.scss';


const mapProductsToHTML = (products) => products.map((product) => (
  `<product-card ${mapProps(product)}"></product-card>`
)).join('');


export default class ProductsContainer extends HTMLElement {
  constructor() {
    super();
    this.filterProductsByName = this.filterProductsByName.bind(this);
  }

  filterProductsByName(text) {
    const filtered = products.filter(
        (product) => product.name.toLowerCase().includes(text.toLowerCase())
    );
    const containerHTML = this.firstChild.childNodes[1];
    containerHTML.innerHTML = mapProductsToHTML(filtered);
  }

  connectedCallback() {
    let content = '<div>';
    content += '<input type="text" placeholder="Buscar" id="product-input" />';
    content += '<div id="container">';
    content += mapProductsToHTML(products);
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

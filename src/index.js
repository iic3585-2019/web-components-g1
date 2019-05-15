import StarBar from './components/starBar';
import Product from './components/product';
import products from './data/products';
import {mapProps} from './util';
import './styles/index.scss';

customElements.define('star-bar', StarBar);
customElements.define('product-card', Product);

window.onload = () => {
  const container = document.getElementById('products-container');
  container.innerHTML = products.map((product) => (
    `<product-card ${mapProps(product)}"></product-card>`
  )).join('');
};

if (module.hot) {
  module.hot.accept();
}

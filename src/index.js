import StarBar from './components/starBar';
import Product from './components/product';
import MarkDown from './components/markdown';
import ProductsContainer from './components/products-container';
import './styles/index.scss';

customElements.define('star-bar', StarBar);
customElements.define('product-card', Product);
customElements.define('mark-down', MarkDown);
customElements.define('products-container', ProductsContainer);

// window.onload = () => {
//   const container = document.getElementById('main-container');
//   container.setAttribute('products', products);
//   // container.innerHTML = products.map((product) => (
//   //   `<product-card ${mapProps(product)}"></product-card>`
//   // )).join('');
// };

if (module.hot) {
  module.hot.accept();
}

import StarBar from './components/starBar';
import './styles/index.scss';

customElements.define('star-bar', StarBar);

if (module.hot) {
  module.hot.accept();
}

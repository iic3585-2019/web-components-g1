import star from '../imgs/star.png';
import starGrey from '../imgs/star-grey.png';

import './starBar.scss';

export default class StarBar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});
  }

  get stars() {
    return +this.getAttribute('stars');
  }

  set stars(val) {
    this.setAttribute('stars', +val);
    this.shadowRoot.childNodes[1].childNodes.forEach((child) => {
      child.setAttribute('src',
        +child.getAttribute('value') < this.stars ? `${star}` : `${starGrey}`);
      child.className = +child.getAttribute('value') < this.stars
                        ? 'star' : 'star-grey';
    });
  }

  get total() {
    return +this.getAttribute('total');
  }

  set total(val) {
    this.setAttribute('total', +val);
  }

  connectedCallback() {
    const style = `<style> .star-grey {
        width: 20px;
      }
      .star {
        width: 20px;
      } </style>`
    let content = style + '<div>';
    for (let i = 0; i < this.stars; i++) {
      content += `<img src="${star}" value="${i}" class="star"/>`;
    }
    for (let i = 0; i < this.total - this.stars; i++) {
      content +=
          `<img src="${starGrey}" value="${this.stars+i}" class="star-grey"/>`;
    }
    content += '</div>';
    this.shadowRoot.innerHTML = content;
    this.innerHTML = '';

    this.shadowRoot.childNodes[1].childNodes.forEach((child) => {
      child.addEventListener('click', (event) => {
        const clicked = event.target;
        this.stars = +clicked.getAttribute('value')+1;
      });
    });
  }
}

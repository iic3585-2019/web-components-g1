import star from "../imgs/star.png";
import starGrey from "../imgs/star-grey.png";

import "./starBar.scss";

export default class StarBar extends HTMLElement {
  get stars() {
    return this.getAttribute('stars');
  }

  set stars(val) {
    this.setAttribute('stars', val);
  }
  get total() {
    return this.getAttribute('total');
  }

  set total(val) {
    this.setAttribute('total', val);
  }

  connectedCallback() {
    let content = '<div>';
    for (let i = 0; i < this.stars; i++) {
      content += `<img src="${star}" class="star"/>`;
    }
    for (let i = 0; i < this.total - this.stars; i++) {
      content += `<img src="${starGrey}" class="star-grey"/>`;
    }
    content += '<div/>';
    this.innerHTML = content;
  }
}

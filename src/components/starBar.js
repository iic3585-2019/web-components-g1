import star from "../imgs/star.png";
import starGrey from "../imgs/star-grey.png";

import "./starBar.scss";

export default class StarBar extends HTMLElement {
  get stars() {
    return +this.getAttribute('stars');
  }

  set stars(val) {
    this.setAttribute('stars', +val);
    this.firstChild.childNodes.forEach(child => {
      child.setAttribute('src', +child.getAttribute('value') < this.stars ? `${star}` : `${starGrey}`);
      child.className = +child.getAttribute('value') < this.stars ? "star" : "star-grey";
    });
  }

  get total() {
    return +this.getAttribute('total');
  }

  set total(val) {
    this.setAttribute('total', +val);
  }

  connectedCallback() {
    let content = '<div>';
    for (let i = 0; i < this.stars; i++) {
      content += `<img src="${star}" value="${i}" class="star"/>`;
    }
    for (let i = 0; i < this.total - this.stars; i++) {
      content += `<img src="${starGrey}" value="${this.stars+i}" class="star-grey"/>`;
    }
    content += '<div/>';
    this.innerHTML = content;
    
    this.firstChild.childNodes.forEach(child => {
      child.addEventListener('click', event => {
        const clicked = event.target;
        this.stars = +clicked.getAttribute("value")+1;
      });
    });
  }
}

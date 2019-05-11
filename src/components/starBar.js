import star from "../imgs/star.png";
import starGrey from "../imgs/star-grey.png";

import "./starBar.scss";

export default class StarBar extends HTMLElement {
  connectedCallback() {
    let stars = 4;
    let content = '<div>';
    for (let i = 0; i < 4; i++) {
      content += `<img src="${star}" class="star"/>`;
    }
    for (let i = 0; i < 5 - stars; i++) {
      content += `<img src="${starGrey}" class="star-grey"/>`;
    }
    content += '<div/>';
    this.innerHTML = content;
  }
}

import showdown from 'showdown';


const decodeHTML = function(html) {
  const txt = document.createElement('textarea');
  txt.innerHTML = html;
  return txt.value;
};

const converter = new showdown.Converter();
converter.setFlavor('github');

export default class MarkDown extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});
  }

  connectedCallback() {
    setTimeout(() => {
      this.shadowRoot.innerHTML = '<div class="markdown-body">' +
        '<link rel="stylesheet" href="github-markdown.css">' +
        converter.makeHtml(decodeHTML(this.innerHTML)) + '</div>';
      this.innerHTML = '';
      this.classList.add('markdown-body');
    });
  }
}

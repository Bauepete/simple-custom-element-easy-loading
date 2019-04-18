import { loadTemplate } from "./LoadTemplate.js"

window.onload = function() {
  window.customElements.define("fancy-paragraph", FancyParagraph)
}

class FancyParagraph extends HTMLElement {
  constructor() {
    super(); // this ; is necessary to avoid a strange syntax error
    (async () => {
      const template = await loadTemplate("./fancy-paragraph.html")
      const shadowRoot = this.attachShadow({mode: "open"})
      shadowRoot.appendChild(template.content.cloneNode(true))
    })()
  }
}

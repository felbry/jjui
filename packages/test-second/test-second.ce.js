import { html, css, LitElement } from 'lit'

export class LazyTestSecond extends LitElement {
  static styles = css`
    p {
      color: blue;
    }
  `

  static properties = {
    age: { type: String },
  }

  constructor() {
    super()
    this.age = '19'
  }

  render() {
    return html`<p>Age, ${this.age}!</p>`
  }
}

customElements.define('lazy-test-second', LazyTestSecond)

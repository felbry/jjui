import { html, css, LitElement, adoptStyles, unsafeCSS } from 'lit'
import { property, state } from 'lit/decorators.js'

const BaseMixin = (superClass) =>
  class extends superClass {
    /**
     * 额外样式
     * @type {CSSStyleSheet|null}
     */
    @property({ attribute: false })
    accessor sheet = null

    @state()
    accessor _isTouchDevice = true

    static styles = css`
      :host {
        display: inline-flex; /* 自定义元素默认是inline，统一成inline-flex */
      }
    `

    _emit(name, data, conf = {}) {
      this.dispatchEvent(
        new CustomEvent(name, {
          detail: data,
          composed: true, // 是否可以穿过Shadow DOM和常规DOM之间的边界进行冒泡
          bubbles: true, // 是否冒泡
        })
      )
    }

    connectedCallback() {
      super.connectedCallback()
      this._isTouchDevice = 'ontouchstart' in document.documentElement
    }

    firstUpdated() {
      if (this.sheet) {
        adoptStyles(this.renderRoot, [...this.renderRoot.adoptedStyleSheets, this.sheet])
      }
    }
  }

export const Base = BaseMixin(LitElement)

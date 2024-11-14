import { html, css, LitElement, adoptStyles, unsafeCSS } from 'lit'
import { property, state } from 'lit/decorators.js'

const BaseMixin = (superClass) =>
  class extends superClass {
    /**
     * 额外样式
     * @type {String[]}
     */
    @property({ attribute: false })
    accessor injectStyles = []

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
          composed: false, // 是否可以穿过Shadow DOM和常规DOM之间的边界进行冒泡，false即最多传递到标签根（可以在标签上监听事件），而不是向更上层传递，更符合组件特有事件的特性。
        })
      )
    }

    connectedCallback() {
      super.connectedCallback()
      this._isTouchDevice = 'ontouchstart' in document.documentElement
    }

    firstUpdated() {
      if (this.injectStyles.length) {
        adoptStyles(this.renderRoot, [
          ...this.renderRoot.adoptedStyleSheets,
          ...injectStyles.map((style) => unsafeCSS(style)),
        ])
      }
    }
  }

export const Base = BaseMixin(LitElement)

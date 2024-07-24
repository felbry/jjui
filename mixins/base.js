import { html, css, LitElement } from 'lit'
import { property } from 'lit/decorators.js'

const BaseMixin = (superClass) =>
  class extends superClass {
    /**
     * 主题 库内置了若干主题，通过传递对应的字符串选择不同主题；也可以传递Object自行定制主题（不推荐）
     * @type {Object|String}
     */
    @property({ attribute: false })
    accessor theme = 'common'

    static styles = css`
      :host {
        display: block;
        width: 100%;
        height: 100%;
      }
    `
  }

export const Base = BaseMixin(LitElement)

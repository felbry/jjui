import { Base } from '../../mixins/base'
import { html, css } from 'lit'
import { customElement, property } from 'lit/decorators.js'

@customElement('jj-input')
export class Input extends Base {
  /**
   * 初始值
   */
  @property({ attribute: false })
  accessor value = ''

  /**
   * 类型
   * @type {'text'|'password'}
   */
  @property({ attribute: false })
  accessor type = 'text'

  /**
   * 占位符
   */
  @property({ attribute: false })
  accessor placeholder = '请输入'

  /**
   * 是否禁用
   */
  @property({ type: Boolean, attribute: false })
  accessor isDisabled = false

  /**
   * 是否只读
   */
  @property({ type: Boolean, attribute: false })
  accessor isReadonly = false

  static styles = [
    Base.styles,
    css`
      @unocss-placeholder;
    `,
    css`
      :host {
        background-color: red;
      }
    `,
  ]

  render() {
    return html`<input
      class="p-0 text-sm border-none bg-inherit"
      type=${this.type}
      placeholder=${this.placeholder}
      .value=${this.value}
      ?disabled=${this.isDisabled}
      ?readonly=${this.isReadonly}
      @input="${this._onInput}"
      @change="${this._onChange}"
    />`
  }
}

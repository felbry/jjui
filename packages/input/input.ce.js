import { Base } from '../../mixins/base'
import { html, css, nothing } from 'lit'
import { customElement, property, state, queryAssignedElements } from 'lit/decorators.js'
import XIcon from '@tabler/icons/outline/x.svg?raw'
import EyeIcon from '@tabler/icons/outline/eye.svg?raw'
import EyeOffIcon from '@tabler/icons/outline/eye-off.svg?raw'
import { SlotsController } from '../../controllers/slots'

/**
 * @fires on-input - [value]
 * @fires on-change - [value]
 *
 * @slot prefix
 * @slot suffix
 * @slot prepend
 * @slot append
 */
@customElement('jj-input')
export class JJInput extends Base {
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

  /**
   * 是否可一键清除，需搭配on-input和on-change使用
   */
  @property({ type: Boolean, attribute: false })
  accessor isClearable = true

  /**
   * 是否聚焦中
   */
  @state()
  accessor _isFocusing = false

  /**
   * 当type为password时，是否展示明文
   */
  @state()
  accessor _isShowTextWhenPwdType = false

  _slotsController = new SlotsController(this)

  static styles = [
    Base.styles,
    css`
      :host {
        width: 100%;
      }
      /* 去除小眼睛 */
      .input[type='password']::-ms-reveal {
        display: none;
      }
      @unocss-placeholder;
    `,
  ]

  render() {
    return html`<div
      class="wrapper flex-1 flex text-(sm on-surface) ${this._isFocusing
        ? 'wrapper--focusing'
        : ''} ${this.isDisabled ? 'wrapper--disabled' : ''}"
    >
      ${this._slotsController.value.includes('prepend')
        ? html`<div
            class="prepend px-3 flex items-center bg-surface-container border-r-(px solid outline-variant) rounded-l-sm ${this
              ._isFocusing
              ? '!border-r-none'
              : ''}"
          >
            <slot name="prepend"></slot>
          </div>`
        : nothing}
      <div
        class="group box-border flex-1 flex items-center py-1 rounded-sm hover:bg-on-surface/8 ${this
          ._isFocusing
          ? 'bg-on-surface/10 border-(px solid primary)'
          : 'bg-surface-container border-(px solid transparent)'} ${this.isDisabled
          ? 'cursor-not-allowed !bg-on-surface/12'
          : ''} ${this._slotsController.value.includes('prepend')
          ? '!rounded-l-none'
          : ''} ${this._slotsController.value.includes('append') ? '!rounded-r-none' : ''}"
      >
        ${this._slotsController.value.includes('prefix')
          ? html`<div class="ml-2">
              <slot name="prefix"></slot>
            </div>`
          : nothing}

        <input
          class="input px-2 py-0 text-sm border-none bg-transparent flex-1 outline-none ${this
            .isDisabled
            ? 'cursor-not-allowed text-on-surface/38'
            : 'text-on-surface'}"
          type=${this.type === 'password'
            ? this._isShowTextWhenPwdType
              ? 'text'
              : 'password'
            : this.type}
          placeholder=${this.placeholder}
          .value=${this.value}
          ?disabled=${this.isDisabled}
          ?readonly=${this.isReadonly}
          @focus=${() => (this._isFocusing = true)}
          @blur=${() => (this._isFocusing = false)}
          @input=${(evt) => this._emit('on-input', [evt.target.value])}
          @change=${(evt) => this._emit('on-change', [evt.target.value])}
        />
        <!-- 清除icon -->
        ${this.isDisabled || this.isReadonly || !this.isClearable || !this.value
          ? nothing
          : html`<jj-icon
              class="clear-btn invisible mr-1 group-hover:visible"
              .svg=${XIcon}
              .isClickable=${true}
              @click=${() => this._emit('on-change', [''])}
            ></jj-icon>`}
        <!-- 密码眼睛icon -->
        ${this.type === 'password'
          ? html`<jj-icon
              class="eye-btn mr-1"
              .svg=${this._isShowTextWhenPwdType ? EyeIcon : EyeOffIcon}
              .isClickable=${true}
              @click=${() => (this._isShowTextWhenPwdType = !this._isShowTextWhenPwdType)}
            ></jj-icon>`
          : nothing}
        ${this._slotsController.value.includes('suffix')
          ? html`<div class="suffix mr-2">
              <slot name="suffix"></slot>
            </div>`
          : nothing}
      </div>
      ${this._slotsController.value.includes('append')
        ? html`<div
            class="append px-3 flex items-center bg-surface-container border-l-(px solid outline-variant) rounded-r-sm ${this
              ._isFocusing
              ? '!border-l-none'
              : ''}"
          >
            <slot name="append"></slot>
          </div>`
        : nothing}
    </div>`
  }
}

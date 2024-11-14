import { Base } from '../../mixins/base'
import { html, css, nothing } from 'lit'
import { customElement, property, state, query } from 'lit/decorators.js'
import XIcon from '@tabler/icons/outline/x.svg?raw'
import EyeIcon from '@tabler/icons/outline/eye.svg?raw'
import EyeOffIcon from '@tabler/icons/outline/eye-off.svg?raw'
import { SlotsController } from '../../controllers/slots'

const PART_ENUM = {
  input: 'input',
  inputPrepend: 'input__prepend',
  inputAppend: 'input__append',
  inputBody: 'input__body',
  inputBodyPrefix: 'input__body__prefix',
  inputBodySuffix: 'input__body__suffix',
  inputBodyCore: 'input__body__core',
  inputBodyClear: 'input__body__clear',
  inputBodyCount: 'input__body__count',
  inputBodyEye: 'input__body__eye',
}

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
   * 是否显示字数统计，与maxlength结合使用
   */
  @property({ type: Boolean, attribute: false })
  accessor isShowWordLimit = false

  /**
   * 最大长度
   * @type {number|null}
   */
  @property({ attribute: false })
  accessor maxlength = null

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

  @query('input')
  accessor _inputRef

  focus() {
    this._inputRef.focus()
  }

  static styles = [
    Base.styles,
    css`
      :host {
        width: 100%;
      }
      /* 去除小眼睛 */
      .input__body__core[type='password']::-ms-reveal {
        display: none;
      }
      @unocss-placeholder;
    `,
  ]

  render() {
    return html`<div
      class="${PART_ENUM.input} h-7.5 flex-1 flex text-(sm on-surface) ${this._isFocusing
        ? `${PART_ENUM.input}--focusing`
        : ''} ${this.isDisabled ? `${PART_ENUM.input}--disabled` : ''}"
    >
      ${this._slotsController.value.includes('prepend')
        ? html`<div
            class="${PART_ENUM.inputPrepend} px-3 flex items-center bg-surface-container border-r-(px solid outline-variant) rounded-l-sm ${this
              ._isFocusing
              ? '!border-r-none'
              : ''}"
          >
            <slot name="prepend"></slot>
          </div>`
        : nothing}
      <div
        class="${PART_ENUM.inputBody} group h-full box-border flex-1 flex items-center rounded-sm hover:bg-on-surface/8 ${this
          ._isFocusing
          ? 'bg-on-surface/10'
          : 'bg-surface-container'} ${this.isDisabled
          ? 'cursor-not-allowed !bg-on-surface/12'
          : ''} ${this._slotsController.value.includes('prepend')
          ? '!rounded-l-none'
          : ''} ${this._slotsController.value.includes('append') ? '!rounded-r-none' : ''}"
      >
        ${this._slotsController.value.includes('prefix')
          ? html`<div class="input__body__prefix ml-2">
              <slot name="prefix"></slot>
            </div>`
          : nothing}
        <input
          class="${PART_ENUM.inputBodyCore} px-2 py-0 text-sm border-none bg-transparent flex-1 outline-none ${this
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
          maxlength=${this.maxlength}
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
              class="${PART_ENUM.inputBodyClear} invisible mr-1 group-hover:visible"
              .svg=${XIcon}
              .isClickable=${true}
              @click=${() => this._emit('on-change', [''])}
            ></jj-icon>`}
        <!-- 字数统计 -->
        ${this.maxlength && this.isShowWordLimit
          ? html`<span class="${PART_ENUM.inputBodyCount} text-xs text-on-surface-variant mr-1">
              ${this.value.length}/${this.maxlength}
            </span>`
          : nothing}
        <!-- 密码眼睛icon -->
        ${this.type === 'password'
          ? html`<jj-icon
              class="${PART_ENUM.inputBodyEye} mr-1"
              .svg=${this._isShowTextWhenPwdType ? EyeIcon : EyeOffIcon}
              .isClickable=${true}
              @click=${() => (this._isShowTextWhenPwdType = !this._isShowTextWhenPwdType)}
            ></jj-icon>`
          : nothing}
        <!-- suffix slot -->
        ${this._slotsController.value.includes('suffix')
          ? html`<div class="${PART_ENUM.inputBodySuffix} h-full flex items-center mr-2">
              <slot name="suffix"></slot>
            </div>`
          : nothing}
      </div>
      <!-- append slot -->
      ${this._slotsController.value.includes('append')
        ? html`<div
            class="${PART_ENUM.inputAppend} px-3 flex items-center bg-surface-container border-l-(px solid outline-variant) rounded-r-sm ${this
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

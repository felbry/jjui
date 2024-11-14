import { Base } from '../../mixins/base'
import { html, css, nothing } from 'lit'
import { customElement, property, state, query } from 'lit/decorators.js'
import { SlotsController } from '../../controllers/slots'
import ChevronUpIcon from '@tabler/icons/outline/chevron-up.svg?raw'
import ChevronDownIcon from '@tabler/icons/outline/chevron-down.svg?raw'
export const PART_MAP = {
  'input-number': 'input-number',
  body: 'input-number__body',
  suffix: 'input-number__suffix',
  'suffix-top': 'input-number__suffix__top',
  'suffix-bottom': 'input-number__suffix__bottom',
}
/**
 * @fires on-input - [value]
 * @fires on-change - [value]
 *
 * @slot prefix - 123
 * @slot suffix - 456
 * @slot prepend
 * @slot append
 */
@customElement('jj-input-number')
export class JJInputNumber extends Base {
  /**
   * 初始值
   */
  @property({ attribute: false })
  accessor value = ''

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

  @query('jj-input')
  accessor _inputRef

  _slotsController = new SlotsController(this)

  _onInput(evt) {
    console.log('evt', evt)
  }

  static styles = [
    Base.styles,
    css`
      :host {
        width: 100%;
      }
      @unocss-placeholder;
    `,
  ]

  render() {
    return html`<div
      part=${PART_MAP['input-number']}
      class="flex-1"
    >
      <jj-input
        part=${PART_MAP['body']}
        exportparts=${Object.values(INPUT_PART_MAP).join(',')}
        @on-input=${this._onInput}
      >
        <div
          part=${PART_MAP.suffix}
          slot="suffix"
          class="box-border w-4.5 h-full py-1 flex flex-col"
        >
          <div
            part=${PART_MAP['suffix-top']}
            class="flex-1 flex justify-center items-center overflow-hidden bg-surface text-xs cursor-pointer hover:bg-on-surface/8"
            @click=${() => this._inputRef.focus()}
          >
            <jj-icon .svg=${ChevronUpIcon}></jj-icon>
          </div>
          <div
            part=${PART_MAP['suffix-bottom']}
            class="flex-1 flex justify-center items-center overflow-hidden bg-surface text-xs cursor-pointer hover:bg-on-surface/8"
          >
            <jj-icon .svg=${ChevronDownIcon}></jj-icon>
          </div>
        </div>
      </jj-input>
    </div>`
  }
}

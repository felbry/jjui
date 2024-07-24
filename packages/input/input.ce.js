import { Base } from '../../mixins/base'
import { html, css } from 'lit'
import { customElement, property } from 'lit/decorators.js'
@customElement('jj-input')
export class Input extends Base {
  /**
   * 是否默认x轴和y轴的类型（默认x轴type为category，y轴type为value）。当设置该值为false时柱状图将横向展示。
   * @type {Boolean}
   */
  @property({ attribute: false })
  accessor isDefaultAxisType = true

  /**
   * 区域缩放相关配置。当dataZoom为true时，启用区域缩放功能。
   * @type {DataZoom|null}
   */
  @property({ attribute: false })
  accessor dataZoom = null

  static styles = css`
    @unocss-placeholder;
  `

  render() {
    return html`<p class="font-600 text-black flex px-1 py-2">Hello, ${this.name}!</p>`
  }
}

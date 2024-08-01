import { css, html, nothing } from 'lit'
import { Base } from '../../mixins/base'
import { customElement, property } from 'lit/decorators.js'
import { unsafeSVG } from 'lit/directives/unsafe-svg.js'

@customElement('jj-icon')
export class JJIcon extends Base {
  @property({ attribute: false })
  accessor svg = ''

  @property({ type: Number, attribute: false })
  accessor rotate = 0

  @property({ attribute: false })
  accessor isClickable = false

  static styles = [
    Base.styles,
    css`
      @unocss-placeholder;
    `,
  ]

  render() {
    return html`
      ${this.rotate
        ? html`
            <style>
              .wrapper {
                /* 动态值无法用原子css表示 */
                transform: rotate(${this.rotate}deg);
              }
            </style>
          `
        : nothing}
      <div
        class="wrapper leading-0 ${this.isClickable
          ? "hover:(relative cursor-pointer before:(absolute top-50% left-50% w-1.5em h-1.5em content-[''] -translate-x-1/2 -translate-y-1/2 bg-on-surface/8 rounded-full))"
          : ''}"
      >
        ${unsafeSVG(
          this.svg.replace(/width=".*?"/, 'width="1em"').replace(/height=".*?"/, 'height="1em"')
        )}
      </div>
    `
  }
}

import { html, css, unsafeCSS, LitElement } from 'lit'
import { property, query } from 'lit/decorators.js'
import { styleMap } from 'lit/directives/style-map.js'
import * as echarts from 'echarts'
import themeCommon from '../themes/common.js'

const BaseMixin = (superClass) =>
  class extends superClass {
    /**
     * 主题
     * @type {Object|String}
     */
    @property({ attribute: false })
    accessor theme = 'common'

    /**
     * 图表数据
     * @type {Array}
     */
    @property({ attribute: false })
    accessor source = []

    @query('#main')
    accessor _mainRef

    _mainRefResizeObserver

    _chartInstance = null

    static styles = css`
      :host {
        display: inline-flex;
        width: 100%;
        height: 100%;
      }
    `

    render() {
      return html`<div
        id="main"
        style="width: 100%; height: 100%"
      ></div>`
    }

    _renderChart() {
      this._chartInstance.setOption({
        ...this._optionScaffold,
        dataset: {
          source: this.source,
        },
      })
    }

    firstUpdated() {
      this._chartInstance = echarts.init(
        this._mainRef,
        this.theme === 'common' ? themeCommon.value : this.theme
      )
      this._renderChart()
      this._mainRefResizeObserver = new ResizeObserver(() => {
        this._chartInstance.resize()
      })
      this._mainRefResizeObserver.observe(this._mainRef)
    }

    disconnectedCallback() {
      super.disconnectedCallback()
      this._chartInstance.dispose()
      this._mainRefResizeObserver.disconnect()
    }
  }

export const BaseChart = BaseMixin(LitElement)

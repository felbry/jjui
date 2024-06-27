import { BaseChart } from '../../mixins/base'
import { customElement, property } from 'lit/decorators.js'

@customElement('lc-pie')
export class LazyPie extends BaseChart {
  /**
   * [内半径， 外半径]。内半径是0就是饼图，内半径有值就是圆环图。（设置百分比是相对于宽高中较小的那一个）
   * @type {[Number|String, Number|String]}
   */
  @property({ attribute: false })
  accessor radius = [0, '75%']

  /**
   * echarts的graphic选项，通常用于在圆环图中心绘制文本
   * @type {Object|Null}
   */
  @property({ attribute: false })
  accessor graphic = null

  get _optionScaffold() {
    return {
      legend: {
        icon: 'circle',
        bottom: 'bottom',
      },
      tooltip: {},
      series: [
        {
          type: 'pie',
          encode: {
            itemName: 'name',
            value: 'value',
          },
          radius: this.radius,
        },
      ],
      ...(this.graphic ? { graphic: this.graphic } : {}),
    }
  }
}

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
    }
  }

  shouldUpdate(changedProperties) {
    if (changedProperties.has('source') && this.hasUpdated) {
      this._renderChart()
      return false
    }
    return true
  }
}

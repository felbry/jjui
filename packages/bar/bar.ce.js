import { BaseChart } from '../../mixins/base'
import { customElement } from 'lit/decorators.js'
import { property } from 'lit/decorators.js'

@customElement('lc-bar')
export class LazyBar extends BaseChart {
  /**
   * 是否默认x轴和y轴的类型（默认x轴type为category，y轴type为value）。当设置该值为false时柱状图将横向展示。
   * @type {Boolean}
   */
  @property({ attribute: false })
  accessor isDefaultAxisType = true

  _optionScaffold = {
    // 柱状图的图例为正方形
    legend: {
      icon: 'rect',
      itemWidth: 10,
      itemHeight: 10,
    },
    tooltip: {}, // 配置了才有tooltip
    // https://echarts.apache.org/zh/option.html#xAxis.type
    xAxis: { type: 'category' }, // 指定xAxis展示类目（分类），类目数据从dataset.source中取
    // 声明一个 Y 轴，数值轴。
    yAxis: {},
  }

  shouldUpdate(changedProperties) {
    if (changedProperties.has('source')) {
      // 根据source数据有几个serial生成对应的几个bar
      this._optionScaffold.series = this.source[0]
        ? this.source[0].slice(1).map(() => ({ type: 'bar' }))
        : []
      // 如果isDefaultAxisType为false，设置x轴和y轴的type
      if (!this.isDefaultAxisType) {
        this._optionScaffold.xAxis.type = 'value'
        this._optionScaffold.yAxis.type = 'category'
      }
      // 首次还没mounted，走firstUpdated的逻辑
      // 后续source变更，直接手动调用更新图表，就不需要走接下来的update周期了
      if (this.hasUpdated) {
        this._renderChart()
        return false
      }
    }
    return true
  }
}

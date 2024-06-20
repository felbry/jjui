import { BaseChart } from '../../mixins/base'
import { customElement } from 'lit/decorators.js'

@customElement('lc-line')
export class LazyLine extends BaseChart {
  _optionScaffold = {
    legend: {}, // 配置了才有图例
    tooltip: {}, // 配置了才有tooltip
    // https://echarts.apache.org/zh/option.html#xAxis.type
    xAxis: { type: 'category' }, // 指定xAxis展示类目（分类），类目数据从dataset.source中取
    // 声明一个 Y 轴，数值轴。
    yAxis: {},
  }

  shouldUpdate(changedProperties) {
    if (changedProperties.has('source')) {
      // 根据source y轴类目有几列生成对应的几个bar
      this._optionScaffold.series = this.source[0]
        ? this.source[0].slice(1).map(() => ({ type: 'line' }))
        : []
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

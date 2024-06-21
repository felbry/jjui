import { BaseChart } from '../../mixins/base'
import { customElement } from 'lit/decorators.js'

@customElement('lc-line')
export class LazyLine extends BaseChart {
  get _optionScaffold() {
    return {
      legend: {
        icon: 'rect',
        itemWidth: 14,
        itemHeight: 2,
      }, // 配置了才有图例
      tooltip: {
        trigger: 'axis',
      }, // 配置了才有tooltip
      // https://echarts.apache.org/zh/option.html#xAxis.type
      xAxis: { type: 'category' }, // 指定xAxis展示类目（分类），类目数据从dataset.source中取
      // 声明一个 Y 轴，数值轴。
      yAxis: {},
      series: this.source[0]
        ? this.source[0].slice(1).map(() => ({
            type: 'line',
            // connectNulls 是否连接空数据，默认是false，数据为空会出现断点情况
          }))
        : [],
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

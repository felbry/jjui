import { BaseChart } from '../../mixins/base'
import { customElement, property } from 'lit/decorators.js'
@customElement('lc-bar')
export class LazyBar extends BaseChart {
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

  get _optionScaffold() {
    return {
      legend: {
        icon: 'rect',
        itemWidth: 10,
        itemHeight: 10,
      },
      tooltip: {
        trigger: 'axis', // 默认是item，当相同类目多个柱状图时，不能整体展示，所以以axis触发
        axisPointer: {
          type: 'shadow', // 折线图更适合line形式，柱状图更适合shadow
        },
      },
      // 如果isDefaultAxisType为false，设置x轴和y轴的type
      ...(this.isDefaultAxisType
        ? { xAxis: { type: 'category' }, yAxis: {} }
        : { xAxis: { type: 'value' }, yAxis: { type: 'category' } }),
      // 根据source数据有几个serial生成对应的几个bar
      series: this.source[0] ? this.source[0].slice(1).map(() => ({ type: 'bar' })) : [],
      ...(this.dataZoom
        ? {
            dataZoom: [
              {
                type: 'slider',
                brushSelect: false,
                ...this.dataZoom,
              },
            ],
          }
        : {}),
    }
  }

  shouldUpdate(changedProperties) {
    if (changedProperties.has('source') && this.hasUpdated) {
      // 首次还没mounted，走firstUpdated的逻辑
      // 后续source变更，直接手动调用更新图表，就不需要走接下来的update周期了
      this._renderChart()
      return false
    }
    return true
  }
}

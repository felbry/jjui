export default {
  name: 'common',
  value: {
    // 主题颜色数组，用于图表中不同系列的颜色
    color: [
      '#5B8FF9',
      '#61DDAA',
      '#65789B',
      '#F6BD16',
      '#7262fd',
      '#78D3F8',
      '#9661BC',
      '#F6903D',
      '#008685',
      '#F08BB4',
    ],
    // 类目轴样式
    categoryAxis: {
      // 轴线
      axisLine: {
        lineStyle: {
          color: '#BFBFBF',
        },
      },
      // 轴字体
      axisLabel: {
        color: '#8C8C8C',
      },
      // 轴刻度
      axisTick: {
        alignWithLabel: true,
      },
    },
    valueAxis: {
      // 轴字体
      axisLabel: {
        color: '#8C8C8C',
      },
      // 轴网格线
      splitLine: {
        lineStyle: {
          color: ['#D9D9D9'],
        },
      },
    },
  },
}

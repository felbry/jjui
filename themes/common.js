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
    // 图例样式
    legend: {
      // 图例文本颜色
      textStyle: {
        color: '#595959',
      },
    },
    dataZoom: {
      borderColor: 'transparent', // 最外围的border不显示
      backgroundColor: 'rgba(65, 97, 128, .05)', // 整个区域的底色
      dataBackground: {
        // 有个趋势图，
        lineStyle: {
          color: '#BABDBE',
        },
      },
      selectedDataBackground: {
        lineStyle: {
          color: '#BABDBE',
        },
      },
      fillerColor: 'rgba(91, 143, 249, .15)',
      height: 18,
      handleSize: 30,
    },
    bar: {
      barGap: '5%', // 相同类目多个柱状图之间的间隙   barCategoryGap是指1月、2月这种之间的间距，如果太小所有柱子都挤在一块了
    },
    line: {
      smooth: true, // 平滑曲线
      symbol: 'circle', // 每个节点的图形，默认是空心圆
      showSymbol: false, // 是否显示 symbol, 如果 false 则只有在 tooltip hover 的时候显示
    },
  },
}

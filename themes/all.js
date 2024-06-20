export default {
  name: 'common',
  value: {
    // 主题颜色数组，用于图表中不同系列的颜色
    color: [
      '#5470c6',
      '#91cc75',
      '#fac858',
      '#ee6666',
      '#73c0de',
      '#3ba272',
      '#fc8452',
      '#9a60b4',
      '#ea7ccc',
    ],

    // 背景颜色，这里设置为完全透明
    backgroundColor: 'rgba(0, 0, 0, 0)',

    // 文本样式，这里留空，使用默认样式
    textStyle: {},

    // 标题样式
    title: {
      // 主标题文本样式
      textStyle: {
        color: '#464646',
      },
      // 副标题文本样式
      subtextStyle: {
        color: '#6E7079',
      },
    },

    // 折线图样式
    line: {
      // 数据点样式
      itemStyle: {
        borderWidth: 1, // 数据点边框宽度
      },
      // 线条样式
      lineStyle: {
        width: 2, // 线条宽度
      },
      // 数据点图形大小
      symbolSize: 4,
      // 数据点图形类型，这里是空的圆形
      symbol: 'emptyCircle',
      // 是否平滑曲线
      smooth: false,
    },

    // 雷达图样式，配置同折线图
    radar: {
      // ... 同 line
    },

    // 柱状图样式
    bar: {
      // 柱子边框宽度和颜色
      itemStyle: {
        barBorderWidth: 0,
        barBorderColor: '#ccc',
      },
    },

    // 饼图样式
    pie: {
      // 饼图扇区边框宽度和颜色
      itemStyle: {
        borderWidth: 0,
        borderColor: '#ccc',
      },
    },

    // 散点图样式
    scatter: {
      // ... 同 bar
    },

    // 箱型图样式
    boxplot: {
      // ... 同 bar
    },

    // 平行坐标图样式
    parallel: {
      // ... 同 bar
    },

    // 桑基图样式
    sankey: {
      // ... 同 bar
    },

    // 漏斗图样式
    funnel: {
      // ... 同 bar
    },

    // 仪表盘样式
    gauge: {
      // ... 同 bar
    },

    // K线图样式
    candlestick: {
      // K线图上涨和下跌的颜色，边框颜色和宽度
      itemStyle: {
        color: '#eb5454',
        color0: '#47b262',
        borderColor: '#eb5454',
        borderColor0: '#47b262',
        borderWidth: 1,
      },
    },

    // 图谱图样式
    graph: {
      // ... 包含颜色数组、线条宽度、数据点样式等
      itemStyle: {
        borderWidth: 0,
        borderColor: '#ccc',
      },
      lineStyle: {
        width: 1,
        color: '#aaa',
      },
      symbolSize: 4,
      symbol: 'emptyCircle',
      smooth: false,
      color: [
        '#5470c6',
        '#91cc75',
        '#fac858',
        '#ee6666',
        '#73c0de',
        '#3ba272',
        '#fc8452',
        '#9a60b4',
        '#ea7ccc',
      ],
      label: {
        color: '#eee',
      },
    },

    // 地图样式
    map: {
      // 地图区域颜色、边框颜色和宽度，高亮状态下的样式等
      itemStyle: {
        areaColor: '#eee',
        borderColor: '#444',
        borderWidth: 0.5,
      },
      label: {
        color: '#000',
      },
      emphasis: {
        itemStyle: {
          areaColor: 'rgba(255,215,0,0.8)',
          borderColor: '#444',
          borderWidth: 1,
        },
        label: {
          color: 'rgb(100,0,0)',
        },
      },
    },

    // 地理坐标系样式，配置同地图
    geo: {
      // ... 同 map
      itemStyle: {
        areaColor: '#eee',
        borderColor: '#444',
        borderWidth: 0.5,
      },
      label: {
        color: '#000',
      },
      emphasis: {
        itemStyle: {
          areaColor: 'rgba(255,215,0,0.8)',
          borderColor: '#444',
          borderWidth: 1,
        },
        label: {
          color: 'rgb(100,0,0)',
        },
      },
    },

    // 类目轴样式
    categoryAxis: {
      // 轴线、刻度线、刻度标签的显示和样式
      axisLine: {
        show: true,
        lineStyle: {
          color: '#6E7079',
        },
      },
      axisTick: {
        show: true,
        lineStyle: {
          color: '#6E7079',
        },
      },
      axisLabel: {
        show: true,
        color: '#6E7079',
      },
      splitLine: {
        show: false,
        lineStyle: {
          color: ['#E0E6F1'],
        },
      },
      splitArea: {
        show: false,
        areaStyle: {
          color: ['rgba(250,250,250,0.2)', 'rgba(210,219,238,0.2)'],
        },
      },
    },

    // 值轴样式，配置同类目轴但轴线不显示
    valueAxis: {
      // ... 同 categoryAxis
      axisLine: {
        show: false,
        lineStyle: {
          color: '#6E7079',
        },
      },
      axisTick: {
        show: false,
        lineStyle: {
          color: '#6E7079',
        },
      },
      axisLabel: {
        show: true,
        color: '#6E7079',
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: ['#E0E6F1'],
        },
      },
      splitArea: {
        show: false,
        areaStyle: {
          color: ['rgba(250,250,250,0.2)', 'rgba(210,219,238,0.2)'],
        },
      },
    },

    // 对数轴样式，配置同值轴
    logAxis: {
      // ... 同 valueAxis
      axisLine: {
        show: false,
        lineStyle: {
          color: '#6E7079',
        },
      },
      axisTick: {
        show: false,
        lineStyle: {
          color: '#6E7079',
        },
      },
      axisLabel: {
        show: true,
        color: '#6E7079',
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: ['#E0E6F1'],
        },
      },
      splitArea: {
        show: false,
        areaStyle: {
          color: ['rgba(250,250,250,0.2)', 'rgba(210,219,238,0.2)'],
        },
      },
    },

    // 时间轴样式，配置同类目轴
    timeAxis: {
      // ... 同 categoryAxis
      axisLine: {
        show: true,
        lineStyle: {
          color: '#6E7079',
        },
      },
      axisTick: {
        show: true,
        lineStyle: {
          color: '#6E7079',
        },
      },
      axisLabel: {
        show: true,
        color: '#6E7079',
      },
      splitLine: {
        show: false,
        lineStyle: {
          color: ['#E0E6F1'],
        },
      },
      splitArea: {
        show: false,
        areaStyle: {
          color: ['rgba(250,250,250,0.2)', 'rgba(210,219,238,0.2)'],
        },
      },
    },

    // 工具箱样式
    toolbox: {
      // 工具箱图标的边框颜色，高亮状态下的样式
      iconStyle: {
        borderColor: '#999',
      },
      emphasis: {
        iconStyle: {
          borderColor: '#666',
        },
      },
    },

    // 图例样式
    legend: {
      // 图例文本颜色
      textStyle: {
        color: '#333',
      },
    },

    // 提示框样式
    tooltip: {
      // 坐标轴指示器的线条样式
      axisPointer: {
        lineStyle: {
          color: '#ccc',
          width: 1,
        },
        crossStyle: {
          color: '#ccc',
          width: 1,
        },
      },
    },

    // 时间轴组件样式
    timeline: {
      // 时间轴线条、手柄、控制按钮、检查点和标签的样式
      lineStyle: {
        color: '#DAE1F5',
        width: 2,
      },
      itemStyle: {
        color: '#A4B1D7',
        borderWidth: 1,
      },
      controlStyle: {
        color: '#A4B1D7',
        borderColor: '#A4B1D7',
        borderWidth: 1,
      },
      checkpointStyle: {
        color: '#316bf3',
        borderColor: 'fff',
      },
      label: {
        color: '#A4B1D7',
      },
      emphasis: {
        itemStyle: {
          color: '#FFF',
        },
        controlStyle: {
          color: '#A4B1D7',
          borderColor: '#A4B1D7',
          borderWidth: 1,
        },
        label: {
          color: '#A4B1D7',
        },
      },
    },

    // 视觉映射组件样式
    visualMap: {
      // 视觉映射颜色数组
      color: ['#bf444c', '#d88273', '#f6efa6'],
    },

    // 数据区域缩放组件样式
    dataZoom: {
      // 手柄大小和文本样式
      handleSize: 'undefined%',
      textStyle: {},
    },

    // 标点组件样式
    markPoint: {
      // 标点标签颜色，高亮状态下的样式
      label: {
        color: '#eee',
      },
      emphasis: {
        label: {
          color: '#eee',
        },
      },
    },
  },
}

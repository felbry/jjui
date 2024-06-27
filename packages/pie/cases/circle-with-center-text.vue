<template>
  <lc-pie
    style="width: 300px; height: 300px"
    :source="source"
    :radius="['25%', '46%']"
    :graphic="graphic"
  />
</template>
<script>
export default {
  data() {
    return {
      source: [
        { name: '分类一', value: 1048 },
        { name: '分类二', value: 735 },
        { name: '分类三', value: 580 },
      ],
      graphic: {
        elements: [
          {
            type: 'group',
            left: 'center',
            top: 'center',
            children: [
              {
                type: 'text',
                style: {
                  text: 'code',
                  fill: 'gray',
                  fontSize: 12,
                },
                top: -10,
                left: 'center',
              },
              {
                type: 'text',
                style: {
                  text: '1024',
                  fill: 'blue',
                  // v5.5 尝试文档中的font简写不生效，只能一个属性一个属性写
                  fontSize: 16,
                  fontWeight: 'bold',
                },
                top: 10,
                left: 'center',
              },
            ],
          },
        ],
      },
    }
  },
}
</script>

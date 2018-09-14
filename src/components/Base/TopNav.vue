<template>
  <span class="topnav" @click="click">
      {{title}}
  </span>
</template>

<script>

export default {
  name: 'topnav',
  props: ['title'],
  data: function () {
    return {
      text: '导航条'
    }
  },
  methods: {
    click: function () {
      this.$emit('click-event', '点击')
    }
  }
}
</script>

<style lang="less" scoped>
span { margin: 0 5px; }
</style>

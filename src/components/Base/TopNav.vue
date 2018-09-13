<template>
  <span class="topnav">
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
  }
}
</script>

<style lang="less" scoped>
span { margin: 0 5px; }
</style>

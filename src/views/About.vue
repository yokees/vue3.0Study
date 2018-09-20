<template><div class="about">
  <top-nav :title="title1" @click-event="click"/>
  <top-nav title="军事" :class="{active:isActive}"/>
  <top-nav title="社会"/>
  <top-nav title="科技"/>
  <router-view/>
</div></template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
// import TopNav from '@/components/Base/TopNav.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  data: function () {
    return {
      title1: '推荐',
      isActive: function () {
        return this.$route.params.id === '666'
      }
    }
  },
  methods: {
    click (e) {
      console.log(e)
      this.title1 = e
    }
  },
  beforeRouteEnter (to, from, next) {
    console.log('组件-前置-钩子')
    next()
  },
  beforeRouteUpdate (to, from, next) {
    console.log('组件-复用-钩子')
    next()
  },
  beforeRouteLeave (to, from, next) {
    console.log('组件-离开-钩子')
    next()
  }
}
</script>

<style lang="less">
.active { background: red; }
</style>

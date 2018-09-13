<template><div class="about">
  <top-nav title="推荐"/>
  <top-nav title="军事"/>
  <top-nav title="社会"/>
  <top-nav title="科技"/>
  <HelloWorld msg="vue 官方相关资料的链接"/>
</div></template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import TopNav from '@/components/Base/TopNav.vue'

export default {
  name: 'home',
  components: {
    HelloWorld, TopNav
  }
}
</script>

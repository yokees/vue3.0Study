<template>
  <div class="about">
    <HelloWorld msg="vue 官方相关资料的链接"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'about',
  components: {
    HelloWorld
  }
}
</script>

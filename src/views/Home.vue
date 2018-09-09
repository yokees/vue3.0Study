<template>
  <div class="home">
    <div class="nav">
      <div v-for="(value, key, index) in navs" :key="index">
        {{key}}
      </div>
    </div>
    <ul>
      <li v-for="(tt,index) in tts" :key="index">
        {{tt.title}}
      </li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  data: function () {
    return {
      navs: {},
      tts: []
    }
  },
  created: function () {
    fetch('https://www.apiopen.top/journalismApi')
      .then(v => v.json())
      .then(v => {
        console.log(v.data)
        this.tts = v.data.toutiao
        this.navs = v.data
      })
  }
}
</script>

<style lang="less" scoped>
.home {
  height: calc( 100% - 60px );
  .nav {
    width: 80px;
    height: calc( 100% - 30px );
    padding: 15px 10px;
    float: left;
    box-shadow: inset 0 10px 10px -8px #333;
  }
  ul {
    width: calc( 100% - 100px );
    height: calc( 100% - 30px );
    overflow: hidden;
    padding: 15px 0;
    float: right;
    box-shadow: inset 0 10px 10px -8px #333;
    li {
      height: 30px;
      line-height: 30px;
    }
  }
}
</style>

<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">主页</router-link>
      <router-link to="/form">表单</router-link>
      <router-link to="/about">VUE</router-link>
      <span>
        <a href="https://www.cnblogs.com/ndos/" target="_blank">cnblogs</a>
        <a href="https://github.com/yokees/vue3.0Study" target="_blank">Github</a>
      </span>
    </div>
    <router-view/>
  </div>
</template>

<style lang="less">
* {
  padding: 0;
  margin: 0;
}
html, body, #app {
  width: 100%;
  height:100%;
}
a {
  text-decoration-line: none;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
}
#nav {
  padding: 0 20px;
  font-size: 20px;
  height:60px;
  line-height: 60px;
  background: rgba(125,125,0,0.3);
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
    margin: 0 5px;
  }
  span {
    float: right;
  }
}
</style>

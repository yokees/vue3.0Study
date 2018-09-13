<template><div class="form">
  <input v-model="message1" placeholder="单行文本">
  <p>单行文本: {{ message1 }}</p>

  <span>多行文本:</span>
  <p>{{ message2 }}</p>
  <textarea v-model.trim="message2" placeholder="多行文本"></textarea>

  <div style="width:100%;border-top:1px solid black;"></div>

  <label for="cd" style="color:green">单选框：</label>
  <input type="checkbox" id="cd" v-model="checked1">
  <label for="cd">{{ checked1 }}</label>

  <input
    type="checkbox"
    id="cd1"
    v-model="checked11"
    true-value="有效"
    false-value="无效"
  >
  <label for="cd1">{{ checked11 }}</label>

  <div>
    <label for="jack" style="color:green">复选集合：</label>
    <input type="checkbox" id="name1" value="章三" v-model="checkedNames">
    <label for="name1">章三</label>
    <input type="checkbox" id="name2" value="里斯" v-model="checkedNames">
    <label for="name2">里斯</label>
    <input type="checkbox" id="name3" value="王五" v-model="checkedNames">
    <label for="name3">王五</label>
    <br>
    <span>所选的人有: {{ checkedNames }}</span>
  </div>

  <div>
    <label style="color:green">单选集合：</label>
    <input type="radio" id="nan" value="男" v-model="picked">
    <label for="nan">男</label>
    <input type="radio" id="nv" value="女" v-model="picked">
    <label for="nv">女</label>
    <br>
    <span>性别是: {{ picked }}</span>
  </div>

  <div>
    <label style="color:green">绑定到a：<input type="radio" v-model="pick" v-bind:value="a"></label>
  </div>

  <div>
    <label style="color:green">绑定到对象：<input type="radio" v-model="pick1" v-bind:value="obj"></label>
  </div>

  <div>
    <label style="color:green">单选下拉框：</label>
    <select v-model="selected1">
      <option disabled value="">请选择</option>
      <option>A</option>
      <option>B</option>
      <option>C</option>
    </select>
    <span>选择的是: {{ selected1 }}</span>
  </div>

  <div>
    <label style="color:green">多选下拉框：</label>
    <select v-model="selected2" multiple style="width: 50px;">
      <option>A</option>
      <option>B</option>
      <option>C</option>
    </select>
    <span>选择的是: {{ selected2 }}</span>
  </div>
</div></template>

<script>
export default {
  name: 'forms', // eslint-disable-next-line
  data: function () { return {
    a: 'xuan',
    pick: null,
    pick1: null,
    obj: { a: 1 },
    checked1: true,
    checked11: '有效',
    checkedNames: [],
    picked: null,
    selected1: null,
    selected2: [],
    message1: null,
    message2: null // eslint-disable-next-line
  } }
}
</script>

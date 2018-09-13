<template><div class="form">
  <input v-model="message" placeholder="edit me">
  <p>Message is: {{ message }}</p>
</div></template>

<script>
export default {
  name: 'forms', // eslint-disable-next-line
  data: function () { return { 
    d: '' // eslint-disable-next-line
  } }
}
</script>

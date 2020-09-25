<template>
  <div>
    <div>这是子组件</div>
    <div>{{ this.message }}</div>
    <div>{{ this.arrData }}</div>
    <div>{{ this.username }}</div>
  </div>
</template>

<script type='text/ecmascript-6'>
export default {
  props: ['message', 'arrData', 'username'],
  mounted () {
  },
  data () {
    return {
      age: null
    }
  }
}
</script>

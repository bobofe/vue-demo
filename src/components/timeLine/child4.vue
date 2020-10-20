<template>
  <div>
    <p>我是子组件4</p>
    <p>{{username}}</p>
  </div>
</template>

<script>
export default {
  name: 'child4',
  beforeCreate () {
    console.log('I am child4 beforeCreated')
  },
  created () {
    console.log('I am child4 created')
  },
  beforeMount () {
    console.log('I am child4 beforeMount')
  },
  mounted () {
    console.log('I am child4 mounted')
  },
  beforeUpdate () {
    console.log('I am child4 beforeUpdate')
  },
  updated () {
    console.log('I am child4 updated')
  },
  beforeDestroy () {
    console.log('I am child4 beforeDestroy')
  },
  destroyed () {
    console.log('I am child4 destroyed')
  },
  props: ['username']
}
</script>

<style scoped>
</style>

<template>
  <div>
    <p>我是子组件2</p>
    <p>{{username}}</p>
  </div>
</template>

<script>
export default {
  name: 'child2',
  beforeCreate () {
    console.log('I am child2 beforeCreated')
  },
  created () {
    console.log('I am child2 created')
  },
  beforeMount () {
    console.log('I am child2 beforeMount')
  },
  mounted () {
    console.log('I am child2 mounted')
  },
  beforeUpdate () {
    console.log('I am child2 beforeUpdate')
  },
  updated () {
    console.log('I am child2 updated')
  },
  beforeDestroy () {
    console.log('I am child2 beforeDestroy')
  },
  destroyed () {
    console.log('I am child2 destroyed')
  },
  props: ['username']
}
</script>

<style scoped>
</style>

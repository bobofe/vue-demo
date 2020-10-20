<template>
  <div>
    <p>我是子组件1</p>
    <p>{{username}}</p>
  </div>
</template>

<script>
export default {
  name: 'child1',
  beforeCreate () {
    console.log('I am child1 beforeCreated')
  },
  created () {
    console.log('I am child1 created')
  },
  beforeMount () {
    console.log('I am child1 beforeMount')
  },
  mounted () {
    console.log('I am child1 mounted')
  },
  beforeUpdate () {
    console.log('I am child1 beforeUpdate')
  },
  updated () {
    console.log('I am child1 updated')
  },
  beforeDestroy () {
    console.log('I am child1 beforeDestroy')
  },
  destroyed () {
    console.log('I am child1 destroyed')
  },
  props: ['username']
}
</script>

<style scoped>
</style>

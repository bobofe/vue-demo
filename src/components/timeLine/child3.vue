<template>
  <div>
    <p>我是子组件3</p>
    <p>{{username}}</p>
  </div>
</template>

<script>
export default {
  name: 'child3',
  beforeCreate () {
    console.log('I am child3 beforeCreated')
  },
  created () {
    console.log('I am child3 created')
  },
  beforeMount () {
    console.log('I am child3 beforeMount')
  },
  mounted () {
    console.log('I am child3 mounted')
  },
  beforeUpdate () {
    console.log('I am child3 beforeUpdate')
  },
  updated () {
    console.log('I am child3 updated')
  },
  beforeDestroy () {
    console.log('I am child3 beforeDestroy')
  },
  destroyed () {
    console.log('I am child3 destroyed')
  },
  props: ['username']
}
</script>

<style scoped>
</style>

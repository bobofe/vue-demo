<template>
  <div>
    <p>我是父组件</p>
    <ChildOne :username = 'userNm'></ChildOne>
    <ChildTwo :username = 'userNm'></ChildTwo>
    <ChildThree :username = 'userNm'></ChildThree>
    <ChildFour :username = 'userNm'></ChildFour>
    <button v-on:click="changeNm">点我点我</button>
  </div>
</template>

<script>
import ChildOne from './child1'
import ChildTwo from './child2'
import ChildThree from './child3'
import ChildFour from './child4'

export default {
  name: 'parent',
  data: function () {
    return {
      arr: [],
      userNm: ''
    }
  },
  components: {
    ChildOne,
    ChildTwo,
    ChildThree,
    ChildFour
  },
  beforeCreate () {
    console.log('I am parents beforeCreated')
  },
  created () {
    console.log('I am parents created')
  },
  beforeMount () {
    console.log('I am parents beforeMount')
  },
  mounted () {
    console.log('I am parents mounted')
  },
  beforeUpdate () {
    console.log('I am parents beforeUpdate')
  },
  updated () {
    console.log('I am parents updated')
  },
  beforeDestroy () {
    console.log('I am parents beforeDestroy')
  },
  destroyed () {
    console.log('I am parents destroyed')
  },
  methods: {
    changeNm () {
      this.userNm = 'lili'
    }
  }
}
</script>

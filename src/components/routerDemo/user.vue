<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul>
      <li>
        用户id：{{this.$route.params.id}}
      </li>
       <li>
        用户id：{{this.$route.query.id}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '动态路由'
    }
  },
  beforeCreate () {
    console.log('beforeCreated')
  },
  created () {
    console.log('created')
  },
  beforeMount () {
    console.log('beforeMount')
  },
  mounted () {
    console.log('mounted')
  },
  beforeUpdate () {
    console.log('beforeUpdate')
  },
  updated () {
    console.log('updated')
  },
  beforeDestroy () {
    console.log('I am child1 beforeDestroy')
  },
  destroyed () {
    console.log('I am child1 destroyed')
  },
  watch: {
    $route (to, from) {
      console.error(to)
      console.error(from)
      if (to.params.id === '60') {
        console.error('触发了匹配的路由')
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

<template>
  <div id='app'>
    <div>这是父组件</div>
    <child :message='message' :arrData = 'arrData' :username = 'username'></child>
  </div>
</template>

<script>
import child from './child'
export default {
  name: 'app',
  components: { child },
  data () {
    return {
      message: {
        age: ''
      },
      arrData: null,
      username: ''
    }
  },
  mounted () {
    // 模拟异步请求
    setTimeout(() => {
      console.error('我执行了')
      this.message.age = 18
      this.arrData = [
        {
          'id': 1
        }
      ]
      this.username = 'lili'
    }, 2000)
  }
}
</script>

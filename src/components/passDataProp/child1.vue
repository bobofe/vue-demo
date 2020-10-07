<template>
  <div>
    <div>这是子组件</div>
    <div>{{ this.messageC }}</div>
    <div>{{ this.arrDataC }}</div>
    <div>{{ this.usernameC }}</div>
  </div>
</template>

<script type='text/ecmascript-6'>
export default {
  props: ['message', 'arrData', 'username'],
  mounted () {
    this.messageC = this.message
    this.arrDataC = this.arrData
    this.usernameC = this.username
  },
  data () {
    return {
      messageC: null,
      arrDataC: null,
      usernameC: ''
    }
  },
  watch: {
    message: function (newValue, oldValue) {
      this.messageC = newValue
    },
    arrData: function (newValue, oldValue) {
      console.error(newValue)
      console.error(oldValue)
      this.arrDataC = newValue
    },
    username: function (newValue, oldValue) {
      this.usernameC = newValue
    }
  }
}
</script>

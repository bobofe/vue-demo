<template>
  <div>
    <div class=''>这是一个嵌套路由{{mes}}</div>
    <router-view></router-view>
  </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';

export default {
  name: 'product',
  components: {

  },
  data () {
    return {
      mes: 'ddddd'
    }
  },
  computed: {

  },
  watch: {

  },
  methods: {

  },
  beforeCreate () {
    console.log('parent beforeCreated')
  }, // 生命周期 - 创建之前
  created () {
    console.log('parent created')
  }, // 生命周期 - 创建完成（可以访问当前this实例）
  beforeMount () {
    console.log('parent beforeMount')
  }, // 生命周期 - 挂载之前
  mounted () {
    console.log('parent mounted')
  }, // 生命周期 - 挂载完成（可以访问DOM元素）
  beforeUpdate () {
    console.log('parent beforeUpdate')
  }, // 生命周期 - 更新之前
  updated () {
    console.log('parent updated')
  }, // 生命周期 - 更新之后
  beforeDestroy () {
    console.log('parent beforeDestroy')
  }, // 生命周期 - 销毁之前
  destroyed () {
    console.log('parent destroyed')
  }, // 生命周期 - 销毁完成
  activated () {
    console.log('parent activated')
  } // 如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style lang='' scoped>

</style>

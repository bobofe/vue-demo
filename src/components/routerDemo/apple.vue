<!--  -->
<template>
  <div class=''>这是apple 组件</div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';

export default {
  components: {

  },
  data () {
    return {

    }
  },
  computed: {

  },
  watch: {

  },
  methods: {

  },
  beforeCreate () {
    console.log('apple beforeCreated')
  }, // 生命周期 - 创建之前
  created () {
    console.log('apple created')
  }, // 生命周期 - 创建完成（可以访问当前this实例）
  beforeMount () {
    console.log('apple beforeMount')
  }, // 生命周期 - 挂载之前
  mounted () {
    console.log('apple mounted')
  }, // 生命周期 - 挂载完成（可以访问DOM元素）
  beforeUpdate () {
    console.log('apple beforeUpdate')
  }, // 生命周期 - 更新之前
  updated () {
    console.log('apple updated')
  }, // 生命周期 - 更新之后
  beforeDestroy () {
    console.log('apple beforeDestroy')
  }, // 生命周期 - 销毁之前
  destroyed () {
    console.log('apple destroyed')
  }, // 生命周期 - 销毁完成
  activated () {
    console.log('apple activated')
  } // 如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style lang='' scoped>

</style>

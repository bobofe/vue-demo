<!--  -->
<template>
<div class=''>这是 milk 组件</div>
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
    console.log('milk beforeCreated')
  }, // 生命周期 - 创建之前
  created () {
    console.log('milk created')
  }, // 生命周期 - 创建完成（可以访问当前this实例）
  beforeMount () {
    console.log('milk beforeMount')
  }, // 生命周期 - 挂载之前
  mounted () {
    console.log('milk mounted')
  }, // 生命周期 - 挂载完成（可以访问DOM元素）
  beforeUpdate () {
    console.log('milk beforeUpdate')
  }, // 生命周期 - 更新之前
  updated () {
    console.log('milk updated')
  }, // 生命周期 - 更新之后
  beforeDestroy () {
    console.log('milk beforeDestroy')
  }, // 生命周期 - 销毁之前
  destroyed () {
    console.log('milk destroyed')
  }, // 生命周期 - 销毁完成
  activated () {
    console.log('milk activated')
  } // 如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style lang='' scoped>

</style>

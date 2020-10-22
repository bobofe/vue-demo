<template>
  <div>
    <div class=''>这是一个嵌套路由{{mes}}</div>
    <p>参数为字符串</p>
    <ul>
      <li>
        <router-link to="milk">子路由：跳转到 milk</router-link>
        <button v-on:click="jumpToMilk">子路由：点击跳转到 milk</button>
      </li>
      <li>
        <router-link to="apple">子路由：跳转到 apple</router-link>
        <button v-on:click="jumpToApple">子路由：点击跳转到 apple</button>
      </li>
      <li>
        <router-link to="/prop">根级别路由：跳转到根级别路由/prop</router-link>
        <button v-on:click="jumpToProp">根级别路由：点击跳转到 prop</button>
      </li>
    </ul>
    <p>参数为有path属性的对象</p>
    <ul>
      <li>
        <router-link :to="{path: 'milk'}">子路由：跳转到 milk</router-link>
        <button v-on:click="jumpToMilk1">子路由：点击跳转到 milk</button>
      </li>
      <li>
        <router-link :to="{path: 'apple'}">子路由：跳转到 apple</router-link>
        <button v-on:click="jumpToApple1">子路由：点击跳转到 apple</button>
      </li>
      <li>
        <router-link :to="{path: '/prop'}">根级别路由：跳转到根级别路由/prop</router-link>
        <button v-on:click="jumpToProp1">根级别路由：点击跳转到 prop</button>
      </li>
    </ul>
    <p>参数为有path属性，且属性值为变量的对象</p>
    <ul>
      <li>
        <router-link :to="{path: `/user/${id}`}">跳转到user36</router-link>
        <button v-on:click="jumpToUser36">点击跳转到 user36</button>
      </li>
    </ul>
    <p>参数为有name属性的对象</p>
    <ul>
      <li>
        <router-link :to="{name: 'milk'}">子路由：跳转到 milk</router-link>
        <button v-on:click="jumpToMilk2">子路由：点击跳转到 milk</button>
      </li>
      <li>
        <router-link :to="{name: 'apple'}">子路由：跳转到 apple</router-link>
        <button v-on:click="jumpToApple2">子路由：点击跳转到 apple</button>
      </li>
      <li>
        <router-link :to="{name: 'passDataProp'}">根级别路由：跳转到根级别路由/prop</router-link>
        <button v-on:click="jumpToProp2">根级别路由：点击跳转到 prop</button>
      </li>
    </ul>
    <p>参数为有name属性和params属性的对象</p>
    <ul>
      <li>
        <router-link :to="{name: 'user', params: {id: '33'}}">跳转到user33</router-link>
        <button v-on:click="jumpToUser33">点击跳转到 user33</button>
      </li>
      <li>
        <router-link :to="{name: 'user', params: {id: '44'}}">跳转到user44</router-link>
        <button v-on:click="jumpToUser44">子路由：点击跳转到 user44</button>
      </li>
    </ul>
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
      mes: 'ddddd',
      id: '36'
    }
  },
  computed: {

  },
  watch: {

  },
  methods: {
    jumpToMilk () {
      this.$router.push('milk')
    },
    jumpToApple () {
      this.$router.push('apple')
    },
    jumpToProp () {
      this.$router.push('/prop')
    },
    jumpToMilk1 () {
      this.$router.push({path: 'milk'})
    },
    jumpToApple1 () {
      this.$router.push({path: 'apple'})
    },
    jumpToProp1 () {
      this.$router.push({path: '/prop'})
    },
    jumpToUser33 () {
      this.$router.push({name: 'user', params: {id: '33'}})
    },
    jumpToUser44 () {
      this.$router.push({name: 'user', params: {id: '44'}})
    },
    jumpToUser36 () {
      this.$router.push({path: `/user/${this.id}`})
    },
    jumpToMilk2 () {
      this.$router.push({name: 'milk'})
    },
    jumpToApple2 () {
      this.$router.push({name: 'apple'})
    },
    jumpToProp2 () {
      this.$router.push({name: 'passDataProp'})
    }
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

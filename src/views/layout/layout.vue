<template>
  <el-container class="layout-container">
    <el-aside
      class="aside"
      width="200px"
    >
      <app-aside class="aside-menu"/>
    </el-aside>
    <el-container>
      <el-header class="header">
        <app-header/>
      </el-header>
      <el-main class="main">
        <!-- 子路由出口 -->
        <router-view/>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import AppAside from '../../components/aside/aside'
import AppHeader from '../../components/header/header'

export default {
  name: 'LayoutIndex',
  components: {
    AppHeader,
    AppAside
  },
  props: {},
  data () {
    return {}
  },
  computed: {},
  watch: {},
  created () {
  },
  mounted () {
  },
  methods: {}
}
</script>

<style scoped lang="less">
  .layout-container {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }

  .aside {
    background-color: rgb(0, 32, 51);

    .aside-menu {
      height: 100%;
    }
  }

  .header {
    background-color: #b3c0d1;
  }

  .main {
    background-color: #e9eef3;
  }
</style>

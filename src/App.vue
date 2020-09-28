<template>
  <div id="app">
    <el-container>
      <el-header :style="{padding:0}">
        <Header />
      </el-header>
      <el-main class="link-el-main">
        <router-view />
      </el-main>
      <el-footer><Footer/></el-footer>
    </el-container>
  </div>
</template>
<script>
// @ is an alias to /src 
import Header from "@/components/layout/Header.vue";
import Footer from "@/components/layout/Footer.vue";

export default {
  name: "Home",
  components: { 
    Header,
    Footer
  },
};
</script>
<style lang="scss">
@import url(./reset.scss);
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
  padding: 0;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.link-el-main {
  background-color: #e9eef3;
  color: #333;
  display: flex;
  justify-content: center;
  // text-align: center;
  // line-height: 160px;
}

.el-container {
  height: 100vh;
}
</style>

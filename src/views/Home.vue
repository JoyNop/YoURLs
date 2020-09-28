<template>
  <!-- <el-container>
    <el-header>
      <TopMenu />
    </el-header>
    <el-main class="link-el-main">
     
    </el-main>
    <el-footer>Footer</el-footer>
  </el-container> -->
  <div class="home-container">
    <img alt="insmoe logo" src="../assets/logo.png" width="300">
    <ShortLink />
  </div>
</template>

<script>
// @ is an alias to /src
// import Left from "@/components/Left.vue";
// import Right from "@/components/Right.vue";
import ShortLink from "@/components/ShortLink.vue";
 
export default {
  name: "Home",
  components: {
    ShortLink  
    // TopMenu,
  },
};
</script>
<style lang="scss" scoped>
.home-container {
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
}

.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
  padding: 0%;
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
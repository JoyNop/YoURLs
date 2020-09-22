<template>
  <el-container>
    <el-header>
      <TopMenu />
    </el-header>
    <el-main>
      <ShortLink />
      <!-- <div class="home">
        <Left />
        <Right />
      </div>-->
    </el-main>
    <el-footer>Footer</el-footer>
  </el-container>
</template>

<script>
// @ is an alias to /src
// import Left from "@/components/Left.vue";
// import Right from "@/components/Right.vue";
import ShortLink from "@/components/ShortLink.vue";
import TopMenu from "@/components/TopMenu.vue";

export default {
  name: "Home",
  components: {
    ShortLink,
    TopMenu,
  },
};
</script>
<style lang="scss" scoped>
.home {
  display: flex;
  align-items: center;
  justify-content: space-around;
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

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

.el-container {
   height: 100vh; 
 }
</style>
<template>
  <el-menu
    :data-key="activeIndex"
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    router
  >
    <el-menu-item
      v-for="(titleItem, index) in title"
      :key="index"
      :index="titleItem.link"
      >{{ titleItem.name }}</el-menu-item
    >
  </el-menu>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      activeIndex: "/",
      title: [
        { name: "首页", link: "/", childTitle: [] },
        { name: "关于", link: "/about", childTitle: [] },
        // {
        //   name: "关于",
        //   link: "/about",
        //   childTitle: [
        //     { name: "关于", link: "/about" },
        //     { name: "关于", link: "/about" },
        //   ],
        // },
      ],
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    initActiveIndex() {
      console.log(this.$router);
      console.log(this.$router.history.current.path);
      this.activeIndex = this.$router.history.current.path;
      console.log(this.activeIndex, "initAvtiveIndex");
    },
  },
  mounted() {
    console.log("mounted");
    this.initActiveIndex();
  },
};
</script>


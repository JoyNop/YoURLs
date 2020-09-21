<template>
  <div>Left

  <el-button>默认按钮</el-button>
  <el-button type="primary">主要按钮</el-button>

  </div>
</template>

<script>
export default {
  name: 'Left',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

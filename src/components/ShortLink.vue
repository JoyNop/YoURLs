<template>
  <div>
    <!-- <el-button @click="random()">dddd</el-button> -->
    <el-input placeholder="请输入内容" v-model.trim="input">
      <template slot="prepend">Http(s)://</template>
      <el-button slot="append" type="primary" icon="el-icon-s-promotion" @click="getText"></el-button>
    </el-input>
  </div>
</template>

<script>
export default {
  name: "ShortLink",
  data() {
    return {
      input: "",
    };
  },
  methods: {
    async getText() {
      let verificationContent = this.input.toLowerCase();
      if (verificationContent) {
        alert(this.input);
        if (
          verificationContent.startsWith("http") ||
          verificationContent.startsWith("https")
        ) {
          let body = {
            action: "shorturl",
            format: "json",
            url: this.input,
          };
          try {
            const res = await this.$axios.post("/api/create", body);
            console.log(res);
            this.$alert(<div><el-input value="4444"></el-input> </div>,{
              confirmButtonText: "确定",
              title: "创建成功",
              // message:  `<div><el-input value="4444"></el-input> </div>`,
            });
          } catch (error) {
            console.log(error);
          }
        } else {
          this.$message({
            showClose: true,
            message: "请以http或https为开头的内容",
            type: "warning",
          });
        }
      } else {
        this.$message({
          showClose: true,
          message: "数据为空，请填写后输入",
          type: "warning",
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.el-input {
  width: 50rem;
}

.el-input .el-button {
  // background-color: "@primary";
}
.input-with-select .el-input-group__prepend {
  background-color: #fff;
}
</style>
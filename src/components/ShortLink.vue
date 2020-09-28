<template>
  <div>
    <!-- <el-button @click="random()">dddd</el-button> -->
    <el-input
      placeholder="请输入内容"
      class="search-input"
      v-model.trim="input"
    >
      <!-- <template slot="prepend">Http(s)://</template> -->
      <el-button
        slot="append"
        type="primary"
        icon="el-icon-s-promotion"
        @click="getText"
      ></el-button>
    </el-input>

    <el-dialog title="提示" :visible.sync="dialogVisible" width="40%">
      <div>
        <div class="dialog-content">
          <el-input
            :value="this.shortUrl.shorturl"
            class="link-input"
          ></el-input>
          <el-button
            circle
            type="primary"
            icon="el-icon-document-copy"
            @click="copyShortUrl"
          ></el-button>
        </div>

        <el-alert title="创建成功！可点击复制后分享给您的好友。" type="success">
        </el-alert>
      </div>

      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { Loading } from "element-ui";
export default {
  name: "ShortLink",
  data() {
    return {
      input: "https://www.baidu.com",
      dialogVisible: false,
      shortUrl: {},
    };
  },
  methods: {
    copyShortUrl() {
      try {
        console.log(this.shortUrl.shorturl);
        this.$copyText(this.shortUrl.shorturl);
        this.$message({
          showClose: true,
          message: "复制成功",
          type: "success",
        });
      } catch (error) {
        console.log(error);
      }
    },
    async getText() {
      const loadingWidget = Loading.service({
        fullscreen: true,
        text: "正在努力加载中....",
      });
      let verificationContent = this.input.toLowerCase();

      if (verificationContent) {
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
            this.shortUrl = res.data;
            loadingWidget.close();

            this.dialogVisible = true;
            // this.$alert(
            //   <div>
            //     <el-input value={body.url} class="link-input"></el-input>
            //     <el-alert
            //       title="点击复制按钮复制到剪切板"
            //       type="info"
            //       show-icon
            //     ></el-alert>
            //   </div>,
            //   {
            //     confirmButtonText: "复制",
            //     title: "创建成功",
            //     // message:  `<div><el-input value="4444"></el-input> </div>`,
            //   }
            // );
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
.search-input {
  max-width: 50rem;
  min-width: 45rem;
}
.link-input {
  width: 300px;
}

.input-with-select .el-input-group__prepend {
  background-color: #fff;
}

.dialog-content {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  min-width: 350px;
  padding-bottom: 10px;
}
</style>
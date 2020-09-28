<template>
  <div>
    <el-row>
      <el-col :span="24" v-for="(item, index) in messageList" :key="index">
        <el-alert
          effect="dark"
          :title="item.title"
          :type="item.type"
          :description="item.description"
          show-icon
      /></el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      messageList: [
        {
          title: "",
          description: `免费短连接转发仅供分享链接使用，我们保留随时删除链接并举报违规者的权利`,
          type: "success",
        },
        {
          title: "严禁上传及分享如下类型的链接",
          description: `
          含有色情、暴力、宣扬恐怖主义的链接,侵犯版权、未经授权的链接，其他违反中华人民共和国法律的链接，其他违反香港法律的链接`,
          type: "error",
        },
        {
          title: "违规链接投诉邮箱",
          description: `MAIL@HR.IM`,
          type: "info",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>

 
.el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
    margin-bottom: 5px;
  }
</style>
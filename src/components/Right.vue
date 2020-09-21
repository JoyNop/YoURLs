<template>
  <div>
    Right
  </div>
</template>

<script>
export default {
  name: 'Right',
  props: {
    msg: String
  },
  methods:{
    init(){
      console.log(333);
      let body={id:"FCF12B78-0662-4DD4-9A82-72040DB91C9E"}
      this.$axios.post("https://msdn.itellyou.cn/Index/GetCategory",body)
    }
  },
  mounted(){
    this.init()
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

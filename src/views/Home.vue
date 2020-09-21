<template>
<el-container>
  <el-header>Header</el-header>
  <el-main>  <div class="home">

 
<Left/>
    <Right/>
 

   </div></el-main>
  <el-footer>Footer</el-footer>
</el-container>

</template>

<script>
// @ is an alias to /src
import Left from '@/components/Left.vue'
import Right from '@/components/Right.vue'

export default {
  name: 'Home',
  components: {
    Left,Right
  }
}
</script>
<style lang="scss" scoped>
.home{
  display:flex;
  align-items: center;
  justify-content: space-around;
}
</style>
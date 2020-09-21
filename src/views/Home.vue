<template>
  <div class="home">

 
<Left/>
    <Right/>
 

    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
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
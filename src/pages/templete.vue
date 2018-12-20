<template>
  <div class="index">
    <router-view/>
  </div>
</template>
<script>
export default {
  name:'index',
  data(){
    return {}
  }
}
</script>
<style lang="scss" scoped>
.index {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  // overflow-y: auto;
}
</style>

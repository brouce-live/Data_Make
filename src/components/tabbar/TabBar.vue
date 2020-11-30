<template>
  <div id="tab-bar">
    <div style="margin-bottom: 10px; padding-left: 25px">
      <div>
        <img slot="item-icon" src="../../assets/img/tabbar/poss.svg" alt="" style="width: 50px; height: 50px; margin-left: 30px; margin-top: 10px">
      </div>
      <span style="margin-left: 30px">闵思诗</span>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Tabbar"
}
</script>

<style scoped>

</style>

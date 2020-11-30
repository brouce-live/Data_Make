<template>
<div class="tab-bar-item" @click="itemClick">
  <div style="float: left; margin-left: 10px">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon_active"></slot></div>
  </div>
  <div v-bind:class="{active: isActive}" style="float: left; height: 24px; line-height: 24px; font-size: 18px">
    <slot name="item-text"></slot>
  </div>
  <div style="clear:both;"></div>
</div>
</template>

<script>
export default {
  name: "TabBarItem",
  props:{
    path: String
  },
  data() {
    return{
      //isActive: false
    }
  },
  computed: {
    isActive(){
      return this.$route.path.indexOf(this.path) !== -1
    }
  },
  methods: {
    itemClick(){
      this.$router.replace(this.path)
      // console.log("itemClick");
    }
  }
}
</script>

<style scoped>

</style>

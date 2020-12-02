<template>
<div class="tab-bar-item" @click="itemClick">
  <div style="height: 35px; line-height: 35px;">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon_active"></slot></div>
  </div>
  <div v-bind:class="{active: isActive}" style="height: 25px; line-height: 25px; font-size: 20px">
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

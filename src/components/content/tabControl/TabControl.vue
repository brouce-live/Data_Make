<template>
<div class="tab-control">
  <div v-for="(item, index) in titles"
       class="tab-control-item"
       :class="{active: index === currentIndex}"
        @click="itemClick(index)">
    <span v-if="index === 2" @click="btnClick">
      <el-badge :value="5" class="item" :hidden="flag" >{{item}}</el-badge>
    </span>
    <span v-else>
      {{item}}
    </span>
  </div>
</div>
</template>

<script>
export default {
  name: "TabControl",
  data(){
    return{
      currentIndex: 0,
      flag: false
    }
  },
  props:{
    titles:{
      type: Array,
      default(){
        return []
      }
    }
  },
  methods:{
    itemClick(index){
      this.currentIndex = index
      this.$emit("tabClick", index)
    },
    btnClick(){
      this.flag = true;
    }
  }
}
</script>

<style scoped>
.tab-control{
  display: flex;
  text-align: center;
  font-size: 16px;
  height: 40px;
  line-height: 40px;
  background-color: #fff;
}
.tab-control-item{
  flex: 1;
}
.tab-control-item span{
  padding: 5px;
}
.active{
  color: red;
}
.active span{
  border-bottom: 3px solid red;
}
</style>

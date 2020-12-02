<template>
  <div id="home" style="display: flex; flex-direction: row">
    <div style="flex: 1; background-color: #888888">
      <div>
        <el-input v-model="input" :placeholder="icon"></el-input>
      </div>
      <div style="">
        <img slot="item-icon" src="../../assets/img/tabbar/poss.svg" alt="" style="width: 40px; height: 40px; margin-left: 5px; margin-top: 5px; float: left">
        <router-link to="/information" style="float: left; padding-top: 10px; padding-left: 6px">
          <el-badge is-dot class="item">
            <span style="height: 30px; line-height: 30px; font-size: 20px;">发起信息</span>
          </el-badge>
        </router-link>
        <div style="clear: both"></div>
      </div>
      <div style="">
        <img slot="item-icon" src="../../assets/img/tabbar/poss.svg" alt="" style="width: 40px; height: 40px; margin-left: 5px; margin-top: 5px; float: left">
        <router-link to="/notice" style="float: left; padding-top: 10px; padding-left: 6px">
          <el-badge :value="200" :max="99" class="item">
            <span style="height: 30px; line-height: 30px; font-size: 20px;">发起通报</span>
          </el-badge>
        </router-link>
        <div style="clear: both"></div>
      </div>
      <div style="">
        <img slot="item-icon" src="../../assets/img/tabbar/poss.svg" alt="" style="width: 40px; height: 40px; margin-left: 5px; margin-top: 5px; float: left">
        <router-link to="/instruct" style="float: left; padding-top: 10px; padding-left: 6px">
          <el-badge :value="12" class="item">
            <span style="height: 30px; line-height: 30px; font-size: 20px">发起指令</span>
          </el-badge>
        </router-link>
        <div style="clear: both"></div>
      </div>
      <div style="">
        <img slot="item-icon" src="../../assets/img/tabbar/poss.svg" alt="" style="width: 40px; height: 40px; margin-left: 5px; margin-top: 5px; float: left">
        <router-link to="/account" style="float: left; padding-top: 10px; padding-left: 6px">
          <span style="height: 30px; line-height: 30px; font-size: 20px;">发起台账</span>
        </router-link>
        <div style="clear: both"></div>
      </div>
    </div>
    <div style="flex: 6; background-color: peru; height: 100%">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

export default {
  name: "index",
  data(){
    return{
      icon: '\ue65a 搜索',
      path: '/home/news',
      input: ''
    }
  },
  created() {
    // return this.$router.push(this.path)
  },
  destroyed() {
    console.log("home destory");
  },
  activated() {
    console.log("home activated");
    this.$router.push(this.path)
  },
  deactivated() {
    console.log("home deactivated");
  },
  beforeRouteLeave(to, from, next){
    this.path = this.$route.path
    next()
  }
}
</script>

<style scoped>
a {
  text-decoration: none;
}
.router-link-active {
  text-decoration: none;
}
.el-input_inner{
  height: 40px;
  padding-left: 25px;
  border-radius: 20px;
  border-color: #4877e8;
  font-family: 'iconfont';
}
</style>

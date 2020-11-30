<template>
  <div id="home" style="display: flex; flex-direction: row">
    <div style="flex: 1; background-color: #888888">
      <div>
        <el-input v-model="input" :placeholder="icon"></el-input>
      </div>
      <div style="">
        <img slot="item-icon" src="../../assets/img/tabbar/poss.svg" alt="" style="width: 40px; height: 40px; margin-left: 5px; margin-top: 5px; float: left">
        <router-link to="/home/news" style="float: left; padding-top: 10px; padding-left: 6px">
          <el-badge is-dot class="item">
            <span style="height: 30px; line-height: 30px; font-size: 20px;">A市局</span>
          </el-badge>
        </router-link>
        <span style="float: left; padding-left: 120px; padding-top: 10px">12:00</span>
        <div style="clear: both"></div>
      </div>
      <div style="">
        <img slot="item-icon" src="../../assets/img/tabbar/poss.svg" alt="" style="width: 40px; height: 40px; margin-left: 5px; margin-top: 5px; float: left">
        <router-link to="/home/message" style="float: left; padding-top: 10px; padding-left: 6px">
          <el-badge :value="200" :max="99" class="item">
            <span style="height: 30px; line-height: 30px; font-size: 20px;">X县局</span>
          </el-badge>
        </router-link>
        <span style="float: left; padding-left: 130px; padding-top: 10px">昨天</span>
        <div style="clear: both"></div>
      </div>
      <div style="">

        <img slot="item-icon" src="../../assets/img/tabbar/poss.svg" alt="" style="width: 40px; height: 40px; margin-left: 5px; margin-top: 5px; float: left">
        <router-link to="/home/test1" style="float: left; padding-top: 10px; padding-left: 6px">
          <el-badge :value="12" class="item">
            <span style="height: 30px; line-height: 30px; font-size: 20px">Y县局</span>
          </el-badge>
        </router-link>
        <span style="float: left; padding-left: 105px; padding-top: 10px">9月20日</span>
        <div style="clear: both"></div>
      </div>
      <div style="">
        <img slot="item-icon" src="../../assets/img/tabbar/poss.svg" alt="" style="width: 40px; height: 40px; margin-left: 5px; margin-top: 5px; float: left">
        <router-link to="/home/news" style="float: left; padding-top: 10px; padding-left: 6px">
          <span style="height: 30px; line-height: 30px; font-size: 20px; color: black">W县局</span>
        </router-link>
        <span style="float: left; padding-left: 95px; padding-top: 10px">9月19日</span>
        <div style="clear: both"></div>
      </div>
      <div style="">
        <img slot="item-icon" src="../../assets/img/tabbar/poss.svg" alt="" style="width: 40px; height: 40px; margin-left: 5px; margin-top: 5px; float: left">
        <router-link to="/home/news" style="float: left; padding-top: 10px; padding-left: 6px">
          <span style="height: 30px; line-height: 30px; font-size: 20px; color: black">任务助手</span>
        </router-link>
        <span style="float: left; padding-left: 75px; padding-top: 10px">9月19日</span>
        <div style="clear: both"></div>
      </div>
      <div style="">
        <img slot="item-icon" src="../../assets/img/tabbar/poss.svg" alt="" style="width: 40px; height: 40px; margin-left: 5px; margin-top: 5px; float: left">
        <router-link to="/home/news" style="float: left; padding-top: 10px; padding-left: 6px">
          <span style="height: 30px; line-height: 30px; font-size: 20px; color: black">我的审批</span>
        </router-link>
        <span style="float: left; padding-left: 75px; padding-top: 10px">9月19日</span>
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
  name: "Home",
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
